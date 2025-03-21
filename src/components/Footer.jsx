import React from 'react';
import { Box, Flex, Link, Text, Icon, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Animated icon component
const AnimatedIcon = ({ icon, href }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.2,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.9,
        rotate: -5,
        transition: { duration: 0.1 }
      }}
    >
      <Link 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        display="inline-flex"
        _hover={{ textDecoration: 'none' }}
      >
        <Icon 
          as={icon} 
          boxSize={6} 
          color="whiteAlpha.900" 
          filter="drop-shadow(0 0 8px #9F7AEA) drop-shadow(0 0 12px #805AD5)"
          transition="filter 0.3s ease"
          _hover={{ 
            filter: "drop-shadow(0 0 12px #9F7AEA) drop-shadow(0 0 18px #805AD5) drop-shadow(0 0 24px #4299E1)"
          }}
        />
      </Link>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      mt={10}
      py={8}
      borderTop="1px solid"
      borderColor="whiteAlpha.300"
      bg="linear-gradient(180deg, rgba(14, 25, 47, 0) 0%, rgba(19, 2, 50, 0.5) 100%)"
      overflow="hidden"
    >
      {/* Animated glowing background line */}
      <motion.div
        animate={{
          x: ["0%", "100%", "0%"],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          top: "0",
          left: "-50%",
          width: "200%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, #9F7AEA 50%, transparent 100%)",
          zIndex: 0
        }}
      />

      <Flex 
        direction={{ base: "column", md: "row" }} 
        maxW="1200px" 
        mx="auto" 
        px={6}
        align="center"
        justify="space-between"
        position="relative"
        zIndex={1}
      >
        {/* Copyright text - Updated with your name and color */}
        <Text 
          fontSize="md" 
          color="white" /* Purplish-blue color for better visibility */
          mb={{ base: 6, md: 0 }}
          textShadow="0 0 5px #9F7AEA"
          fontWeight="medium"
        >
          © {new Date().getFullYear()} Adwait Purao. All rights reserved.
        </Text>

        {/* Vertical divider for md screens and up - with neon glow */}
        <Box display={{ base: "none", md: "block" }}>
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              height: "30px",
              width: "2px",
              background: "linear-gradient(180deg, #9F7AEA 0%, #805AD5 100%)",
              boxShadow: "0 0 10px #9F7AEA, 0 0 15px #805AD5",
            }}
          />
        </Box>

        {/* Social icons */}
        <Flex gap={6} align="center">
          <AnimatedIcon icon={FaGithub} href="https://github.com/Dare-marvel/" />
          <AnimatedIcon icon={FaTwitter} href="https://x.com/PuraoAdwait" />
          <AnimatedIcon icon={FaLinkedin} href="https://www.linkedin.com/in/adwait-p-04a4a222a/" />
          <AnimatedIcon icon={FaInstagram} href="https://www.instagram.com/adwaitpurao/" />
          <AnimatedIcon icon={FaEnvelope} href="mailto:puraosadwait@gmail.com" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;