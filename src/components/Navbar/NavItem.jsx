import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const NavItem = ({ item }) => {
  const location = useLocation();
  
  return (
    <Link to={item.path}>
      <MotionBox whileHover={{ y: -2 }} position="relative">
        <Text
          px={2}
          py={1}
          rounded="md"
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.100', 'gray.700'),
          }}
          color={location.pathname === item.path ? 'blue.500' : ''}
          fontWeight={location.pathname === item.path ? 'semibold' : 'normal'}
        >
          {item.name}
        </Text>
        {location.pathname === item.path && (
          <MotionBox
            position="absolute"
            bottom="-2px"
            left="0"
            right="0"
            height="2px"
            bg="blue.500"
            layoutId="underline"
          />
        )}
      </MotionBox>
    </Link>
  );
};

export default NavItem;