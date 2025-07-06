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
  Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { 
  ScrollText,
  BookOpen,
  Users, 
  Gamepad2, 
  Phone, 
  Info,
  Coffee, 
  TvMinimalPlay
} from 'lucide-react';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import logo from '/logo.webp';
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

const coffeeHover = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
  100% { transform: translateY(0px); }
`;

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Notes', path: '/', icon: BookOpen },
    { name: 'Youtube', path: '/ytchannels', icon: TvMinimalPlay },
    { name: 'Community', path: '/community', icon: Users },
    { name: 'Blogs', path: '/blogs', icon: ScrollText },
    // { name: 'Games', path: '/games', icon: Gamepad2 },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'About', path: '/about', icon: Info },
  ];

  const handleCoffeeClick = () => {
    // Replace with your Buy Me a Coffee URL
    window.open('https://buymeacoffee.com/aspurao038', '_blank');
  };

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      zIndex={2}
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
              bgClip="text"
            >
              NotesGalaxy
            </Text>
          </HStack>

          {/* Desktop Navigation - Full text */}
          <HStack spacing={{lg : 6 , xl : 8}} display={{ base: 'none', md: 'none', lg: 'flex' }}>
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
            
            {/* Buy Me a Coffee Button - Desktop */}
            <Button
              size="sm"
              colorScheme="purple"
              variant="solid"
              onClick={handleCoffeeClick}
              leftIcon={<Coffee size={16} />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.4)',
                animation: `${coffeeHover} 0.6s ease-in-out infinite`,
              }}
              transition="all 0.2s"
            >
              Buy Me a Coffee
            </Button>
          </HStack>

          {/* Medium Screen Navigation - Icons only */}
          <HStack spacing={3} display={{ base: 'none', md: 'flex', lg: 'none' }}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Tooltip key={item.name} label={item.name} placement="bottom">
                  <IconButton
                    as={Link}
                    to={item.path}
                    icon={<IconComponent size={20} />}
                    variant="ghost"
                    size="md"
                    aria-label={item.name}
                    color={location.pathname === item.path ? 'blue.500' : ''}
                    bg={location.pathname === item.path ? useColorModeValue('blue.50', 'blue.900') : 'transparent'}
                    _hover={{
                      bg: useColorModeValue('blue.50', 'blue.900'),
                      transform: 'translateY(-1px)',
                      color: 'blue.500',
                    }}
                    transition="all 0.2s"
                  />
                </Tooltip>
              );
            })}
            
            {/* Buy Me a Coffee Button - Medium Screen */}
            <Tooltip label="Buy Me a Coffee" placement="bottom">
              <IconButton
                icon={<Coffee size={20} />}
                colorScheme="purple"
                variant="solid"
                size="md"
                onClick={handleCoffeeClick}
                aria-label="Buy Me a Coffee"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(146, 21, 205, 0.4)',
                }}
                transition="all 0.2s"
              />
            </Tooltip>
          </HStack>

          {/* Mobile Menu Button - Only for small screens */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* Mobile Menu - Only for small screens */}
        <Collapse in={isOpen} animateOpacity>
          <VStack display={{ base: 'flex', md: 'none' }} pb={4} spacing={4}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.name} to={item.path} style={{ width: '100%' }}>
                  <Button
                    w="full"
                    variant="ghost"
                    justifyContent="start"
                    aria-label={item.name}
                    color={location.pathname === item.path ? 'blue.500' : ''}
                    fontWeight={location.pathname === item.path ? 'semibold' : 'normal'}
                    leftIcon={<IconComponent size={18} />}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
            
            {/* Buy Me a Coffee Button - Mobile */}
            <Button
              w="full"
              size="md"
              colorScheme="purple"
              variant="solid"
              onClick={handleCoffeeClick}
              leftIcon={<Coffee size={18} />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(146, 21, 205, 0.4)',
              }}
              transition="all 0.2s"
            >
              Buy Me a Coffee
            </Button>
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