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

const MotionImage = motion(Image);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'FolderView', path: '/' },
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
              alt="NotesFusion Logo"
              boxSize="40px"
              whileTap={{ rotate: 20, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              NotesFusion
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
    </Box>
  );
};

export default Navbar;
