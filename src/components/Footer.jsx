import { Box, Flex, Text, IconButton, Image, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import MediumLogo from '../assets/Icons/medium.svg';
import InstagramLogo from '../assets/Icons/instagram.svg';
import GithubLogo from '../assets/Icons/github.svg';
import TwitterLogo from '../assets/Icons/twitter.svg';
import LinkedinLogo from '../assets/Icons/linkedin.svg';

import { AtSign, ShipWheel } from 'lucide-react';

// Animated icon component
const AnimatedIcon = ({ icon, href }) => {
  const getAriaLabelFromHref = (href) => {
    try {
      const url = new URL(href);
      const host = url.hostname;

      if (host.includes("linkedin.com")) return "Visit Adwait's LinkedIn Profile";
      if (host.includes("github.com")) return "View Adwait's GitHub Repository";
      if (host.includes("x.com") || host.includes("twitter.com")) return "Follow Adwait on Twitter (X)";
      if (host.includes("instagram.com")) return "Check out Adwait's Instagram";
      if (host.includes("medium.com")) return "Read Adwait's articles on Medium";
      if (host.includes("netlify.app")) return "Visit Adwait's personal website";
      if (href.startsWith("mailto:")) return "Send an email to Adwait";

      return `Visit ${host}`;
    } catch {
      return "External link";
    }
  };

  const isUrl = typeof icon === "string";

  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.9,
        rotate: -5,
        transition: { duration: 0.1 }
      }}
    >
      <IconButton
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={getAriaLabelFromHref(href)}
        icon={
          isUrl ? (
            <Image 
              src={icon} 
              alt="" 
              boxSize={{ base: "20px", sm: "24px", md: "28px" }}
              objectFit="contain"
            />
          ) : (
            <Icon
              as={icon}
              boxSize={{ base: "20px", sm: "24px", md: "28px" }}
              color="whiteAlpha.900"
            />
          )
        }
        variant="ghost"
        size={{ base: "sm", sm: "md" }}
        isRound
        minW={{ base: "40px", sm: "48px", md: "56px" }}
        h={{ base: "40px", sm: "48px", md: "56px" }}
        filter="drop-shadow(0 0 8px #9F7AEA) drop-shadow(0 0 12px #805AD5)"
        transition="all 0.3s ease"
        _hover={{
          filter: "drop-shadow(0 0 12px #9F7AEA) drop-shadow(0 0 18px #805AD5) drop-shadow(0 0 24px #4299E1)",
          transform: "scale(1.1) rotate(5deg)",
        }}
        _active={{
          transform: "scale(0.95) rotate(-5deg)",
        }}
      />
    </motion.div>
  );
};

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      mt={10}
      pt={{ base: 6, md: 8 }}
      pb={{ base: 2, md: 3 }}
      borderColor="whiteAlpha.300"
      bg="linear-gradient(180deg, rgba(14, 25, 47, 0) 0%, rgba(19, 2, 50, 0.5) 100%)"
      overflow="hidden"
      width="100%"
    >
      <Flex
        direction="column"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, sm: 6 }}
        align="center"
        position="relative"
        zIndex={1}
      >
        {/* Copyright text */}
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color="white"
          mb={5}
          textShadow="0 0 8px #9F7AEA, 0 0 12px #805AD5, 0 0 18px #805AD5"
          fontWeight="medium"
          textAlign="center"
        >
          © {new Date().getFullYear()} Adwait Purao. All rights reserved.
        </Text>

        {/* Horizontal divider */}
        <Box
          w={{ base: "80%", md: "60%" }}
          mb={5}
        >
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
              height: "2px",
              width: "100%",
              background: "linear-gradient(90deg, transparent 0%, rgb(0, 255, 213) 50%, transparent 100%)",
              boxShadow: "0 0 10px #00FFD1, 0 0 20px #00C9A7",
            }}
          />
        </Box>

        {/* Social icons */}
        <Flex
          gap={{ base: 0, sm: 2, md: 4 }}
          align="center"
          justify="center"
          flexWrap="wrap"
          maxW="100%"
        >
          <AnimatedIcon icon={GithubLogo} href="https://github.com/Dare-marvel/" />
          <AnimatedIcon icon={TwitterLogo} href="https://x.com/PuraoAdwait" />
          <AnimatedIcon icon={LinkedinLogo} href="https://www.linkedin.com/in/adwait-p-04a4a222a/" />
          <AnimatedIcon icon={InstagramLogo} href="https://www.instagram.com/adwaitpurao/" />
          <AnimatedIcon icon={ShipWheel} href="https://adwaitpurao.netlify.app/" />
          <AnimatedIcon icon={MediumLogo} href="https://medium.com/@adwait.purao" />
          <AnimatedIcon icon={AtSign} href="mailto:puraosadwait@gmail.com" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;