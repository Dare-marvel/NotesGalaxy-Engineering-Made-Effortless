import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import NavItem from './NavItem';

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  
  const navItems = [
    { name: 'FolderView', path: '/' },
    // { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
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
          <Text
            fontSize="xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Engineering Machine
          </Text>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </HStack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

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