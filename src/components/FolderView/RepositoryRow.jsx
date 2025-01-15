import React from 'react';
import { Tr, Td, Box, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { FaFolder } from 'react-icons/fa';
import { getSimpleName } from '../../config/nameMapping';

export const RepositoryRow = ({ repo, onMouseEnter, onMouseLeave, onClick, isHovered }) => {
  const hoverBgColor = useColorModeValue('gray.100', 'gray.700');
  const hoverTextColor = useColorModeValue('blue.600', 'blue.300');

  return (
    <Tr>
      <Td>
        <Box
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          display="flex"
          alignItems="center"
          cursor="pointer"
          p={2}
          _hover={{
            backgroundColor: hoverBgColor,
            color: hoverTextColor
          }}
        >
          <Icon as={FaFolder} mr={2} />
          <Text>{getSimpleName(repo)}</Text>
        </Box>
      </Td>
      <Td>Repository</Td>
      <Td></Td>
    </Tr>
  );
};

export default RepositoryRow;
