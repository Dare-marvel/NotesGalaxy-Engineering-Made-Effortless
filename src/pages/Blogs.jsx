import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Card,
    CardBody,
    CardHeader,
    // SimpleGrid,
    Center,
    Button,
    Flex,
    Icon,
    HStack,
    VStack,
    useToast,
    Spinner,
    IconButton,
    Grid,
    GridItem,
    Spacer,
    Input,
    Divider,
    InputGroup,
    InputLeftElement,
    useBreakpointValue
} from '@chakra-ui/react';
import {
    IoArrowBack,
    IoHeart,
    IoEye,
    IoTime,
    IoShareSocial,
    IoLogoFacebook,
    IoLogoInstagram,
    // IoLogoGithub,
    IoLogoMedium,
    IoCalendar,
    IoRocket,
    IoStarOutline
} from 'react-icons/io5';
import { IoMdDownload } from "react-icons/io";
import { getFirestore, doc, getDoc, getDocs, collection, updateDoc, increment, arrayUnion, arrayRemove } from 'firebase/firestore';
import app from '../config/firebaseConfig';
import { useNavigate, useSearchParams } from "react-router-dom";
import SidebarAdLeft from '../components/SidebarAd/SidebarAdLeft';
import SidebarAdRight from '../components/SidebarAd/SidebarAdRight';
import { blogContent } from '../config/blogContent';
import { SearchIcon } from '@chakra-ui/icons';

import { keyframes } from '@emotion/react';

import { MarkdownRenderer } from '../components/MarkdownRenderer';

const db = getFirestore(app);

