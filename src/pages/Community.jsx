import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  // Avatar,
  Badge,
  VStack,
  HStack,
  Button,
  Icon,
  Flex,
  // useColorModeValue,
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel,
  Card,
  CardBody,
  Grid,
  GridItem,
  Link,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Alert,
  AlertIcon,
  // Collapse,
  Stack,
  useToast
} from '@chakra-ui/react';

import { keyframes } from '@emotion/react';
// getUserId.js
import FingerprintJS from '@fingerprintjs/fingerprintjs';

// Import Firebase (you'll need to install: npm install firebase)
import app from '../config/firebaseConfig'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  increment,
  onSnapshot,
  query,
  orderBy,
  where,
  arrayUnion,
  getDoc,
  setDoc
} from 'firebase/firestore';

import SidebarAdLeft from '../components/SidebarAd/SidebarAdLeft';
import SidebarAdRight from '../components/SidebarAd/SidebarAdRight';

// React Icons
import {
  FaTrophy,
  FaStar,
  FaHeart,
  FaPlus,
  FaExternalLinkAlt,
  FaMedal,
  FaCrown,
  FaUsers,
  FaFileAlt,
  FaThumbsUp,
  FaEye,
  FaLink,
  FaGlobe,
  FaRegHeart
} from 'react-icons/fa';

import { incrementVisitorCount } from "../utils/visitorTracker";

// Keyframe animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(138, 43, 226, 0.5); }
  50% { box-shadow: 0 0 20px rgba(138, 43, 226, 0.8), 0 0 30px rgba(138, 43, 226, 0.6); }
`;

const slideInUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Firebase configuration - Replace with your config
// const firebaseConfig = {
//   // Your Firebase config object
//   apiKey: "your-api-key",
//   authDomain: "your-project.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "your-app-id"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper function to get user's unique identifier (IP-based or device fingerprint)
const getUserId = async () => {
  const localKey = 'user_id';

  // Step 1: Check localStorage
  const cached = localStorage.getItem(localKey);
  if (cached) return cached;

  // Step 2: Try to use FingerprintJS
  try {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const visitorId = result.visitorId;

    // Cache it for future use
    localStorage.setItem(localKey, visitorId);
    return visitorId;
  } catch (e) {
    // Step 3: Fingerprinting failed — use UUID fallback
    const fallbackId = `user_${crypto.randomUUID()}`;
    localStorage.setItem(localKey, fallbackId);
    return fallbackId;
  }
};

const BadgeComponent = ({ rank, isAnimated = false }) => {
  const getBadgeProps = (rank) => {
    switch (rank) {
      case 1:
        return {
          color: 'yellow.400',
          bg: 'linear-gradient(135deg, #FFD700, #FFA500)',
          icon: FaCrown,
          label: 'Gold'
        };
      case 2:
        return {
          color: 'gray.300',
          bg: 'linear-gradient(135deg, #C0C0C0, #A8A8A8)',
          icon: FaMedal,
          label: 'Silver'
        };
      case 3:
        return {
          color: 'orange.400',
          bg: 'linear-gradient(135deg, #CD7F32, #B8860B)',
          icon: FaMedal,
          label: 'Bronze'
        };
      default:
        return {
          color: 'purple.300',
          bg: 'linear-gradient(135deg, #9333EA, #7C3AED)',
          icon: FaStar,
          label: `#${rank}`
        };
    }
  };

  const badgeProps = getBadgeProps(rank);

  return (
    <Box
      position="relative"
      animation={isAnimated ? `${float} 3s ease-in-out infinite` : 'none'}
    >
      <Badge
        background={badgeProps.bg}
        color="white"
        px={3}
        py={1}
        borderRadius="full"
        fontSize="sm"
        fontWeight="bold"
        boxShadow="0 4px 15px rgba(0,0,0,0.2)"
        _hover={{
          transform: 'scale(1.05)',
          transition: 'all 0.2s'
        }}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Icon as={badgeProps.icon} /> {badgeProps.label}
      </Badge>
      {rank <= 3 && (
        <Box
          position="absolute"
          top="-2px"
          right="-2px"
          w="8px"
          h="8px"
          bg="yellow.300"
          borderRadius="full"
          animation={`${sparkle} 2s ease-in-out infinite`}
        />
      )}
    </Box>
  );
};

