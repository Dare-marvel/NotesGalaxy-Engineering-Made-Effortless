import React, { useState, useEffect } from 'react';
import {
    ChakraProvider,
    Box,
    Container,
    Heading,
    Text,
    Card,
    CardBody,
    CardHeader,
    SimpleGrid,
    Button,
    Flex,
    Icon,
    HStack,
    VStack,
    useToast,
    Spinner,
    IconButton
} from '@chakra-ui/react';
import {
    IoArrowBack,
    IoHeart,
    IoEye,
    IoTime,
    IoShareSocial,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoGithub,
    IoCalendar
} from 'react-icons/io5';
import { marked } from 'marked';
import { getFirestore, doc, getDoc, getDocs, collection, updateDoc, increment, arrayUnion, arrayRemove } from 'firebase/firestore';
import app from '../config/firebaseConfig';
import { useNavigate, useSearchParams } from "react-router-dom";

const db = getFirestore(app);

// Mock blog content data
const blogContent = {
    "SDsP7ejWQ7hGir4DHN3U": {
        title: "Exploring Space",
        content: `# Exploring Space

Space exploration has always fascinated humanity. From the first moon landing to modern Mars missions, we continue to push boundaries.

## The Journey Continues

Every discovery brings new questions and possibilities for the future of human exploration beyond Earth.`,
        date: "2024-03-15",
        author: "Alex Johnson"
    },
    "blog-2": {
        title: "Future of AI",
        content: `# Future of AI

Artificial Intelligence is reshaping our world in unprecedented ways. From healthcare to transportation, AI applications are everywhere.

## What Lies Ahead

The next decade promises revolutionary advances in machine learning and autonomous systems.`,
        date: "2024-03-10",
        author: "Sarah Chen"
    },
    "blog-3": {
        title: "Ocean Mysteries",
        content: `# Ocean Mysteries

Our oceans hold countless secrets. Deep sea exploration reveals new species and ecosystems we never knew existed.

## Diving Deeper

Each expedition uncovers more about the vast underwater world that covers most of our planet.`,
        date: "2024-03-08",
        author: "Mike Rodriguez"
    }
};

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

    return (
        <Card
            cursor="pointer"
            onClick={onClick}
            transition="all 0.2s"
            _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
            }}
            border="1px solid"
            borderColor="gray.200"
            bg="white"
        >
            <CardHeader pb={2}>
                <Heading size="md" color="gray.800" noOfLines={2}>
                    {blog.title}
                </Heading>
                <Text fontSize="sm" color="purple.600" mt={1}>
                    By {blogContentData?.author}
                </Text>
                <HStack spacing={2} mt={2}>
                    <Icon as={IoCalendar} w={4} h={4} color="gray.500" />
                    <Text fontSize="sm" color="gray.500">
                        {new Date(blogContentData?.date).toLocaleDateString()}
                    </Text>
                </HStack>
            </CardHeader>
            <CardBody pt={0}>
                <HStack spacing={3}>
                    <HStack spacing={1}>
                        <Icon as={IoTime} w={4} h={4} color="blue.500" />
                        <Text fontSize="sm" color="blue.500">
                            {readingTime} min read
                        </Text>
                    </HStack>
                    <HStack spacing={1}>
                        <Icon as={IoEye} w={4} h={4} color="gray.500" />
                        <Text fontSize="sm" color="gray.500">
                            {blog.views || 0}
                        </Text>
                    </HStack>
                    <HStack spacing={1}>
                        <Icon as={IoHeart} w={4} h={4} color="red.500" />
                        <Text fontSize="sm" color="red.500">
                            {likesCount}
                        </Text>
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
                title: "Link copied to clipboard!",
                status: "success",
                duration: 2000,
                isClosable: true,
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
                title: isLiked ? "Like removed!" : "Blog liked!",
                status: "success",
                duration: 2000,
                isClosable: true,
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
            <Flex justify="center" align="center" minH="50vh">
                <Spinner size="xl" color="purple.500" />
            </Flex>
        );
    }

    if (!blog || !blogMeta) {
        return (
            <VStack spacing={4} align="center" py={10}>
                <Heading color="red.500">Blog not found</Heading>
                <Button onClick={onBack} leftIcon={<IoArrowBack />} colorScheme="purple">
                    Back to Blogs
                </Button>
            </VStack>
        );
    }

    const likedBy = blogMeta.likedBy || [];
    const isLiked = userId && likedBy.includes(userId);
    const likesCount = likedBy.length;

    return (
        <Box bg="white" minH="100vh" pt={10} mt={5}>
            <Box bg="white" py={6} borderBottom="1px solid" borderColor="gray.200">
                <Container maxW="4xl">
                    <HStack justify="space-between" align="center" mb={4}>
                        <Button
                            leftIcon={<IoArrowBack />}
                            onClick={onBack}
                            variant="outline"
                            colorScheme="purple"
                        >
                            Back
                        </Button>
                        <HStack spacing={2}>
                            <IconButton
                                icon={<IoLogoFacebook />}
                                aria-label="Facebook"
                                size="sm"
                                colorScheme="facebook"
                                as="a"
                                href="https://facebook.com"
                                target="_blank"
                            />
                            <IconButton
                                icon={<IoLogoInstagram />}
                                aria-label="Instagram"
                                size="sm"
                                colorScheme="pink"
                                as="a"
                                href="https://instagram.com"
                                target="_blank"
                            />
                            <IconButton
                                icon={<IoLogoGithub />}
                                aria-label="GitHub"
                                size="sm"
                                colorScheme="gray"
                                as="a"
                                href="https://github.com"
                                target="_blank"
                            />
                            <Button
                                leftIcon={<IoShareSocial />}
                                onClick={handleShare}
                                size="sm"
                                colorScheme="blue"
                            >
                                Share
                            </Button>
                        </HStack>
                    </HStack>

                    <VStack align="start" spacing={4}>
                        <Heading size="xl" color="gray.800">{blog.title}</Heading>
                        <HStack spacing={4}>
                            <Text color="purple.600">By {blog.author}</Text>
                            <Text color="gray.400">•</Text>
                            <Text color="gray.600">{new Date(blog.date).toLocaleDateString()}</Text>
                            <Text color="gray.400">•</Text>
                            <Text color="gray.600">{calculateReadingTime(blog.content)} min read</Text>
                        </HStack>

                        <HStack spacing={4}>
                            <Button
                                leftIcon={<IoHeart />}
                                onClick={handleLike}
                                colorScheme={isLiked ? "red" : "gray"}
                                variant={isLiked ? "solid" : "outline"}
                                size="sm"
                            >
                                {likesCount} Likes
                            </Button>
                            <HStack spacing={1}>
                                <Icon as={IoEye} color="gray.500" />
                                <Text color="gray.500">{blogMeta.views || 0} views</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </Container>
            </Box>

            <Container maxW="4xl" py={8}>
                <Box
                    dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
                    sx={{
                        'h1, h2, h3, h4, h5, h6': {
                            color: '#2D3748',
                            marginTop: '2rem',
                            marginBottom: '1rem'
                        },
                        'p': {
                            marginBottom: '1rem',
                            lineHeight: '1.6',
                            color: '#4A5568'
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
                            margin: '1rem 0'
                        },
                        'code': {
                            background: '#F7FAFC',
                            padding: '0.2rem 0.4rem',
                            borderRadius: '4px',
                            fontSize: '0.9em',
                            color: '#2D3748'
                        },
                        'pre': {
                            background: '#F7FAFC',
                            padding: '1rem',
                            borderRadius: '8px',
                            overflow: 'auto',
                            border: '1px solid #E2E8F0'
                        }
                    }}
                />
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
    const [loading, setLoading] = useState(true);
    const blogId = searchParams.get('blogid');

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
        navigate(`/blogs/`);
    };

    if (loading) {
        return (
            <ChakraProvider>
                <Box bg="white" minH="100vh">
                    <Flex justify="center" align="center" minH="100vh">
                        <Spinner size="xl" color="purple.500" />
                    </Flex>
                </Box>
            </ChakraProvider>
        );
    }

    return (
        <ChakraProvider>
            <Box bg="white" minH="100vh">
                {currentView === 'list' ? (
                    <Container maxW="6xl" py={8}>
                        <VStack spacing={8} align="center" mb={12}>
                            <Heading size="2xl" color="gray.800" textAlign="center">
                                📝 My Blog
                            </Heading>
                            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
                                Discover articles, insights, and stories from our collection of thought-provoking content.
                            </Text>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                            {blogs.map((blog) => (
                                <BlogCard
                                    key={blog.id}
                                    blog={blog}
                                    onClick={() => handleBlogClick(blog.id)}
                                />
                            ))}
                        </SimpleGrid>
                    </Container>
                ) : (
                    <BlogView
                        blogId={currentView}
                        onBack={handleBackToList}
                    />
                )}
            </Box>
        </ChakraProvider>
    );
};

export default Blogs;