// Animation keyframes
const float = keyframes`
  0% { transform: translatey(0px); }
  50% { transform: translatey(-10px); }
  100% { transform: translatey(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Firebase functions
const getBlogMetadata = async (blogId) => {
    try {
        const docRef = doc(db, 'blogs', blogId);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? { id: blogId, ...docSnap.data() } : null;
    } catch (error) {
        console.error('Error fetching blog metadata:', error);
        return null;
    }
};

const getAllBlogsMetadata = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogs = [];
        querySnapshot.forEach((doc) => {
            blogs.push({ id: doc.id, ...doc.data() });
        });
        return blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
};

const incrementViews = async (blogId) => {
    try {
        const docRef = doc(db, 'blogs', blogId);
        await updateDoc(docRef, {
            views: increment(1)
        });
    } catch (error) {
        console.error('Error incrementing views:', error);
    }
};

const toggleLike = async (blogId, userId, isLiked) => {
    try {
        const docRef = doc(db, 'blogs', blogId);
        if (isLiked) {
            // Remove user from likes array
            await updateDoc(docRef, {
                likedBy: arrayRemove(userId)
            });
        } else {
            // Add user to likes array
            await updateDoc(docRef, {
                likedBy: arrayUnion(userId)
            });
        }
    } catch (error) {
        console.error('Error toggling like:', error);
    }
};

// User ID function
const getUserId = async () => {
    const localKey = 'user_id';
    const cached = localStorage.getItem(localKey);
    if (cached) return cached;

    try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const visitorId = result.visitorId;
        localStorage.setItem(localKey, visitorId);
        return visitorId;
    } catch (e) {
        const fallbackId = `user_${crypto.randomUUID()}`;
        localStorage.setItem(localKey, fallbackId);
        return fallbackId;
    }
};

// Calculate reading time
const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
};

// Blog Card Component
const BlogCard = ({ blog, onClick }) => {
    const blogContentData = blogContent[blog.id];
    const readingTime = calculateReadingTime(blogContentData?.content || '');
    const likesCount = blog.likedBy ? blog.likedBy.length : 0;
    // const cardSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

    return (
        <Card
            cursor="pointer"
            onClick={onClick}
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
                transform: { base: 'translateY(-4px)', md: 'translateY(-8px)' },
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                borderColor: 'purple.400'
            }}
            border="2px solid"
            borderColor="transparent"
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            position="relative"
            animation={`${slideIn} 0.6s ease-out`}
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            }}
            h="full"
        >
            <CardHeader pb={2} pt={5}>
                <VStack align="start" spacing={3}>
                    <Heading
                        size={{ base: 'sm', md: 'sm', lg: 'md' }}
                        color="gray.800"
                        noOfLines={2}
                        lineHeight="1.3"
                        fontWeight="bold"
                    >
                        {blogContentData?.title}
                    </Heading>

                    <HStack spacing={2}>
                        <Icon as={IoStarOutline} w={4} h={4} color="purple.500" />
                        <Text fontSize="sm" color="purple.600" fontWeight="medium">
                            By {blogContentData?.author}
                        </Text>
                    </HStack>

                    <HStack spacing={2}>
                        <Icon as={IoCalendar} w={4} h={4} color="blue.500" />
                        <Text fontSize="sm" color="gray.600">
                            {new Date(blogContentData?.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </Text>
                    </HStack>
                </VStack>
            </CardHeader>

            <CardBody pt={0}>
                <Divider mb={3} borderColor="purple.100" />
                <HStack spacing={3} justify="space-between" flexWrap="wrap">

                    <HStack spacing={1}>
                        <Icon as={IoTime} w={4} h={4} color="blue.500" />
                        <Text fontSize="sm" color="blue.500" fontWeight="medium">
                            {readingTime} min read
                        </Text>
                    </HStack>

                    {/* <HStack spacing={1}>
                        <Icon as={IoEye} w={4} h={4} color="gray.500" />
                        <Text fontSize="sm" color="gray.500">
                            {blog.views || 0}
                        </Text>
                    </HStack> */}

                    <HStack spacing={3}>
                        <HStack spacing={1}>
                            <Icon as={IoHeart} w={4} h={4} color="red.400" />
                            <Text fontSize="sm" color="red.500" fontWeight="medium">
                                {likesCount}
                            </Text>
                        </HStack>


                        <HStack spacing={1}>
                            <Icon as={IoEye} w={4} h={4} color="gray.500" />
                            <Text fontSize="sm" color="gray.500">
                                {blog.views || 0}
                            </Text>
                        </HStack>
                    </HStack>
                </HStack>
            </CardBody>
        </Card>
    );
};

// Blog View Component
const BlogView = ({ blogId, onBack }) => {
    const [blog, setBlog] = useState(null);
    const [blogMeta, setBlogMeta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const toast = useToast();

    // const titleSize = useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' });
    const containerMaxW = useBreakpointValue({ base: 'full', md: '4xl', lg: '5xl' });
    const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

    useEffect(() => {
        const initializeUser = async () => {
            const id = await getUserId();
            setUserId(id);
        };
        initializeUser();
    }, []);

    useEffect(() => {
        const loadBlog = async () => {
            try {
                const content = blogContent[blogId];
                const meta = await getBlogMetadata(blogId);

                if (content && meta) {
                    setBlog(content);
                    setBlogMeta(meta);
                    await incrementViews(blogId);
                    setBlogMeta(prev => ({ ...prev, views: (prev.views || 0) + 1 }));
                }
            } catch (error) {
                console.error('Error loading blog:', error);
            } finally {
                setLoading(false);
            }
        };

        if (blogId) {
            loadBlog();
        }
    }, [blogId]);

    const handleShare = async () => {
        const url = `${window.location.origin}/blogs?blogid=${blogId}`;
        try {
            await navigator.share({
                title: blog?.title,
                url: url
            });
        } catch (error) {
            navigator.clipboard.writeText(url);
            toast({
                title: "🚀 Link copied to clipboard!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top"
            });
        }
    };

    const handleLike = async () => {
        if (!userId || !blogMeta) return;

        const likedBy = blogMeta.likedBy || [];
        const isLiked = likedBy.includes(userId);

        try {
            await toggleLike(blogId, userId, isLiked);

            setBlogMeta(prev => {
                const currentLikedBy = prev.likedBy || [];
                const newLikedBy = isLiked
                    ? currentLikedBy.filter(id => id !== userId)
                    : [...currentLikedBy, userId];

                return { ...prev, likedBy: newLikedBy };
            });

            toast({
                title: isLiked ? "💫 Like removed!" : "⭐ Blog liked!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top"
            });
        } catch (error) {
            toast({
                title: "Error updating like",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    if (loading) {
        return (
            <Center mt={20}>
                <Flex justify="center" align="center" minH="50vh" direction="column" >
                    <Box animation={`${float} 3s ease-in-out infinite`} mb={4}>
                        <Icon as={IoRocket} w={12} h={12} color="purple.400" />
                    </Box>
                    <Spinner
                        size="xl"
                        color="purple.500"
                        thickness="4px"
                        speed="0.8s"
                    />
                    <Text mt={4} color="gray.600" fontWeight="medium">
                        Navigating through the cosmos...
                    </Text>
                </Flex>
            </Center>
        );
    }

    if (!blog || !blogMeta) {
        return (
            <VStack spacing={4} align="center" py={10}>
                <Icon as={IoRocket} w={16} h={16} color="purple.400" />
                <Heading color="purple.600">Lost in Space</Heading>
                <Text color="gray.600" textAlign="center" maxW="md">
                    This cosmic adventure seems to have drifted into a black hole.
                </Text>
                <Button
                    onClick={onBack}
                    leftIcon={<IoArrowBack />}
                    bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    color="white"
                    _hover={{ transform: 'scale(1.05)' }}
                    borderRadius="full"
                    size={buttonSize}
                >
                    Return to Base
                </Button>
            </VStack>
        );
    }

    const downloadMarkdown = (content, filename = "blog.md") => {
        const blob = new Blob([content], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };


    const likedBy = blogMeta.likedBy || [];
    const isLiked = userId && likedBy.includes(userId);
    const likesCount = likedBy.length;

    return (
        <Box bg="white" minH="100vh" pt={{ base: 6, md: 3, lg: 7 }} mt={{ base: 10, md: 12, lg: 8 }} px={{ base: 0, sm: 0, md: 12, lg: 12 }} >
            <Box
                bg="linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                py={2}
                borderBottom="1px solid"
                borderColor="purple.100"
            >
                <Container maxW={containerMaxW} px={{ base: 4, md: 8, lg: 6 }}>
                    <HStack justify="space-between" align="center" mb={4} flexWrap="wrap" gap={4}>
                        <Button
                            leftIcon={<IoArrowBack />}
                            onClick={onBack}
                            variant="outline"
                            borderColor="purple.300"
                            color="purple.600"
                            _hover={{
                                bg: 'purple.50',
                                borderColor: 'purple.400',
                                transform: 'translateX(-5px)'
                            }}
                            transition="all 0.3s"
                            borderRadius="full"
                            size={buttonSize}
                        >
                            Back
                        </Button>
                        <HStack spacing={2} flexWrap="wrap">
                            <IconButton
                                icon={<IoLogoFacebook />}
                                aria-label="Facebook"
                                size="sm"
                                bg="blue.500"
                                color="white"
                                _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }}
                                transition="all 0.2s"
                                borderRadius="full"
                                as="a"
                                href={blog.facebook}
                                target="_blank"
                            />
                            <IconButton
                                icon={<IoLogoInstagram />}
                                aria-label="Instagram"
                                size="sm"
                                bg="pink.500"
                                color="white"
                                _hover={{ bg: 'pink.600', transform: 'scale(1.1)' }}
                                transition="all 0.2s"
                                borderRadius="full"
                                as="a"
                                href={blog.insta}
                                target="_blank"
                            />
                            <IconButton
                                icon={<IoLogoMedium />}
                                aria-label="Medium"
                                size="sm"
                                bg="gray.700"
                                color="white"
                                _hover={{ bg: 'gray.800', transform: 'scale(1.1)' }}
                                transition="all 0.2s"
                                borderRadius="full"
                                as="a"
                                href={blog.medium}
                                target="_blank"
                            />
                            <IconButton
                                icon={<IoMdDownload />}
                                aria-label="Download Markdown"
                                size="sm"
                                bg="blue.500"
                                color="white"
                                _hover={{ bg: 'blue.600', transform: 'scale(1.1)' }}
                                transition="all 0.2s"
                                borderRadius="full"
                                onClick={() => downloadMarkdown(blog.content, "blog-post.md")}
                            />
                            <Button
                                leftIcon={<IoShareSocial />}
                                onClick={handleShare}
                                size="sm"
                                bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                color="white"
                                _hover={{
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)'
                                }}
                                transition="all 0.2s"
                                borderRadius="full"
                                fontWeight="bold"
                            >
                                Share
                            </Button>
                        </HStack>
                    </HStack>

                    <VStack align="start" spacing={4}>
                        <Heading
                            fontSize={{ base: "md", sm: "xl", md: "3xl", lg: "3xl", xl: "4xl" }}
                            color="gray.800"
                            lineHeight="1.2"
                            fontWeight="bold"
                        >
                            {blog.title}
                        </Heading>

                        <HStack justify="space-between" align="center" w="full" spacing={6} >
                            <HStack spacing={4} flexWrap="wrap">
                                <Text color="purple.600" fontWeight="medium">By {blog.author}</Text>
                                <Text color="gray.400">•</Text>
                                <Text color="gray.600">{new Date(blog.date).toLocaleDateString()}</Text>
                                <Text color="gray.400">•</Text>
                                <Text color="gray.600">{calculateReadingTime(blog.content)} min read</Text>
                            </HStack>

                            <HStack spacing={4} flexWrap="wrap">
                                <Button
                                    leftIcon={<IoHeart />}
                                    onClick={handleLike}
                                    bg={isLiked ? "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)" : "transparent"}
                                    color={isLiked ? "white" : "gray.600"}
                                    border="2px solid"
                                    borderColor={isLiked ? "transparent" : "gray.300"}
                                    _hover={{
                                        transform: 'scale(1.05)',
                                        boxShadow: isLiked ? '0 8px 25px rgba(255, 107, 107, 0.4)' : '0 8px 25px rgba(0,0,0,0.1)'
                                    }}
                                    transition="all 0.2s"
                                    size="sm"
                                    borderRadius="full"
                                    animation={isLiked ? `${pulse} 0.6s ease-out` : 'none'}
                                >
                                    {likesCount} Likes
                                </Button>
                                <HStack spacing={1}>
                                    <Icon as={IoEye} color="gray.500" />
                                    <Text color="gray.500">{blogMeta.views || 0} views</Text>
                                </HStack>
                            </HStack>
                        </HStack>
                    </VStack>
                </Container>
            </Box>

            <Container maxW={containerMaxW} py={2} px={{ base: 4, md: 12, lg: 12 }} mt={0}>
                <MarkdownRenderer
                    content={blog.content} />
                {/* <Box
                    dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
                    sx={{
                        'h1, h2, h3, h4, h5, h6': {
                            color: '#2D3748',
                            marginTop: '2rem',
                            marginBottom: '1rem',
                            fontWeight: 'bold',
                            lineHeight: '1.3'
                        },
                        'h1': { fontSize: { base: 'lg', md: 'xl' } },
                        'h2': { fontSize: { base: 'md', md: 'lg' } },
                        'p': {
                            marginBottom: '1rem',
                            lineHeight: { base: '1.6', md: '1.8' },
                            color: '#4A5568',
                            fontSize: { base: 'md', md: 'lg' }
                        },
                        'ul, ol': {
                            marginLeft: '2rem',
                            marginBottom: '1rem',
                            color: '#4A5568'
                        },
                        'blockquote': {
                            borderLeft: '4px solid #805AD5',
                            paddingLeft: '1rem',
                            fontStyle: 'italic',
                            color: '#666',
                            margin: '1rem 0',
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                            padding: '1rem',
                            borderRadius: '8px'
                        },
                        'code': {
                            background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                            padding: '0.2rem 0.4rem',
                            borderRadius: '4px',
                            fontSize: '0.9em',
                            color: '#2D3748',
                            border: '1px solid #E2E8F0'
                        },
                        'pre': {
                            background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                            padding: '1rem',
                            borderRadius: '8px',
                            overflow: 'auto',
                            border: '1px solid #E2E8F0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }
                    }}
                /> */}
            </Container>
        </Box>
    );
};

// Main App Component
const Blogs = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [currentView, setCurrentView] = useState('list');
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const blogId = searchParams.get('blogid');

    // const titleSize = useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' });
    // const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    useEffect(() => {
        const handleRouteChange = async () => {
            if (blogId) {
                setCurrentView(blogId);
                setLoading(true);
                const blogMeta = await getBlogMetadata(blogId);
                if (blogMeta) {
                    setBlogs(prev => {
                        const existing = prev.find(b => b.id === blogId);
                        return existing ? prev : [...prev, blogMeta];
                    });
                }
                setLoading(false);
            } else {
                setCurrentView('list');
                setLoading(true);
                const allBlogs = await getAllBlogsMetadata();
                setBlogs(allBlogs);
                setLoading(false);
            }
        };

        handleRouteChange();
    }, [blogId]);

    const handleBlogClick = (blogId) => {
        setCurrentView(blogId);
        navigate(`/blogs?blogid=${blogId}`);
    };

    const handleBackToList = () => {
        setCurrentView('list');
        navigate(`/blogs`);
    };

    const filteredBlogs = blogs.filter(blog => {
        const title = blogContent[blog.id].title || '';
        const author = blog.author || '';
        const query = searchQuery.toLowerCase();
        return title.toLowerCase().includes(query) || author.toLowerCase().includes(query);
    });



    if (loading) {
        return (
            <Center mt={20}>
                <Flex justify="center" align="center" minH="50vh" direction="column" >
                    <Box animation={`${float} 3s ease-in-out infinite`} mb={4}>
                        <Icon as={IoRocket} w={12} h={12} color="purple.400" />
                    </Box>
                    <Spinner
                        size="xl"
                        color="purple.500"
                        thickness="4px"
                        speed="0.8s"
                    />
                    <Text mt={4} color="gray.600" fontWeight="medium">
                        Navigating through the cosmos...
                    </Text>
                </Flex>
            </Center>
        );
    }

    return (
        <Box bg="white" minH="100vh" >
            <SidebarAdLeft
                position="left"
            />
            {currentView === 'list' ? (
                <Flex direction="column" minH="100vh">
                    <Container
                        maxW="6xl"
                        pt={{ base: 7, md: 8, lg: 8 }}
                        mt={{ base: 9, md: 9, lg: 10 }}
                        px={{ base: 2, md: 12, lg: 12 }}
                    >
                        <VStack
                            spacing={{ base: 6, md: 8 }}
                            align="center" mb={{ base: 8, md: 12 }}
                        >
                            {/* <Box animation={`${float} 4s ease-in-out infinite`}>
                            <Icon as={IoRocket} w={{ base: 12, md: 16 }} h={{ base: 12, md: 16 }} color="purple.400" />
                        </Box> */}
                            <Heading
                                size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl", xl: "2xl" }}
                                color="gray.800"
                                textAlign="center"
                                fontWeight="bold"
                                mt={2}
                                background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                backgroundClip="text"
                                animation={`${shimmer} 2s infinite linear`}
                                backgroundSize="200px 100%"
                            >
                                🚀 Blogs
                            </Heading>

                            {/* <Text
                                fontSize={{ base: 'md', md: 'lg' }}
                                color="gray.600"
                                textAlign="center"
                                maxW={{ base: 'full', md: '2xl' }}
                                lineHeight="1.6"
                                px={{ base: 4, md: 0 }}
                            >
                                Discover articles, insights, and stories from our collection of thought-provoking content. Journey through the infinite expanse of knowledge.
                            </Text> */}

                            <Box
                                mb={[4, 5, 6]}
                                width={["80%", "80%", "85%"]}
                                mx={["0", "auto", "auto", "auto"]}
                                px={{ base: 2, sm: 4, md: 12, lg: 12 }}
                            >
                                <InputGroup
                                    size={{ base: "md", md: "lg" }}
                                    px={{ base: 4, md: 12, lg: 12 }}
                                >
                                    <InputLeftElement
                                        pointerEvents="none"
                                        h={{ base: "45px", md: "48px" }}
                                        px={{ base: 6, md: 12, lg: 12 }}
                                        mx={{ base: 3, md: 5, lg: 5 }}
                                    // pt={{ base: 3 }}
                                    >
                                        <SearchIcon
                                            color="gray.400"
                                            boxSize={{ base: "20px", md: "20px" }}
                                        />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Search blogs by title or author..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        fontSize={{ base: "sm", sm: "md", md: "lg" }}
                                        borderRadius={{ base: "full", md: "full" }}
                                        h={{ base: "10px", md: "48px" }}
                                        px={6}
                                        py={6}
                                        boxShadow="0 0 10px rgba(102, 126, 234, 0.6)"
                                        border="2px solid"
                                        borderColor="purple.300"
                                        bg="whiteAlpha.900"
                                        backdropFilter="blur(10px)"
                                        _hover={{
                                            borderColor: "purple.400"
                                        }}
                                        _focus={{
                                            borderColor: "purple.500",
                                            boxShadow: {
                                                base: "0 0 0 2px rgba(128, 90, 213, 0.1)",
                                                md: "0 0 0 3px rgba(128, 90, 213, 0.1)"
                                            }
                                        }}
                                        _placeholder={{
                                            fontSize: { base: "sm", md: "md" },
                                            color: "gray.500"
                                        }}
                                    />
                                </InputGroup>
                            </Box>

                        </VStack>

                        <Box w="full" px={{ base: 4, md: 12, lg: 12 }} >
                            {/* <SimpleGrid
                            columns={gridColumns}
                            spacing={{ base: 6, md: 8 }}
                            pb={{ base: 8, md: 16 }}
                        >
                            {blogs.map((blog, index) => (
                                <Box
                                    key={blog.id}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <BlogCard
                                        blog={blog}
                                        onClick={() => handleBlogClick(blog.id)}
                                    />
                                </Box>
                            ))}
                        </SimpleGrid> */}

                            <Grid
                                templateColumns={{
                                    base: "1fr",                  // Stack vertically on small screens
                                    md: "repeat(2, 220px)",       // 2 fixed-width columns on medium screens
                                    lg: "repeat(3, 210px)",
                                    xl: "repeat(3, 1fr)",       // 3 fixed-width columns on extra-large screens
                                }}
                                gap={6}
                                justifyContent="center"
                                w="full">
                                {filteredBlogs.map((blog, index) => (
                                    <GridItem key={index}>
                                        <Box
                                            key={blog.id}
                                            style={{
                                                animationDelay: `${index * 0.1}s`
                                            }}
                                        >
                                            <BlogCard
                                                blog={blog}
                                                onClick={() => handleBlogClick(blog.id)}
                                            />
                                        </Box>
                                    </GridItem>
                                ))}
                            </Grid>
                        </Box>
                    </Container>

                    <Spacer />

                    <Box textAlign="center" mt={16} mb={1}>
                        <Button
                            as="a"
                            href="https://docs.google.com/forms/d/e/1FAIpQLScZ_AeyPEWBOFszZLkZqsmv5m0qWh3do5wTHEhwCHNifTgzeA/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            bgGradient="linear(to-r, blue.400, purple.500)"
                            color="white"
                            _hover={{
                                bgGradient: "linear(to-r, purple.600, blue.700)",
                                boxShadow: "0 0 20px rgba(173, 216, 230, 0.8)",
                            }}
                            _active={{
                                bgGradient: "linear(to-r, purple.800, blue.800)",
                            }}
                            padding="1.5rem"
                            borderRadius="lg"
                            fontWeight="bold"
                            fontSize={["sm", "md", "lg"]}
                            boxShadow="0 0 10px rgba(173, 216, 230, 0.5)"
                        >
                            🚀 Publish your blog here
                        </Button>
                    </Box>
                </Flex>
            ) : (
                <BlogView
                    blogId={currentView}
                    onBack={handleBackToList}
                />
            )}
            <SidebarAdRight
                position="right"
            />
        </Box>
    );
};

export default Blogs;