const NotesModal = ({ isOpen, onClose, user }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (isOpen && user) {
      fetchUserNotes();
      getCurrentUserId();
    }
  }, [isOpen, user]);

  const getCurrentUserId = async () => {
    const id = await getUserId();
    setUserId(id);
  };

  const fetchUserNotes = async () => {
    try {
      setLoading(true);
      const notesRef = collection(db, 'notes');
      const q = query(notesRef, where('authorId', '==', user.id));
      const querySnapshot = await getDocs(q);

      const userNotes = [];
      querySnapshot.forEach((doc) => {
        userNotes.push({ id: doc.id, ...doc.data() });
      });

      setNotes(userNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
      toast({
        title: 'Error',
        description: 'Failed to load notes',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNoteView = async (noteId) => {
    try {
      const noteRef = doc(db, 'notes', noteId);

      // Increment the views count in Firestore
      await updateDoc(noteRef, {
        views: increment(1)
      });

      // Update local state
      setNotes(prev =>
        prev.map(note =>
          note.id === noteId
            ? { ...note, views: (note.views || 0) + 1 }
            : note
        )
      );
    } catch (error) {
      console.error('Failed to increment views:', error);
      toast({
        title: 'Error',
        description: 'Failed to record view',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  const handleNoteLike = async (noteId, currentLikes, likedBy = []) => {
    if (!userId) return;

    if (likedBy.includes(userId)) {
      toast({
        title: 'Already Liked',
        description: 'You have already liked this note',
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    try {
      const noteRef = doc(db, 'notes', noteId);
      await updateDoc(noteRef, {
        likes: increment(1),
        likedBy: arrayUnion(userId)
      });

      // Update local state
      setNotes(prev => prev.map(note =>
        note.id === noteId
          ? { ...note, likes: note.likes + 1, likedBy: [...(note.likedBy || []), userId] }
          : note
      ));

      // Update user's total likes
      const userRef = doc(db, 'users', user.id);
      await updateDoc(userRef, {
        totalLikes: increment(1)
      });

      toast({
        title: 'Liked!',
        description: 'Note liked successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error liking note:', error);
      toast({
        title: 'Error',
        description: 'Failed to like note',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack>
            <Text fontSize="2xl">{user?.avatar}</Text>
            <VStack align="start" spacing={0}>
              <Text>{user?.username}'s Notes</Text>
              <Text fontSize="sm" color="gray.500">
                {user?.contributions} contributions
              </Text>
            </VStack>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading ? (
            <Flex justify="center" py={8}>
              <Spinner size="lg" color="purple.500" />
            </Flex>
          ) : notes.length > 0 ? (
            <VStack spacing={4} align="stretch">
              {notes.map((note, index) => (
                <Card
                  key={note.id}
                  variant="outline"
                  _hover={{ boxShadow: 'md', transition: 'all 0.2s' }}
                >
                  <CardBody>
                    <VStack align="stretch" spacing={3}>
                      <HStack justify="space-between">
                        <Heading size="sm" color="purple.700">
                          {note.title || `Note #${index + 1}`}
                        </Heading>
                        <Link href={note.link} isExternal>
                          <Button
                            size="sm"
                            variant="ghost"
                            colorScheme="blue"
                            onClick={() => {
                              // window.open(note.link, '_blank', 'noopener,noreferrer');
                              handleNoteView(note.id);
                            }}
                          >
                            <Icon as={FaExternalLinkAlt} mr={1} />
                            View
                          </Button>

                        </Link>
                      </HStack>

                      {note.description && (
                        <Text fontSize="sm" color="gray.600" noOfLines={2}>
                          {note.description}
                        </Text>
                      )}

                      <HStack justify="space-between">
                        <HStack spacing={4}>
                          <Button
                            size="sm"
                            variant="ghost"
                            colorScheme={note.likedBy?.includes(userId) ? "red" : "gray"}
                            onClick={() => handleNoteLike(note.id, note.likes, note.likedBy)}
                            leftIcon={<Icon as={note.likedBy?.includes(userId) ? FaHeart : FaRegHeart} />}
                            disabled={note.likedBy?.includes(userId)}
                            _hover={{
                              animation: !note.likedBy?.includes(userId) ? `${pulse} 0.5s ease-in-out` : 'none'
                            }}
                          >
                            {note.likes || 0}
                          </Button>

                          <HStack spacing={1}>
                            <Icon as={FaEye} color="gray.400" size="sm" />
                            <Text fontSize="sm" color="gray.500">
                              {note.views || 0}
                            </Text>
                          </HStack>
                        </HStack>

                        {note.createdAt && (
                          <Text fontSize="xs" color="gray.400">
                            {new Date(note.createdAt.toDate()).toLocaleDateString()}
                          </Text>
                        )}
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </VStack>
          ) : (
            <Alert status="info">
              <AlertIcon />
              No notes found for this user.
            </Alert>
          )}
        </ModalBody>
        {/* <ModalFooter>
          <Button colorScheme="purple" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

const UserRow = ({ user, rank, index, sortBy }) => {
  const [userId, setUserId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    getUserId().then(setUserId);
  }, []);

  // const handleQuickLike = async () => {
  //   if (!userId) return;

  //   try {
  //     // Get a random note from this user to like
  //     const notesRef = collection(db, 'notes');
  //     const q = query(notesRef, where('authorId', '==', user.id));
  //     const querySnapshot = await getDocs(q);

  //     if (querySnapshot.empty) {
  //       toast({
  //         title: 'No Notes',
  //         description: 'This user has no notes to like',
  //         status: 'info',
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //       return;
  //     }

  //     // Pick a random note that hasn't been liked by this user
  //     const notes = [];
  //     querySnapshot.forEach((doc) => {
  //       const noteData = doc.data();
  //       if (!noteData.likedBy?.includes(userId)) {
  //         notes.push({ id: doc.id, ...noteData });
  //       }
  //     });

  //     if (notes.length === 0) {
  //       toast({
  //         title: 'Already Liked',
  //         description: 'You have already liked all notes from this user',
  //         status: 'info',
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //       return;
  //     }

  //     const randomNote = notes[Math.floor(Math.random() * notes.length)];

  //     // Like the random note
  //     const noteRef = doc(db, 'notes', randomNote.id);
  //     await updateDoc(noteRef, {
  //       likes: increment(1),
  //       likedBy: arrayUnion(userId)
  //     });

  //     // Update user's total likes
  //     const userRef = doc(db, 'users', user.id);
  //     await updateDoc(userRef, {
  //       totalLikes: increment(1)
  //     });

  //     toast({
  //       title: 'Liked!',
  //       description: `Liked "${randomNote.title || 'a note'}" by ${user.username}`,
  //       status: 'success',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   } catch (error) {
  //     console.error('Error liking note:', error);
  //     toast({
  //       title: 'Error',
  //       description: 'Failed to like note',
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };

  return (
    <>
      <Tr
        _hover={{
          bg: 'rgba(138, 43, 226, 0.05)',
          transform: 'translateX(4px)',
          transition: 'all 0.3s ease'
        }}
        animation={`${slideInUp} 0.5s ease-out ${index * 0.1}s both`}
      >
        {/* Rank Column */}
        <Td px={{ base: 2, md: 3, lg: 4 }} py={{ base: 2, md: 3 }}>
          <BadgeComponent rank={rank} isAnimated={rank <= 3} />
        </Td>

        {/* User Column */}
        <Td px={{ base: 2, md: 3, lg: 4 }} py={{ base: 2, md: 3 }}>
          <HStack spacing={{ base: 2, md: 3 }}>
            <Box
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              animation={rank <= 3 ? `${float} 4s ease-in-out infinite` : 'none'}
              // animationDelay={`${index * 0.5}s`}
              sx={{
                animationDelay: `${index * 0.5}s`,
              }}
              flexShrink={0}
            >
              {user.avatar}
            </Box>
            <VStack align="start" spacing={0} overflow="hidden" flex={1}>
              <Text
                fontWeight="bold"
                color="purple.700"
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
                noOfLines={1}
                maxW="100%"
              >
                {user.username}
              </Text>
              <Text
                fontSize={{ base: "2xs", md: "xs" }}
                color="gray.500"
                display={{ base: "none", md: "block" }}
                noOfLines={1}
              >
                Contributor from {user.createdAt}
              </Text>
              {/* Mobile-only compact info */}
              <HStack
                spacing={2}
                display={{ base: "flex", sm: "none" }}
                fontSize="2xs"
                color="gray.600"
              >
                <Text>{user.contributions}</Text>
                <Text>•</Text>
                <Text>{user.totalLikes} ♥</Text>
              </HStack>
            </VStack>
          </HStack>
        </Td>

        {/* Contributions Column - Hidden on mobile */}
        <Td
          px={{ base: 2, md: 3, lg: 4 }}
          py={{ base: 2, md: 3 }}
          display={{ base: "none", sm: "table-cell" }}
        >
          <HStack spacing={{ base: 1, md: 2 }}>
            <Icon as={FaPlus} color="blue.500" />
            <Text
              fontWeight="bold"
              color="blue.600"
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
            >
              {user.contributions}
            </Text>
          </HStack>
        </Td>

        {/* Likes Column - Hidden on mobile */}
        <Td
          px={{ base: 2, md: 3, lg: 4 }}
          py={{ base: 2, md: 3 }}
          display={{ base: "none", sm: "table-cell" }}
        >
          <Tooltip label="Total likes">
            <Button
              size={{ base: "xs", md: "sm" }}
              variant="ghost"
              colorScheme="red"
              leftIcon={<Icon as={FaHeart} boxSize={{ base: 3, md: 4 }} />}
              fontSize={{ base: "xs", md: "sm" }}
              px={{ base: 2, md: 3 }}
              _hover={{
                transform: 'scale(1.1)',
                animation: `${glow} 1s ease-in-out`
              }}
            >
              {user.totalLikes}
            </Button>
          </Tooltip>
        </Td>

        {/* Actions Column */}
        <Td px={{ base: 2, md: 3, lg: 4 }} py={{ base: 2, md: 3 }}>
          <Tooltip label="View all notes">
            <Button
              size={{ base: "xs", md: "sm" }}
              variant="ghost"
              colorScheme="purple"
              onClick={onOpen}
              leftIcon={<Icon as={FaEye} boxSize={{ base: 3, md: 4 }} />}
              fontSize={{ base: "xs", md: "sm" }}
              px={{ base: 2, md: 3 }}
            >
              <Text display={{ base: "none", md: "inline" }}>View</Text>
            </Button>
          </Tooltip>
        </Td>
      </Tr>
      <NotesModal isOpen={isOpen} onClose={onClose} user={user} />
    </>
  );
};

const RankingTable = ({ title, users, sortBy, icon }) => {
  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === 'contributions') {
      return b.contributions - a.contributions;
    }
    return b.totalLikes - a.totalLikes;
  });

  return (
    <Card
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(10px)"
      borderRadius={{ base: "lg", md: "xl", lg: "2xl" }}
      boxShadow="0 20px 40px rgba(138, 43, 226, 0.1)"
      border="1px solid rgba(138, 43, 226, 0.2)"
      overflow="hidden"
      _hover={{
        boxShadow: "0 25px 50px rgba(138, 43, 226, 0.15)",
        transition: "all 0.3s ease"
      }}
    >
      <CardBody p={0}>
        <Box
          bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          p={{ base: 3, md: 4, lg: 6 }}
          color="white"
        >
          <HStack spacing={{ base: 2, md: 3 }}>
            {/* <Icon as={icon} size={{ base: "18", md: "20", lg: "24" }} /> */}
            <Heading size={{ base: "md", md: "md", lg: "lg" }} noOfLines={1}>
              {title}
            </Heading>
          </HStack>
        </Box>
        <Box overflowX="auto">
          <Table variant="simple" size={{ base: "sm", md: "sm", lg: "md" }}>
            <Thead bg="gray.50">
              <Tr>
                <Th
                  color="purple.600"
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 3, lg: 4 }}
                  py={{ base: 2, md: 3 }}
                >
                  Rank
                </Th>
                <Th
                  color="purple.600"
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 3, lg: 4 }}
                  py={{ base: 2, md: 3 }}
                >
                  User
                </Th>
                <Th
                  color="purple.600"
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 3, lg: 4 }}
                  py={{ base: 2, md: 3 }}
                  display={{ base: "none", sm: "table-cell" }}
                >
                  Contributions
                </Th>
                <Th
                  color="purple.600"
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 3, lg: 4 }}
                  py={{ base: 2, md: 3 }}
                  display={{ base: "none", sm: "table-cell" }}
                >
                  Likes
                </Th>
                <Th
                  color="purple.600"
                  fontSize={{ base: "xs", md: "sm" }}
                  px={{ base: 2, md: 3, lg: 4 }}
                  py={{ base: 2, md: 3 }}
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedUsers.map((user, index) => (
                <UserRow
                  key={user.id}
                  user={user}
                  rank={index + 1}
                  index={index}
                  sortBy={sortBy}
                />
              ))}
            </Tbody>
          </Table>
        </Box>
      </CardBody>
    </Card>
  );
};

const FloatingStars = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4
  }));

  return (
    <Box position="fixed" top={0} left={0} w="100%" h="100%" pointerEvents="none" zIndex={-1}>
      {stars.map(star => (
        <Box
          key={star.id}
          position="absolute"
          left={`${star.left}%`}
          top={`${star.top}%`}
          w={`${star.size}px`}
          h={`${star.size}px`}
          bg="purple.300"
          borderRadius="full"
          style={{
            animationDelay: `${star.delay}s`,
          }}
          opacity={0.6}
        />
      ))}
    </Box>
  );
};

export default function SpaceCommunityPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalUsers: 0,
    totalNotes: 0,
    totalLikes: 0
  });

  useEffect(() => {
    incrementVisitorCount();
    fetchUsers();
    fetchStats();
    // getVisitorCount().then((count) => {
    //   setStats((prev) => ({
    //     ...prev,
    //     totalVisitors: count,
    //   }));
    // });
  }, []);

  // const fetchUsers = async () => {
  //   try {
  //     setLoading(true);
  //     const usersRef = collection(db, "users");
  //     const querySnapshot = await getDocs(usersRef);

  //     const usersList = [];
  //     querySnapshot.forEach((doc) => {
  //       const userData = doc.data();

  //       usersList.push({
  //         id: doc.id,
  //         ...userData,
  //         createdAt: userData.createdAt?.toDate().toLocaleDateString("en-US", {
  //           year: "numeric",
  //           month: "long",
  //           day: "numeric",
  //         }),
  //       });
  //     });

  //     setUsers(usersList);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //     setError("Failed to load users");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchUsers = async () => {
    try {
      setLoading(true);

      // Fetch users
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);

      // Fetch all notes once
      const notesSnapshot = await getDocs(collection(db, "notes"));
      const notes = [];
      notesSnapshot.forEach((doc) => {
        notes.push({ id: doc.id, ...doc.data() });
      });

      const usersList = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const userId = doc.id;

        // Filter notes authored by this user
        const userNotes = notes.filter(note => note.authorId === userId);

        // Sum up likes
        const totalLikes = userNotes.reduce((sum, note) => {
          return sum + (note.likedBy?.length || 0);
        }, 0);

        // Count contributions (number of notes)
        const contributions = userNotes.length;

        usersList.push({
          id: userId,
          ...userData,
          createdAt: userData.createdAt?.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          totalLikes,
          contributions,
        });
      });

      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };




  const fetchStats = async () => {
    try {
      // Get total users
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const totalUsers = usersSnapshot.size;

      // Get total notes
      const notesSnapshot = await getDocs(collection(db, 'notes'));
      const totalNotes = notesSnapshot.size;

      // Calculate total likes
      let totalLikes = 0;
      notesSnapshot.forEach((doc) => {
        const noteData = doc.data();
        totalLikes += noteData.likes || 0;
      });

      const visitorsDoc = await getDoc(doc(db, "stats", "visitors"));
      const totalVisitors = visitorsDoc.exists() ? visitorsDoc.data().count : 0;

      setStats({
        totalUsers,
        totalNotes,
        totalLikes,
        totalVisitors,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (loading) {
    return (
      <Box minH="100vh" bg="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Spinner size="xl" color="purple.500" />
          <Text>Loading community data...</Text>
        </VStack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box minH="100vh" bg="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" display="flex" alignItems="center" justifyContent="center">
        <Alert status="error" maxW="md">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  const cards = [
    {
      icon: FaUsers,
      value: stats.totalUsers,
      label: "Total Contributors",
      bg: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
    },
    {
      icon: FaFileAlt,
      value: stats.totalNotes,
      label: "Notes Contributed",
      bg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    },
    {
      icon: FaThumbsUp,
      value: stats.totalLikes,
      label: "Total Likes",
      bg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    },
    {
      icon: FaGlobe,
      value: stats.totalVisitors,
      label: "Total Users",
      bg: "linear-gradient(135deg, #000000 0%, #434343 100%)",
    },
  ];

  return (
    <Container maxW="container.xl" py={[8, 9, 9]} mt={[2, 2, 3]} px={[2, 3, 5]}
    >
      <SidebarAdLeft
          numberOfAds={6}
          adSlots={['4333835944', '9478180943','8042079841']}
          position="left"
        />
      <FloatingStars />

      <Container maxW="7xl" py={10}>
        <VStack spacing={10}>
          {/* Header */}
          <Box textAlign="center" position="relative">
            <Heading
              size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl", xl: "3xl" }}
              bgGradient="linear(to-r, #667eea, #764ba2)"
              bgClip="text"
              mb={4}
            // animation={`${float} 4s ease-in-out infinite`}
            >
              🚀 Community Rankings
            </Heading>
            <Text
              fontSize="lg"
              color="gray.600"
              maxW="2xl"
              mx="auto"
            >
              Discover our top contributors and most beloved community members in this cosmic journey of knowledge sharing!
            </Text>
          </Box>

          {/* Stats Cards */}
          <Box w="full" px={{ base: 4, md: 12, lg: 12 }} >
            <Grid
              templateColumns={{
                base: "1fr",                  // Stack vertically on small screens
                md: "repeat(2, 250px)",       // 2 fixed-width columns on medium screens
                lg: "repeat(4, 180px)"        // 4 fixed-width columns on large screens
              }}
              gap={6}
              justifyContent="center"
              w="full">
              {cards.map((card, index) => (
                <GridItem key={index}>
                  <Card
                    bg={card.bg}
                    color="white"
                    textAlign="center"
                    p={3}
                    borderRadius="2xl"
                    boxShadow="xl"
                    _hover={{ transform: "translateY(-5px)", transition: "all 0.3s" }}
                  >
                    <Icon as={card.icon} fontSize="3xl" mb={2} />
                    <Text fontSize="2xl" fontWeight="bold">{card.value}</Text>
                    <Text>{card.label}</Text>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Box>

          {/* Ranking Tables */}
          <VStack spacing={8} px={{ base: 4, md: 12, lg: 12 }} w="full">
            <RankingTable
              title="🏆 Top Contributors"
              users={users}
              sortBy="contributions"
              icon={FaTrophy}
            />

            <RankingTable
              title="⭐ Most Popular Users"
              users={users}
              sortBy="totalLikes"
              icon={FaStar}
            />
          </VStack>

        </VStack>
      </Container>
      <SidebarAdRight
        numberOfAds={6}
        adSlots={['3152616213', '3253352242', '7001025560']}
        position="right"
      />
    </Container>
  );
}