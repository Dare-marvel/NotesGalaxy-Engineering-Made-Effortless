import React, { useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Container,
  Spinner,
  IconButton,
  useColorModeValue,
  Icon,
  Text,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiArrowLeft, FiFolder, FiFile, FiSearch } from 'react-icons/fi';
import { FaDownload } from 'react-icons/fa';
import { getSimpleName } from '../../config/nameMapping';
import FileViewer from '../FileViewer/FileViewer';
import { useFolderContents } from '../../hooks/useFolderContents';
import { useParams, useNavigate } from 'react-router-dom';

const FolderView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const { repoName, '*': path } = useParams();
  const navigate = useNavigate();
  const { contents = [], loading } = useFolderContents(repoName, path);

  // Chakra UI color modes
  const bgHover = useColorModeValue('gray.100', 'gray.700');
  const hoverTextColor = useColorModeValue('blue.600', 'blue.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headerBg = useColorModeValue('gray.50', 'gray.800');
  const inputBg = useColorModeValue('white', 'gray.800');

  // Safe filter function with type checking
  const filteredContents = !repoName && Array.isArray(contents)
    ? contents.filter(repo => {
      try {
        const simpleName = getSimpleName(repo);
        return typeof simpleName === 'string' &&
          simpleName.toLowerCase().includes(searchQuery.toLowerCase());
      } catch (error) {
        console.error('Error processing repository name:', error);
        return false;
      }
    })
    : contents;

  const handleNavigation = (itemName, isRoot = false) => {
    try {
      const simpleName = getSimpleName(itemName);
      if (isRoot) {
        navigate(`/${simpleName}`);
      } else {
        const currentPath = path ? path.split('/') : [];
        currentPath.push(simpleName);
        navigate(`/${repoName}/${currentPath.join('/')}`);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const RepositoryRow = ({ repo }) => {
    const simpleName = getSimpleName(repo);
    return (
      <Tr>
        <Td width="70%">
          <Box
            onClick={() => handleNavigation(repo, true)}
            onMouseEnter={() => setHoveredItem(repo)}
            onMouseLeave={() => setHoveredItem(null)}
            display="flex"
            alignItems="center"
            cursor="pointer"
            p={2}
            transition="all 0.2s"
            borderRadius="md"
            _hover={{
              backgroundColor: bgHover,
              color: hoverTextColor,
              transform: 'translateX(5px)'
            }}
          >
            <Icon as={FiFolder} mr={2} color="blue.500" />
            <Text fontWeight="medium">{simpleName}</Text>
          </Box>
        </Td>
        <Td width="30%">Repository</Td>
      </Tr>
    );
  };

  const ContentRow = ({ item }) => {
    const isDirectory = typeof item === 'string' || item?.type === 'dir';
    const name = typeof item === 'string' ? item : item?.name;

    if (!name) return null;

    return (
      <Tr
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          backgroundColor: bgHover,
          transform: 'translateX(5px)'
        }}
        onMouseEnter={() => setHoveredItem(name)}
        onMouseLeave={() => setHoveredItem(null)}
        onClick={() => {
          if (isDirectory) {
            handleNavigation(name);
          } else {
            setSelectedFile(item);
          }
        }}
      >
        <Td width={isDirectory ? "70%" : "60%"}>
          <Flex align="center" gap={3}>
            <Icon
              as={isDirectory ? FiFolder : FiFile}
              color={isDirectory ? 'blue.500' : 'gray.500'}
              boxSize={5}
            />
            <Text fontWeight="medium" noOfLines={1} isTruncated>
              {getSimpleName(name)}
            </Text>
          </Flex>
        </Td>
        <Td width={isDirectory ? "30%" : "20%"}>
          <Text>{isDirectory ? 'Folder' : name.split('.').pop().toUpperCase()}</Text>
        </Td>
        {!isDirectory && item?.download_url && (
          <Td width="20%">
            <IconButton
              icon={<FaDownload />}
              aria-label="Download file"
              colorScheme="blue"
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.download_url, '_blank');
              }}
              _hover={{
                transform: 'scale(1.1)',
                bg: 'blue.50'
              }}
            />
          </Td>
        )}
      </Tr>
    );
  };

  const showActionsColumn = (repoName && contents.some(item => typeof item !== 'string' && item.type === 'file'));

  return (
    <Container maxW="container.xl" py={5}>
      {!repoName && (
        <Box mb={6}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg={inputBg}
              borderRadius="full"
              size="md"
              boxShadow="md"
              _focus={{
                borderColor: 'teal.500',
                boxShadow: 'lg'
              }}
            />
          </InputGroup>
        </Box>

      )}

      <Box
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        transition="all 0.2s"
        _hover={{
          boxShadow: 'xl'
        }}
      >
        <Table variant="simple">
          <Thead>
            <Tr bg={headerBg}>
              <Th fontSize="md">Name</Th>
              <Th fontSize="md">Type</Th>
              {showActionsColumn && <Th fontSize="md">Actions</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {repoName && path && (
              <Tr>
                <Td colSpan={showActionsColumn ? 3 : 2}>
                  <Flex
                    align="center"
                    gap={2}
                    cursor="pointer"
                    color="blue.500"
                    onClick={() => navigate(-1)}
                    p={2}
                    borderRadius="md"
                    width="fit-content"
                    _hover={{
                      color: 'blue.600',
                      bg: 'blue.50'
                    }}
                  >
                    <Icon as={FiArrowLeft} />
                    <Text>Back</Text>
                  </Flex>
                </Td>
              </Tr>
            )}
            {loading ? (
              <Tr>
                <Td colSpan={showActionsColumn ? 3 : 2}>
                  <Flex justify="center" py={8}>
                    <Spinner size="lg" color="blue.500" />
                  </Flex>
                </Td>
              </Tr>
            ) : (
              <>
                {!repoName
                  ? filteredContents.map((repo, index) => (
                    <RepositoryRow key={`repo-${index}`} repo={repo} />
                  ))
                  : contents.map((item, index) => (
                    <ContentRow
                      key={`content-${typeof item === 'string' ? item : item?.name}-${index}`}
                      item={item}
                    />
                  ))}
              </>
            )}
          </Tbody>
        </Table>
      </Box>

      <FileViewer
        file={selectedFile}
        isOpen={!!selectedFile}
        onClose={() => setSelectedFile(null)}
      />
    </Container>
  );
};

export default FolderView;