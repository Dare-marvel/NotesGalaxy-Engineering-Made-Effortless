import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Flex,
  Grid,
  GridItem,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.png';

import adwait from '../assets/adwait-purao.png';

import SidebarAdLeft from '../components/SidebarAd/SidebarAdLeft';
import SidebarAdRight from '../components/SidebarAd/SidebarAdRight';

import { keyframes } from '@emotion/react';

// Keyframe animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;



const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Star component
// const Star = ({ size = "2px", top, left, delay = "0s" }) => (
//   <Box
//     position="absolute"
//     width={size}
//     height={size}
//     backgroundColor="purple.300"
//     borderRadius="50%"
//     top={top}
//     left={left}
//     animation={`${twinkle} 2s ease-in-out ${delay} infinite`}
//   />
// );

// Enhanced floating planet component
const FloatingPlanet = ({ size, type, top, left, right = "0%", duration = "20s" }) => {
  const planetStyles = {
    jupiter: {
      background: `radial-gradient(circle at 30% 30%, #FFD700, #FF8C00, #8B4513, #654321)`,
      boxShadow: `
        0 0 40px rgba(255, 215, 0, 0.4),
        inset -20px -20px 40px rgba(0, 0, 0, 0.3),
        inset 20px 20px 40px rgba(255, 255, 255, 0.1)
      `
    },
    neptune: {
      background: `radial-gradient(circle at 30% 30%, #4169E1, #0000CD, #191970, #000080)`,
      boxShadow: `
        0 0 40px rgba(65, 105, 225, 0.5),
        inset -15px -15px 30px rgba(0, 0, 0, 0.4),
        inset 15px 15px 30px rgba(255, 255, 255, 0.1)
      `
    },
    saturn: {
      background: `radial-gradient(circle at 30% 30%, #FAD5A5, #DEB887, #CD853F, #8B7355)`,
      boxShadow: `
        0 0 35px rgba(250, 213, 165, 0.4),
        inset -18px -18px 35px rgba(0, 0, 0, 0.3),
        inset 18px 18px 35px rgba(255, 255, 255, 0.15)
      `
    }
  };

  return (
    <Box
      position="absolute"
      width={size}
      height={size}
      borderRadius="50%"
      background={planetStyles[type].background}
      boxShadow={planetStyles[type].boxShadow}
      top={top}
      left={left}
      right={right}
      animation={`${float} ${duration} ease-in-out infinite`}
      _before={{
        content: '""',
        position: 'absolute',
        top: '20%',
        left: '25%',
        width: '30%',
        height: '25%',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.3)',
        filter: 'blur(8px)'
      }}
    />
  );
};

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const isMobile = useBreakpointValue({ base: true, md: false });
  // const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

  const orbitSize = useBreakpointValue({ base: "100px", md: "125px", lg: "127px" });

  const orbit = keyframes`
    0% { transform: rotate(0deg) translateX(${orbitSize}) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(${orbitSize}) rotate(-360deg); }
  `;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqData = [
    {
      question: "What is Notes-Galaxy?",
      answer: "Notes-Galaxy is your comprehensive destination for engineering notes. We provide well-organized, subject-wise categorized content to make your learning journey smoother and more effective."
    },
    {
      question: "How can I download notes?",
      answer: "Our platform offers instant download support for all notes. Simply browse through the subject categories, find what you need, and download immediately with just one click."
    },
    {
      question: "Are the notes regularly updated?",
      answer: "Yes! We continuously update our content to ensure you have access to the latest information and trends in engineering. Our team regularly reviews and adds new material."
    },
    {
      question: "Can I search for specific topics?",
      answer: "Absolutely! Our advanced search and filter capability allows you to quickly find exactly what you're looking for across all subjects and topics."
    },
    {
      question: "Is there a community aspect?",
      answer: "Yes! Our community lets you share notes, earn likes, and see rankings based on contributions. Plus, you can write blogs and connect with others. More exciting features are coming soon!"
    }
  ];

  return (
    <Container maxW="container.xl" width={["100%", "85%", "85%"]} py={[3, 4, 5]} px={[2, 3, 5]}
    >
      <SidebarAdLeft
        numberOfAds={6}
        adSlots={['4333835944', '9478180943', '8042079841']}
        position="left"
      />
      {/* Animated Background Elements */}
      {/* <Star size="3px" top="10%" left="15%" delay="0s" />
      <Star size="2px" top="25%" left="85%" delay="1s" />
      <Star size="4px" top="40%" left="10%" delay="2s" />
      <Star size="2px" top="60%" left="90%" delay="0.5s" />
      <Star size="3px" top="80%" left="20%" delay="1.5s" />
      <Star size="2px" top="15%" left="70%" delay="2.5s" />
      <Star size="3px" top="35%" left="60%" delay="0.8s" />
      <Star size="2px" top="75%" left="75%" delay="1.8s" /> */}

      {/* <FloatingPlanet size="80px" type="jupiter" top="8%" left="85%" duration="25s" />
      <FloatingPlanet 
      size={{ base: "20px", md: "40px", lg: "60px" }} 
      type="neptune" 
      top={{ base: "5%", md: "32%", lg: "31%" }} 
      left={{ base: "70%", md: "16%", lg: "28%" }} 
      duration="30s" 
      />
      <FloatingPlanet 
      size={{ base: "20px", md: "40px", lg: "60px" }}
      type="saturn" 
      top={{ base: "5%", md: "56%", lg: "59%" }} 
      left={{ base: "70%", md: "25%", lg: "32%" }} 
      duration="35s" /> */}

      <Container maxWidth="1200px" px={{ base: 4, md: 10, lg: 12 }}>
        {/* Header Section */}
        <VStack spacing={8} py={16}>
          <Box
            animation={isVisible ? `${slideUp} 1s ease-out` : ''}
            textAlign="center"
          >
            <Flex align="center" left={{ base: "0", md: "50px", lg: "100px" }} mb={4} justifyContent="center">
              <Image src={logo} alt="Logo" boxSize={{ base: "40px", md: "50px", lg: "60px" }} mr={3} />
              <Heading
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" })}
                fontWeight="bold"
                bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                backgroundClip="text"
                color="transparent"
                mb={4}
                animation={`${pulse} 3s ease-in-out infinite`}
              >
                NotesGalaxy
              </Heading>
            </Flex>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              maxWidth="800px"
              mx="auto"
              px={{ base: 4, md: 12, lg: 12 }}
              lineHeight="1.8"
              animation={isVisible ? `${slideUp} 1s ease-out 0.3s both` : ''}
            >
              Welcome to your one-stop destination for all engineering notes! 🚀
              Dive into well-organized, comprehensive content for a smoother learning journey.
              📝💡 Join our community, share insights, and stay updated with the latest trends.
            </Text>
          </Box>

          {/* Features Grid */}
          <Box
            px={{ base: 4, md: 12, lg: 12 }}
          >
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 210px)",
                lg: "repeat(3, 1fr)"
              }}
              gap={6}
              width="100%"
              animation={isVisible ? `${slideUp} 1s ease-out 0.6s both` : ''}
            >
              {[
                { icon: "📁", text: "Subject-wise categorized notes" },
                { icon: "📥", text: "Instant download support" },
                { icon: "🧠", text: "Neatly formatted explanations" },
                { icon: "🔍", text: "Search and filter capability" },
                { icon: "🔄", text: "Continuous updates" },
                { icon: "👥", text: "Community engagement" }
              ].map((feature, index) => (
                <GridItem key={index}>
                  <Box
                    p={6}
                    borderRadius="20px"
                    background="linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))"
                    border="2px solid"
                    borderColor="purple.200"
                    textAlign="center"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                      borderColor: "purple.400"
                    }}
                  >
                    <Text fontSize="3xl" mb={3}>{feature.icon}</Text>
                    <Text fontWeight="semibold" color="gray.700">
                      {feature.text}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </VStack>

        {/* FAQ Section */}
        <Box
          mb={16}
          animation={isVisible ? `${slideUp} 1s ease-out 0.9s both` : ''}
        >
          <Heading
            textAlign="center"
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            color="purple.700"
            mb={8}
          >
            Frequently Asked Questions
          </Heading>
          <Accordion 
          px={{ base: 3, sm: 4, md: 12, lg: 12 }}
          allowMultiple>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} border="none" mb={4}>
                <AccordionButton
                  p={6}
                  borderRadius="15px"
                  background="linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))"
                  border="2px solid"
                  borderColor="purple.200"
                  _hover={{
                    borderColor: "purple.400",
                    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))"
                  }}
                  _expanded={{
                    borderColor: "purple.500",
                    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))"
                  }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" fontSize="lg" color="gray.800">
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon color="purple.600" fontSize="xl" />
                </AccordionButton>
                <AccordionPanel p={6} pt={4}>
                  <Text color="gray.700" lineHeight="1.6">
                    {faq.answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        {/* About Creator Section */}
        <Box
          mb={16}
          animation={isVisible ? `${slideUp} 1s ease-out 1.2s both` : ''}
          px={{ base: 3, sm: 4, md: 12, lg: 12 }}
        >
          <Heading
            textAlign="center"
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            color="purple.700"
            mb={12}
          >
            Meet the Creator
          </Heading>

          <Flex
            direction={useBreakpointValue({ base: "column", lg: "row" })}
            alignItems="center"
            gap={12}
            p={8}
            borderRadius="25px"
            background="linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.08))"
            border="2px solid"
            borderColor="purple.200"
          >
            {/* Creator Image */}
            <Box
              flexShrink={0}
              position="relative"
            >
              <Box
                width={useBreakpointValue({ base: "200px", md: "250px" })}
                height={useBreakpointValue({ base: "200px", md: "250px" })}
                borderRadius="50%"
                background="linear-gradient(135deg, #8B5CF6, #3B82F6)"
                p={1}
                animation={`${pulse} 4s ease-in-out infinite`}
              >
                <Box
                  width="100%"
                  height="100%"
                  borderRadius="50%"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    src={adwait}
                    alt="Creator Photo"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    fallback={
                      <Box
                        width="100%"
                        height="100%"
                        background="gray.200"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="6xl"
                        color="gray.600"
                      >
                        👨‍💻
                      </Box>
                    }
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    background="linear-gradient(45deg, transparent 60%, rgba(139, 92, 246, 0.2))"
                    borderRadius="50%"
                  />
                </Box>
              </Box>

              {/* Orbiting elements */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width="300px"
                height="300px"
                pointerEvents="none"
              >
                <Box
                  position="absolute"
                  width="20px"
                  height="20px"
                  background="linear-gradient(135deg, #8B5CF6, #3B82F6)"
                  borderRadius="50%"
                  animation={`${orbit} 10s linear infinite`}
                  top="50%"
                  left="50%"
                  marginTop="-10px"
                  marginLeft="-10px"
                />
              </Box>
            </Box>

            {/* Creator Description */}
            <VStack spacing={6} flex={1} alignItems="flex-start">
              <Heading
                fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
                color="purple.700"
                textAlign={useBreakpointValue({ base: "center", lg: "left" })}
                width="100%"
              >
                Tech Enthusiast & Problem Solver
              </Heading>

              <Text
                color="gray.700"
                fontSize={useBreakpointValue({ base: "md", md: "lg" })}
                lineHeight="1.8"
                textAlign={useBreakpointValue({ base: "center", lg: "left" })}
              >
                I'm a curious and creative tech enthusiast currently pursuing Computer Engineering at SPIT, Mumbai.
                From building an machine learning models to AI powered web applications,
                I love solving real-world problems through code. My journey includes hands-on experience with full-stack
                development and data analysis.
              </Text>

              <Text
                color="gray.700"
                fontSize={useBreakpointValue({ base: "md", md: "lg" })}
                lineHeight="1.8"
                textAlign={useBreakpointValue({ base: "center", lg: "left" })}
              >
                What sets me apart is my blend of technical depth and leadership—mentoring juniors, organizing tech events,
                and crafting engaging blogs. Whether it's sketching ideas or debugging code, I bring energy, precision,
                and a passion for building meaningful solutions.
              </Text>

              {/* Skills Tags */}
              <Flex wrap="wrap" gap={3} justify={useBreakpointValue({ base: "center", lg: "flex-start" })}>
                {["Full-Stack Dev", "AI/ML", "Leadership", "Blogging", "Data Analysis"].map((skill, index) => (
                  <Box
                    key={index}
                    px={4}
                    py={2}
                    borderRadius="full"
                    background="linear-gradient(135deg, #8B5CF6, #3B82F6)"
                    color="white"
                    fontSize="sm"
                    fontWeight="semibold"
                    animation={`${twinkle} 3s ease-in-out ${index * 0.2}s infinite`}
                  >
                    {skill}
                  </Box>
                ))}
              </Flex>
            </VStack>
          </Flex>
        </Box>
      </Container>
      <SidebarAdRight
        numberOfAds={6}
        adSlots={['3152616213', '3253352242', '7001025560']}
        position="right"
      />
    </Container>
  );
};

export default AboutUs;