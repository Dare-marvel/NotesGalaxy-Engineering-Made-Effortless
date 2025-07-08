import React, { useState, useRef, Suspense, lazy } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tooltip,
  Button,
  Td,
  Tr,
  Th,
  Container,
  Spinner,
  IconButton,
  Icon,
  Text,
  Flex,
  Input,
  InputGroup,
  useToast,
  InputLeftElement,
  Image,
  Center
} from '@chakra-ui/react';

import GithubLogo from '../assets/Icons/github.svg'

import {
  ArrowLeft,
  ArrowDown,
  File,
  Search,
  Folder,
} from 'lucide-react';


import { getSimpleName, getActualName } from '../config/nameMapping';
const FileViewer = lazy(() => import('../components/FileViewer/FileViewer'));
import { useFolderContents } from '../hooks/useFolderContents';
import { useParams, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';
import { truncateByScreenSize } from '../utils/displayUtils';
import Breadcrumbs from '../components/Breadcrumbs';
import axios from 'axios';
import { FOLDER_STRUCTURE } from '../config/structure';

import SidebarAd from '../components/GoogleAds/SidebarAd';
import BottomAd from '../components/GoogleAds/BottomAd'

import { keyframes } from '@emotion/react';

import { usePageMeta } from '../hooks/usePageMeta';

const slideInUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const FolderView = () => {
  usePageMeta(
    "All Engineering Notes at one Place",
    "Access subject-wise engineering notes with instant download support and neatly formatted explanations. Browse, search, and filter through updated content for a seamless learning experience on NotesGalaxy."
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [actualPath, setActualPath] = useState('');

  const { repoName, '*': path } = useParams();
  const navigate = useNavigate();
  const { contents = [], loading } = useFolderContents(repoName, path);

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
        setActualPath(itemName);
        navigate(`/${simpleName}`);
      } else {
        const newPath = `${actualPath}/${itemName}`;
        setActualPath(newPath);
        const currentPath = path ? path.split('/') : [];
        currentPath.push(simpleName);
        navigate(`/${repoName}/${currentPath.join('/')}`);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  // const truncateText = (text, maxLength) => {
  //   if (!text || text.length <= maxLength) return text;
  //   return `${text.substring(0, maxLength)}...`;
  // };

  const TRUNCATE_CONFIG = {
    sm: 558,  // mobile breakpoint in pixels
    md: 935,  // tablet breakpoint in pixels
    mobileChars: 12,
    tabletChars: 30,
    desktopChars: 50
  };


  const RepositoryRow = ({ repo, index }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const toast = useToast();
    const mappedName = getSimpleName(repo);
    const windowWidth = useWindowSize();
    const hoverRef = useRef(null);

    const fetchDirectoryContents = async (dirPath) => {
      const files = [];
      const apiUrl = `https://api.github.com/repos/dare-marvel/${repo}/contents/${dirPath}`;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        for (const item of response.data) {
          if (item.type === 'file') {
            const fileResponse = await axios.get(item.download_url, {
              responseType: 'arraybuffer'
            });
            files.push({
              path: `${dirPath}/${item.name}`.replace(/^\//, ''),
              content: fileResponse.data
            });
          } else if (item.type === 'dir') {
            const nestedFiles = await fetchDirectoryContents(`${dirPath}/${item.name}`);
            files.push(...nestedFiles);
          }
        }
      } catch (error) {
        console.error(`Error fetching directory contents for ${dirPath}:`, error);
        throw error;
      }

      return files;
    };

    const downloadRepository = async (e) => {
      e.stopPropagation();

      try {
        setIsDownloading(true);

        // Initial notification
        toast({
          title: "Starting Download",
          description: "Preparing to fetch repository contents...",
          status: "info",
          duration: 2000,
          isClosable: true,
        });

        let allFiles = [];
        const repoStructure = FOLDER_STRUCTURE[repo];

        if (!repoStructure || !repoStructure.directories) {
          throw new Error('No directory structure defined for this repository');
        }

        // Notify about fetching files
        toast({
          title: "Fetching Files",
          description: `Processing ${repoStructure.directories.length} directories...`,
          status: "info",
          duration: 3000,
          isClosable: true,
        });

        for (const dirPath of repoStructure.directories) {
          const files = await fetchDirectoryContents(dirPath);
          allFiles.push(...files);
        }

        if (allFiles.length === 0) {
          throw new Error('No files found in the specified directories');
        }

        // Notify about compression starting
        toast({
          title: "Creating ZIP File",
          description: `Compressing ${allFiles.length} files...`,
          status: "info",
          duration: 4000,
          isClosable: true,
        });

        const JSZip = await import('jszip');
        const zip = new JSZip.default();

        allFiles.forEach(file => {
          zip.file(file.path, file.content);
        });

        // Notify about generating the final zip
        toast({
          title: "Generating Download",
          description: "Preparing the final ZIP file...",
          status: "info",
          duration: 3000,
          isClosable: true,
        });

        const zipContent = await zip.generateAsync({ type: 'blob' });

        const url = window.URL.createObjectURL(zipContent);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${mappedName}.zip`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

        // Success notification
        toast({
          title: "Download Complete",
          description: `Successfully downloaded ${allFiles.length} files`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

      } catch (error) {
        toast({
          title: "Download Failed",
          description: error.message || "Unable to download repository",
          status: "error",
          duration: 5000,
          isClosable: true,
        });

        console.error('Error downloading repository:', error);
      } finally {
        setIsDownloading(false);
      }
    };

    const truncatedName = React.useMemo(() =>
      truncateByScreenSize(mappedName, TRUNCATE_CONFIG),
      [mappedName, windowWidth]
    );

    return (
      <Tr
        animation={`${slideInUp} 0.5s ease-out ${index * 0.1}s both`}
      >
        <Td width={["60%", "60% !important", "70%"]} sx={{ px: '0 !important' }}>
          <Box
            ref={hoverRef}
            onClick={() => handleNavigation(repo, true)}
            display="flex"
            alignItems="center"
            cursor="pointer"
            // p={[1, 1, 1]}
            transition="all 0.2s"
            borderRadius="md"
            _hover={{
              backgroundColor: 'gray.100',
              color: 'blue.600',
              transform: ['none', 'none', 'translateX(5px)']
            }}
          >
            <Icon as={Folder} mr={[1, 1, 2]} color="blue.500" boxSize={[4, 4, 5]} />
            <Text
              fontWeight="medium"
              fontSize={["sm", "md", "md"]}
              isTruncated
              maxWidth={["150px", "250px", "500px"]}
              title={mappedName}
            >
              {truncatedName}
            </Text>
          </Box>
        </Td>
        {/* <Td width={["40%", "35%", "30%"]}>
          <Text fontSize={["sm", "md", "md"]}>Repo</Text>
        </Td> */}
        <Td
          width={["5%", "5%", "5%", "5%"]}
          sx={{ px: '0 !important', py: '0 !important' }}
        >
          <Flex justify="center" align="center" height="100%">
            <IconButton
              icon={<ArrowDown />}
              aria-label="Download repository"
              colorScheme="blue"
              variant="outline"
              size={["xs", "sm", "sm"]}
              isLoading={isDownloading}
              onClick={downloadRepository}
              _hover={{
                transform: ['none', 'scale(1.1)', 'scale(1.1)'],
                bg: 'blue.50'
              }}
            />
          </Flex>
        </Td>
      </Tr>
    );
  };


  const ContentRow = ({ item }) => {
    const isDirectory = typeof item === 'string' || item?.type === 'dir';
    const name = typeof item === 'string' ? item : item?.name;
    const windowWidth = useWindowSize();

    // console.log("checking the path ",path)

    const [isDownloading, setIsDownloading] = useState(false);
    const toast = useToast();

    if (!name) return null;

    const mappedName = getSimpleName(name);

    const fetchDirectoryContents = async (dirPath) => {

      // console.log("Checking dir path",dirPath, "Actual Path",getActualName(path));
      const files = [];
      const actualPath = path ? `${getActualName(path)}/${dirPath}` : dirPath;
      const apiUrl = `https://api.github.com/repos/dare-marvel/${getActualName(repoName)}/contents/${actualPath}`;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        for (const item of response.data) {
          if (item.type === 'file') {
            const fileResponse = await axios.get(item.download_url, {
              responseType: 'arraybuffer'
            });
            files.push({
              path: `${dirPath}/${item.name}`.replace(/^\//, ''),
              content: fileResponse.data
            });
          } else if (item.type === 'dir') {
            const nestedFiles = await fetchDirectoryContents(`${dirPath}/${item.name}`);
            files.push(...nestedFiles);
          }
        }
      } catch (error) {
        console.error(`Error fetching directory contents for ${dirPath}:`, error);
        throw error;
      }

      return files;
    };

    const downloadDirectory = async (e) => {
      e.stopPropagation();

      try {
        setIsDownloading(true);

        // Get all files recursively
        const files = await fetchDirectoryContents(name);

        // Create zip file
        const JSZip = await import('jszip');
        const zip = new JSZip.default();

        // Add files to zip maintaining directory structure
        files.forEach(file => {
          zip.file(file.path, file.content);
        });

        // Generate zip
        const zipContent = await zip.generateAsync({ type: 'blob' });

        // Create download link
        const url = window.URL.createObjectURL(zipContent);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}.zip`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

        // Show success toast
        toast({
          title: "Download Complete",
          description: `Downloaded ${files.length} files from ${name}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

      } catch (error) {
        // Show error toast
        toast({
          title: "Download Failed",
          description: error.message || "Unable to download directory",
          status: "error",
          duration: 5000,
          isClosable: true,
        });

        console.error('Error downloading directory:', error);
      } finally {
        setIsDownloading(false);
      }
    };

    const truncatedName = React.useMemo(() =>
      truncateByScreenSize(mappedName, {
        ...TRUNCATE_CONFIG,
        mobileChars: 12,   // smaller limits for content rows
        tabletChars: 30,
        desktopChars: 50
      }),
      [mappedName, windowWidth]
    );

    return (
      <Tr
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          backgroundColor: 'gray.100',
          transform: ['none', 'none', 'translateX(5px)']
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
        <Td width={isDirectory ? ["60%", "65%", "70%"] : ["50%", "55%", "60%"]}>
          <Flex align="center" gap={[1, 2, 3]}>
            <Icon
              as={isDirectory ? Folder : File}
              color={isDirectory ? 'blue.500' : 'gray.500'}
              boxSize={[4, 4, 5]}
            />
            <Text fontWeight="medium" noOfLines={1}
              isTruncated
              fontSize={["sm", "md", "md"]}
              title={mappedName}
            >
              {truncatedName}
            </Text>
          </Flex>
        </Td>
        {/* <Td width={isDirectory ? ["40%", "35%", "30%"] : ["30%", "25%", "20%"]}>
          <Text
            fontSize={["sm", "md", "md"]}
            isTruncated
            maxWidth={["80px", "120px", "200px"]}
            title={isDirectory ? 'Folder' : name.split('.').pop().toUpperCase()}
          >{isDirectory ? 'Folder' : name.split('.').pop().toUpperCase()}</Text>
        </Td> */}

        {/* Third column - download button for directories */}
        <Td width={["10%", "20%", "20%"]}>
          {(isDirectory || item?.download_url) ? (
            <IconButton
              icon={<ArrowDown />}
              aria-label="Download"
              colorScheme="blue"
              variant="outline"
              size={["xs", "sm", "sm"]}
              onClick={(e) => {
                e.stopPropagation();
                if (isDirectory) {
                  downloadDirectory(e);
                } else {
                  window.open(item.download_url, '_blank');
                }
              }}

              isLoading={isDownloading}
              _hover={{
                bg: 'blue.50'
              }}
            />
          ) : (
            <Box height="32px" /> // reserve space
          )}
        </Td>
      </Tr>
    );
  };

  // const showActionsColumn = (repoName && contents.some(item => typeof item !== 'string' && item.type === 'file'));

  return (
    <Box minH="100vh">
      <SidebarAd
        position="left"
        adSlot="4333835944"
      />
      <Container maxW="container.xl"
        py={[3, 4, 5]}
        px={{ base: 4, md: 12, lg: 10 }}
      >
        <Box px={{ base: 2, sm: 4, md: 12, lg: 10 }}>
          <Breadcrumbs />
        </Box>
        {!repoName && (
          <Box
            mb={[4, 5, 6]}
            width={["100%", "80%", "85%"]}
            mx={["0", "auto", "auto", "auto"]}
            px={{ base: 0, sm: 4, md: 12, lg: 12 }}
          >
            <InputGroup px={{ base: 0, sm: 4, md: 2 }}>
              <InputLeftElement pointerEvents="none" pl={{ sm: 6, md: 3 }}>
                <Icon as={Search} color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg='white'
                borderRadius="full"
                borderColor="blue.200"
                // border="2px solid"
                size={["sm", "md", "md"]}
                boxShadow="md"
                _focus={{
                  borderColor: 'blue.500',
                  boxShadow: 'lg'
                }}
              />
            </InputGroup>
          </Box>

        )}

        <Box
          borderWidth="3px"
          borderColor='purple.200'
          borderRadius={["lg", "xl", "xl"]}
          overflow={["auto", "hidden", "hidden"]}
          boxShadow={["md", "lg", "lg"]}
          transition="all 0.2s"
          _hover={{
            boxShadow: ["lg", "xl", "xl"]
          }}
          width={["100%", "75%", "70%", "75%"]}
          mx={["0", "auto", "auto"]}
          px={{ base: 4, md: 5, lg: 8 }}
        // mx={{ base: 0, sm: 0, md: 12, lg: 12 }}
        >
          <Table
            variant="outline"
            size={["sm", "md", "md"]}
          >
            <Thead>
              <Tr bg='gray.50'>
                <Th fontSize={["sm", "md", "md"]} sx={{ px: '0 !important' }}>Name</Th>
                {/* <Th fontSize={["sm", "md", "md"]}>Type</Th> */}
                <Th fontSize={["sm", "md", "md"]} sx={{ px: '0 !important' }}>Action</Th>
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
                      p={2}
                      borderRadius="md"
                      width="fit-content"
                      _hover={{
                        color: 'blue.600',
                        bg: 'blue.50'
                      }}
                    >
                      <Icon as={ArrowLeft} />
                      <Text>Back</Text>
                    </Flex>
                  </Td>
                </Tr>
              )}
              {loading ? (
                <Tr>
                  <Td colSpan={3}>
                    <Flex justify="center" py={8}>
                      <Spinner size="lg" color="blue.500" />
                    </Flex>
                  </Td>
                </Tr>
              ) : (
                <>
                  {!repoName
                    ? filteredContents.map((repo, index) => (
                      <RepositoryRow key={`repo-${index}`} repo={repo} index={index} />
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

        <Suspense fallback={
          <Center h="200px">
            <Spinner size="xl" color="blue.500" />
          </Center>
        }>
          {selectedFile && (
            <FileViewer
              file={selectedFile}
              isOpen={!!selectedFile}
              onClose={() => setSelectedFile(null)}
            />
          )}
        </Suspense>

      </Container>

      <Box mt={12} />

      <Box textAlign="center" mb={4}>
        <Tooltip label="For knowledge-hungry users, there's more on my GitHub! Click this link to explore my repositories." fontSize="md" hasArrow placement="top">
          <Button
            as="a"
            href="https://github.com/dare-marvel"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<Image src={GithubLogo} boxSize="1.4em" />}
            bgGradient="linear(to-r,blue.500,green.500)"
            color="white"
            minW="250px"
            _hover={{
              bgGradient: "linear(to-r, #43e97b,blue.300)",
              // transform: "scale(1.05)",
              boxShadow: "0 0 25px rgba(56, 249, 215, 0.6)",
            }}
            _active={{
              boxShadow: "0 0 10px rgba(0, 255, 200, 0.4)",
              transform: "scale(0.98)",
            }}
            transition="all 0.3s ease-in-out"
            px={{ base: 2, md: 8, lg: 10 }}
            borderRadius="xl"
            fontWeight="semibold"
            fontSize={["sm", "md", "lg"]}
            boxShadow="lg"
          >
            Visit Github for more content
          </Button>
        </Tooltip>
      </Box>

      <Box
        width={{ base: '90%', sm: "90%", md: '80%' }}
        textAlign="center"
        mx="auto"
        mt={9}
        mb={1}
        px={{ base: 4, md: 12, lg: 12 }}>
        <BottomAd />
      </Box>
      <SidebarAd
        position="right"
        adSlot="3152616213"
      />
    </Box>
  );
};

export default FolderView;