// components/FolderView.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  Flex
} from '@chakra-ui/react';
import { FiArrowLeft, FiFolder, FiFile } from 'react-icons/fi';
import { FaDownload } from 'react-icons/fa';
import { getSimpleName } from '../../config/nameMapping';
import FileViewer from '../FileViewer/FileViewer';
import { useFolderContents } from '../../hooks/useFolderContents';

const FolderView = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const { repoName, '*': path } = useParams();
  const navigate = useNavigate();
  const { contents, loading } = useFolderContents(repoName, path);

  // Chakra UI color modes
  const bgHover = useColorModeValue('gray.100', 'gray.700');
  const hoverTextColor = useColorModeValue('blue.600', 'blue.300');

  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headerBg = useColorModeValue('gray.50', 'gray.800');

  const handleNavigation = (itemName, isRoot = false) => {
    const simpleName = getSimpleName(itemName);
    if (isRoot) {
      navigate(`/${simpleName}`);
    } else {
      const currentPath = path ? path.split('/') : [];
      currentPath.push(simpleName);
      navigate(`/${repoName}/${currentPath.join('/')}`);
    }
  };

  const RepositoryRow = ({ repo }) => (

    <Tr>
      <Td>
        <Box
          onClick={() => handleNavigation(repo, true)}
          onMouseEnter={() => setHoveredItem(repo)}
          onMouseLeave={() => setHoveredItem(null)}
          display="flex"
          alignItems="center"
          cursor="pointer"
          p={2}
          _hover={{
            backgroundColor: bgHover,
            color: hoverTextColor
          }}
        >
          <Icon as={FiFolder} mr={2} />
          <Text>{getSimpleName(repo)}</Text>
        </Box>
      </Td>
      <Td>Repository</Td>
      <Td></Td>
    </Tr>

    // <Tr
    //   cursor="pointer"
    //   _hover={{ bg: bgHover }}
    //   onClick={() => handleNavigation(repo, true)}
    //   onMouseEnter={() => setHoveredItem(repo)}
    //   onMouseLeave={() => setHoveredItem(null)}
    //   bg={hoveredItem === repo ? bgHover : 'transparent'}
    // >
    //   <Td>
    //     <Flex align="center" gap={3}>
    //       <Icon as={FiFolder} color="blue.500" boxSize={5} />
    //       <Text fontWeight="medium">{repo}</Text>
    //     </Flex>
    //   </Td>
    //   <Td>Directory</Td>
    //   <Td>View</Td>
    // </Tr>
  );

  const ContentRow = ({ item }) => {

    const isDirectory = typeof item === 'string' || item.type === 'dir';
    const name = typeof item === 'string' ? item : item.name;



    return (

      <Tr
        cursor="pointer"
        _hover={{
          backgroundColor: bgHover,
          color: hoverTextColor
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
        <Td>
          <Flex align="center" gap={3} >

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

      // <Tr
      //   cursor="pointer"
      //   _hover={{ bg: bgHover }}
      //   onClick={() => {
      //     if (isDirectory) {
      //       handleNavigation(name);
      //     } else {
      //       setSelectedFile(item);
      //     }
      //   }}
      //   onMouseEnter={() => setHoveredItem(name)}
      //   onMouseLeave={() => setHoveredItem(null)}
      //   bg={hoveredItem === name ? bgHover : 'transparent'}
      // >
      //   <Td>
      //     <Flex align="center" gap={3}>
      //       <Icon
      //         as={isDirectory ? FiFolder : FiFile}
      //         color={isDirectory ? 'blue.500' : 'gray.500'}
      //         boxSize={5}
      //       />
      //       <Text fontWeight="medium">{name}</Text>
      //     </Flex>
      //   </Td>
      //   <Td>{isDirectory ? 'Directory' : 'File'}</Td>
      //   <Td>{isDirectory ? 'Open' : 'View'}</Td>
      // </Tr>
    );
  };

  const renderContents = () => {
    if (loading) {
      return (
        <Tr>
          <Td colSpan={3}>
            <Flex justify="center" py={8}>
              <Spinner size="lg" color="blue.500" />
            </Flex>
          </Td>
        </Tr>
      );
    }
  
    if (!repoName) {
      return contents.map((repo, index) => <RepositoryRow key={index} repo={repo} />);
    }
  
    return contents.map((item, index) => 
      <ContentRow 
        key={typeof item === 'string' ? item : `${item.name}-${index}`} 
        item={item} 
      />
    );
  };
  

  return (
    <Container maxW="container.xl" py={8}>
      <Box
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="sm"
      >
        <Table variant="simple">
          <Thead>
            <Tr bg={headerBg}>
              <Th fontSize="md">Name</Th>
              <Th fontSize="md">Type</Th>
              <Th fontSize="md">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {repoName && path && (
              <Tr>
                <Td colSpan={3}>
                  <Flex
                    align="center"
                    gap={2}
                    cursor="pointer"
                    color="blue.500"
                    onClick={() => navigate(-1)}
                    _hover={{ color: 'blue.600' }}
                  >
                    <Icon as={FiArrowLeft} />
                    <Text>Back</Text>
                  </Flex>
                </Td>
              </Tr>
            )}
            {renderContents()}
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