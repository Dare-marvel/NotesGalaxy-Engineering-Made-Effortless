import React from 'react';
import { IconButton, Box,Table, Tr, Td, Text, Flex, Icon } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import { FiFolder, FiFile } from 'react-icons/fi';
import { getSimpleName } from '../../config/nameMapping';

export const ContentRow = ({
  item,
  isDirectory,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isHovered
}) => {
  const name = typeof item === 'string' ? item : item.name;

  return (
    // <Table>
      <Tr
        bg={isHovered ? 'gray.100' : 'white'}
        _hover={{ bg: 'gray.50', cursor: 'pointer' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Td>
          <Flex alignItems="center" onClick={onClick}>
            <Box as="span" mr={2} color={isDirectory ? 'blue.500' : 'gray.500'}>
              <Icon as={isDirectory ? FiFolder : FiFile} boxSize={5} />
            </Box>
            <Text fontWeight="medium" noOfLines={1} isTruncated>
              {getSimpleName(name)}
            </Text>
          </Flex>
        </Td>
        <Td>
          <Text>{isDirectory ? 'Folder' : name.split('.').pop().toUpperCase()}</Text>
        </Td>
        <Td>
          {!isDirectory && (
            <IconButton
              icon={<FaDownload />}
              aria-label="Download file"
              colorScheme="blue"
              variant="ghost"
              onClick={() => window.open(item.download_url, '_blank')}
              title="Download file"
            />
          )}
        </Td>
      </Tr>
    // </Table>
  );
};
