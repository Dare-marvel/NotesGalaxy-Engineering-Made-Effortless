import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  Container,
  useToast,
  Icon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaRocket, FaSatellite, FaSpaceShuttle, FaStar } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

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

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual Formspree endpoint
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Your message has been successfully sent!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to send message. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bg="white"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    // py={{ base: 6, sm: 8, md: 12, lg: 12 }}
    // px={{ base: 4, sm: 6, md: 10, lg: 6 }}
    >
      {/* Floating elements */}
      <FloatingElement
        icon={FaRocket}
        top="15%"
        left="10%"
        delay={0}
        size={{ base: "25px", sm: "25px", md: "35px", lg: "40px" }}
      />
      <FloatingElement 
      icon={FaSatellite} 
      top={{ base: "15%", sm: "15%", md: "20%", lg: "20%" }}
      right="15%" 
      delay={1} 
      size={{ base: "22px", sm: "25px", md: "30px", lg: "35px" }} 
      />
      <FloatingElement icon={FaSpaceShuttle} 
      top={{ base: "85%", sm: "85%", md: "75%", lg: "75%" }}
      left="10%" 
      delay={2} 
      size={{ base: "22px", sm: "22px", md: "25px", lg: "30px" }} 
      />
      <FloatingElement 
      icon={FaStar} 
      top={{ base: "85%", sm: "85%", md: "75%", lg: "75%" }}
      right="10%" 
      delay={3} 
      size={{ base: "15px", sm: "15px", md: "17px", lg: "20px" }} 
      />

      <FloatingElement 
      icon={FaStar} 
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
        zIndex={2}
      >
        <VStack spacing={{ base: 4, sm: 3, md: 4, lg: 5 }}>
          <Heading
            textAlign="center"
            bgGradient="linear(to-r, purple.500, blue.500)"
            bgClip="text"
            fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}
          >
            Contact Us
          </Heading>

          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            bg="purple.50"
            borderColor="purple.300"
            _hover={{ borderColor: "blue.400" }}
            size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
          />

          <Input
            placeholder="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            bg="purple.50"
            borderColor="purple.300"
            _hover={{ borderColor: "blue.400" }}
            size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
          />

          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="filled"
            bg="purple.50"
            borderColor="purple.300"
            _hover={{ borderColor: "blue.400" }}
            size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
            minH={{ base: "120px", sm: "100px", md: "120px", lg: "150px" }}
          />

          <Button
            onClick={handleSubmit}
            bgGradient="linear(to-r, purple.500, blue.500)"
            color="white"
            rightIcon={<FaPaperPlane />}
            _hover={{ transform: "scale(1.05)", bgGradient: "linear(to-r, purple.600, blue.600)" }}
            size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
            w="full"
          >
            Send Message
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactPage;