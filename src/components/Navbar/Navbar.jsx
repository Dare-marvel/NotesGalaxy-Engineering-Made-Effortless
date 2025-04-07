import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  Container,
  Button,
  useDisclosure,
  IconButton,
  VStack,
  Collapse,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import logo from '../../assets/logo.png';
import { keyframes } from "@emotion/react";

const MotionImage = motion(Image);

const spaceGlow = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const glitter = keyframes`
  0% { opacity: 0.5; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.2); }
`;

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Notes', path: '/' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      zIndex="999"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex minH="60px" py={2} align="center" justify="space-between">
          {/* Logo and Brand Name */}
          <HStack spacing={3} cursor="pointer" onClick={() => navigate('/')}>
            <MotionImage
              src={logo}
              alt="NotesGalaxy Logo"
              boxSize="40px"
              whileTap={{ rotate: 20, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              animation={`${spaceGlow} 3s infinite alternate`}
              bgClip="text"
            >
              NotesGalaxy
            </Text>
          </HStack>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <VStack display={{ base: 'flex', md: 'none' }} pb={4} spacing={4}>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} style={{ width: '100%' }}>
                <Button
                  w="full"
                  variant="ghost"
                  justifyContent="start"
                  aria-label={item.name}
                  color={location.pathname === item.path ? 'blue.500' : ''}
                  fontWeight={location.pathname === item.path ? 'semibold' : 'normal'}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </VStack>
        </Collapse>
      </Container>
      <Box
        position="absolute"
        bottom="-2px"
        left="0"
        width="100%"
        height="3.5px"
        bgGradient="linear(to-r, green.200, purple.200, blue.200, cyan.200)"
        animation={`${spaceGlow} 3s infinite alternate`}
        sx={{
          _before: {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: "100%",
            background: "radial-gradient(white, transparent)",
            backgroundSize: "200% 200%",
            opacity: 0.7,
            animation: `${glitter} 3s infinite alternate`,
          },
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        }}
      />
    </Box>
  );
};

export default Navbar;
