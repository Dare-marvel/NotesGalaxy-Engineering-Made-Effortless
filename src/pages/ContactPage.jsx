import { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Input,
  Select,
  Textarea,
  Button,
  Container,
  useToast,
  Icon,
  Flex,
  IconButton,
  Tooltip
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import {
  Rocket,
  Star,
  Plus,
  Send,
  Satellite,
  Trash2,
  Orbit
} from 'lucide-react';

import { getFirestore, doc, setDoc, arrayUnion } from 'firebase/firestore';
import app from '../config/firebaseConfig'
import { InfoIcon } from "@chakra-ui/icons"
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { usePageMeta } from '../hooks/usePageMeta';

import SidebarAd from '../components/GoogleAds/SidebarAd';
import subjectsList from '../constants/subjectsList';
import BottomAd from '../components/GoogleAds/BottomAd';

const FloatingElement = ({ icon, top, left, right, duration = 5, size = "30px", delay = 0 }) => (
  <Box
    as={motion.div}
    position="absolute"
    top={top}
    left={left}
    right={right}
    initial={{ opacity: 0 }}
    animate={{
      y: ["0px", "30px", "0px"],
      opacity: [0.2, 0.5, 0.2],
      rotate: [0, 360]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    zIndex={1}
  >
    <Icon as={icon} w={size} h={size} color="purple.400" />
  </Box>
);


const db = getFirestore(app);

const ContactPage = () => {
  usePageMeta(
    "Contact Us",
    "Reach out to the NotesGalaxy team. Whether it's feedback, support, or collaboration, we're here to connect across the stars."
  );

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  const toast = useToast();

  const handleAddSubject = () => {
    setSubjects([...subjects, { name: "", files: [], showCustomInput: false }]);
  };

  const handleSubjectSelect = (index, selectedValue) => {
    const updatedSubjects = [...subjects];
    if (selectedValue === "Other") {
      updatedSubjects[index].name = "";
      updatedSubjects[index].showCustomInput = true;
    } else {
      updatedSubjects[index].name = selectedValue;
      updatedSubjects[index].showCustomInput = false;
    }
    setSubjects(updatedSubjects);
  };

  const handleSubjectChange = (index, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].name = value;
    setSubjects(updatedSubjects);
  };

  const handleFileChange = (index, event) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].files = event.target.files;
    setSubjects(updatedSubjects);
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const sendConfirmationEmail = async (recipientEmail, recipientName) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your template ID
        {
          to_email: recipientEmail,
          to_name: recipientName,
          from_name: "Notes Galaxy",
          message: "Thank you for sharing your notes. We'll make sure you receive proper credit for your contribution."
        }
      );

      return response.status === 200;
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      return false;
    }
    finally {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }
  };

  const uploadFiles = async (files) => {
    const uploadPromises = [...files].map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("https://store1.gofile.io/uploadFile", formData);

        // console.log("Checking ",response.data)
        if (response.data.status === "ok") {
          return response.data.data.downloadPage;
        } else {
          return null;
        }
      } catch (error) {
        console.error("Upload failed:", error);
        return null;
      }
    });

    return await Promise.all(uploadPromises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Function to validate email format
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    // Check if name is not null and email is in proper format
    if (!name || name.trim() === "") {
      toast({
        title: "Error",
        description: "Name cannot be empty.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Invalid email format.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    if (subjects.length !== 0) {
      for (const subject of subjects) {
        if (subject.files.length > 0) {
          const fileLinks = await uploadFiles(subject.files);
          const formattedFiles = fileLinks.map(link => ({
            link,
            approved: 0 // default not approved
          }));
          // console.log("File Links:", fileLinks);
          setDoc(doc(db, 'subjects', subject.name), {
            name: subject.name,
            users: arrayUnion({
              name: name,
              email: email,
              message: message,
              files: formattedFiles
            })
          }, { merge: true });

        }
      }
    }
    else {
      toast({
        title: "Information",
        description: "There are no files to upload",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }

    try {
      const response = await axios.post(import.meta.env.VITE_FORMSPREE_URL, {
        name,
        email,
        message,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      await sendConfirmationEmail(email, name);

      if (response.data.ok) {



        toast({
          title: "Success",
          description: "Your files and message were sent successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setSubjects([]);
      } else {
        throw new Error();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    finally {
      setLoading(false);
    }

  };


  return (
    <Flex direction="column" minH="100vh">
      <Container maxW="container.xl" py={[3, 4, 5]} px={[2, 3, 5]}
      >
        <SidebarAd
          position="left"
          adSlot="4333835944"
        />
        {/* Floating elements */}
        <FloatingElement
          icon={Rocket}
          top="15%"
          left="15%"
          delay={0}
          size={{ base: "25px", sm: "25px", md: "35px", lg: "40px" }}
        />
        <FloatingElement
          icon={Satellite}
          top={{ base: "15%", sm: "15%", md: "20%", lg: "20%" }}
          right="15%"
          delay={1}
          size={{ base: "22px", sm: "25px", md: "30px", lg: "35px" }}
        />
        <FloatingElement icon={Orbit}
          top={{ base: "85%", sm: "85%", md: "75%", lg: "75%" }}
          left="13%"
          delay={2}
          size={{ base: "22px", sm: "22px", md: "25px", lg: "30px" }}
        />
        <FloatingElement
          icon={Star}
          top={{ base: "85%", sm: "85%", md: "75%", lg: "75%" }}
          right="15%"
          delay={3}
          size={{ base: "15px", sm: "15px", md: "17px", lg: "20px" }}
        />

        <FloatingElement
          icon={Star}
          top="40%"
          left="20%"
          delay={4}
          size={{ base: "19px", sm: "18px", md: "20px", lg: "23px" }}
        />

        <Container
          maxW={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
          bg="white"
          borderRadius="xl"
          p={{ base: 3, sm: 2, md: 3, lg: 4 }}
          boxShadow="2xl"
          border="2px"
          borderColor="purple.200"
          position="relative"
          overflow={"auto"}
          zIndex={1}
          mt={{ base: 20, sm: 20, md: 16, lg: 16 }}
        >
          <VStack spacing={{ base: 4, sm: 3, md: 4, lg: 5 }}>
            <Flex justify="center" align="center">
              <Heading
                textAlign="center"
                bgGradient="linear(to-r, purple.500, blue.500)"
                bgClip="text"
                fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}
              >
                Contact Us
              </Heading>
              <Tooltip
                label="🚀 If you want to help your fellow classmates, you can upload your notes here. Also, if you want to suggest any changes, you can do so here. 🌌 Don't worry, you will be given credit for your contributions. 🪐"
                isOpen={isHovered}
                placement="top-start"
              >
                <IconButton
                  icon={<InfoIcon />}
                  variant="ghost"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  aria-label="Info"
                />
              </Tooltip>
            </Flex>

            <Input
              placeholder="Your Name"
              id="name"
              isDisabled={loading}
              variant="filled"
              bg="purple.50"
              borderColor="purple.300"
              borderRadius="md"
              _hover={{ borderColor: "blue.400" }}
              size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
            />

            <Input
              placeholder="Your Email"
              type="email"
              id="email"
              isDisabled={loading}
              variant="filled"
              bg="purple.50"
              borderColor="purple.300"
              borderRadius="md"
              _hover={{ borderColor: "blue.400" }}
              size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
            />

            {subjects.map((subject, index) => (
              <Box key={index}
                w="full"
                p={3}
                border="2px"
                borderColor="purple.300"
                bg="purple.50"
                borderRadius="md">
                <Flex align="center">
                  <Select
                    placeholder="Select Subject"
                    value={subject.showCustomInput ? "Other" : subject.name}
                    isDisabled={loading}
                    onChange={(e) => handleSubjectSelect(index, e.target.value)}
                    mr={2}
                    variant="filled"
                    bg="purple.50"
                    borderColor="purple.300"
                    borderRadius="md"
                    _hover={{ borderColor: "blue.400" }}
                    size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
                  >
                    {subjectsList.map((subjectName) => (
                      <option key={subjectName} value={subjectName}>
                        {subjectName}
                      </option>
                    ))}
                  </Select>
                  <IconButton
                    size="sm"
                    colorScheme="red"
                    icon={<Trash2 />}
                    onClick={() => handleRemoveSubject(index)}
                    isDisabled={loading}
                    _hover={{ bg: 'red.800' }}
                  >
                  </IconButton>
                </Flex>
                {subject.showCustomInput && (
                  <Input
                    placeholder="Enter custom subject name"
                    value={subject.name}
                    isDisabled={loading}
                    onChange={(e) => handleSubjectChange(index, e.target.value)}
                    mt={2}
                    variant="filled"
                    bg="purple.50"
                    borderColor="purple.300"
                    borderRadius="md"
                    _hover={{ borderColor: "blue.400" }}
                    size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
                  />
                )}
                <Input
                  isDisabled={loading}
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange(index, e)}
                  mt={2}
                  p={2}
                  size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
                  borderColor="purple.300"
                  borderRadius="md"
                  _hover={{ borderColor: 'blue.400' }}
                />
              </Box>

            ))}

            <Button
              isDisabled={loading}
              leftIcon={<Plus />}
              colorScheme="purple"
              onClick={handleAddSubject}
              size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
            >
              Add Subject
            </Button>

            <Textarea
              placeholder="Your Message"
              id="message"
              variant="filled"
              bg="purple.50"
              borderColor="purple.300"
              borderRadius="md"
              isDisabled={loading}
              _hover={{ borderColor: "blue.400" }}
              size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
              minH={{ base: "120px", sm: "100px", md: "120px", lg: "150px" }}
            />

            <Button
              onClick={handleSubmit}
              bgGradient="linear(to-r, purple.500, blue.500)"
              isLoading={loading}
              color="white"
              rightIcon={<Send />}
              _hover={{ transform: "scale(1.05)", bgGradient: "linear(to-r, purple.600, blue.600)" }}
              size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
              w="full"
            >
              Send Message
            </Button>
          </VStack>
        </Container>
        <SidebarAd
          position="right"
          adSlot="3152616213"
        />
      </Container>

      <Box textAlign="center" mt={8} mb={1}>
        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1OFPSYn-FlRLqvHZwPUz02tcwWQKxgVP5Ps5S7pGX9KL47g/viewform?usp=sharing&ouid=103476457106170452616"
          target="_blank"
          rel="noopener noreferrer"
          bgGradient="linear(to-r,rgb(82, 82, 182),rgb(143, 51, 209))"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, #4b0082, #800080)",
            boxShadow: "0px 0px 30px rgba(137, 207, 240, 0.9)",
            transform: "scale(1.05)",
          }}
          _active={{
            bgGradient: "linear(to-r, #800080, #1a1a40)",
            boxShadow: "0px 0px 40px rgba(173, 216, 230, 1)",
          }}
          padding="1.5rem"
          borderRadius="lg"
          fontWeight="bold"
          fontSize={["sm", "md", "lg"]}
          boxShadow="0px 0px 20px rgba(137, 207, 240, 0.7)"
          transition="all 0.3s ease-in-out"
        >
          🚀 Feedback Form
        </Button>

      </Box>

      <Box
        width={{ base: '90%', sm: "90%", md: '80%' }}
        textAlign="center"
        mx="auto"
        mt={6}
        mb={1}
        px={{ base: 4, md: 12, lg: 12 }}>
        <BottomAd />
      </Box>

    </Flex>
  );
};

export default ContactPage;