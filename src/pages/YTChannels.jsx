import { useState, useMemo } from 'react';
import {
  Box,
  VStack,
  Text,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import SemesterSection from '../components/YtChannels/SemesterSection';

import SidebarAd from '../components/GoogleAds/SidebarAd';
import BottomAd from '../components/GoogleAds/BottomAd'
import { usePageMeta } from '../hooks/usePageMeta';

import ytChannelsList from '../constants/ytChannelsList';

// const SpaceBackground = () => (
//   <Box
//     position="fixed"
//     top="0"
//     left="0"
//     right="0"
//     bottom="0"
//     zIndex="-1"
//     bg="white"
//   >
//     {/* Stars */}
//     {[...Array(50)].map((_, i) => (
//       <Box
//         key={i}
//         position="absolute"
//         w="2px"
//         h="2px"
//         bg="blue.300"
//         borderRadius="50%"
//         top={`${Math.random() * 100}%`}
//         left={`${Math.random() * 100}%`}
//         opacity={Math.random() * 0.8 + 0.2}
//         animation={`twinkle ${Math.random() * 3 + 2}s infinite`}
//       />
//     ))}

//     {/* Larger stars */}
//     {[...Array(20)].map((_, i) => (
//       <Icon
//         key={i}
//         as={StarIcon}
//         position="absolute"
//         w="3"
//         h="3"
//         color="purple.300"
//         top={`${Math.random() * 100}%`}
//         left={`${Math.random() * 100}%`}
//         opacity={Math.random() * 0.6 + 0.4}
//         animation={`pulse ${Math.random() * 4 + 3}s infinite`}
//       />
//     ))}

//     <style jsx>{`
//       @keyframes twinkle {
//         0%, 100% { opacity: 0.2; }
//         50% { opacity: 1; }
//       }
//       @keyframes pulse {
//         0%, 100% { transform: scale(1); opacity: 0.4; }
//         50% { transform: scale(1.2); opacity: 1; }
//       }
//     `}</style>
//   </Box>
// );

export default function YouTubeChannelsPage() {
  usePageMeta(
    "YouTube Playlists for Engineering",
    "Discover the best YouTube playlists for B.Tech CSE students. Find curated channels and playlists for all semesters, covering subjects like Data Structures, Algorithms, Operating Systems, and more. Enhance your learning with top-notch content from experts.",
  );
  const [searchTerm, setSearchTerm] = useState('');

  // Filter subjects based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return ytChannelsList;
    }

    const filtered = {};
    Object.entries(ytChannelsList).forEach(([semester, subjects]) => {
      const filteredSubjects = subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredSubjects.length > 0) {
        filtered[semester] = filteredSubjects;
      }
    });
    return filtered;
  }, [searchTerm]);

  return (
    <Box bg="white" minH="100vh">
      {/* <SpaceBackground /> */}
      <SidebarAd
        position="left"
        adSlot="4333835944"
      />
      <Container
        maxW={{ base: "full", sm: "container.sm", md: "container.md", lg: "6xl" }}
        pt={{ base: 4, sm: 6, md: 8, lg: 10 }}
        px={{ base: 3, sm: 4, md: 12, lg: 12 }}
        position="relative"
        zIndex="1"
      >
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
          {/* Header */}
          <Box textAlign="center" mb={{ base: 4, md: 8 }} >
            <Heading
              size={{ base: "lg", sm: "xl", md: "xl", lg: "2xl", xl: "2xl" }}
              // bgGradient="linear(to-r, blue.600, purple.600)"
              color="purple.500"
              // bgClip="text"
              fontWeight="extrabold"
              mt={{ base: 7, md: 7 }}
              py={{ base: 5, md: 7 }}
              mb={{ base: 3, md: 4 }}
              px={{ base: 2, sm: 4, md: 6, lg: 12 }}
              // textShadow="0 4px 8px rgba(0,0,0,0.1)"
              lineHeight={{ base: "shorter", md: "short" }}
            >
              Best Youtube Playlists
            </Heading>

            {/* Search Bar */}
            <Box
              maxW={{ base: "full", md: "full", lg: "full" }}
              px={{ base: 2, sm: 4, md: 10, lg: 12 }}
              mx={{ base: 2, sm: 4, md: 10, lg: 12 }}
            >
              <InputGroup
                px={{ base: 2, sm: 4, md: 4, lg: 6 }}
                size={{ base: "md", md: "lg" }} >
                <InputLeftElement
                  pointerEvents="none"
                  pl={{ sm: 6, md: 5, lg: 9 }}
                  h={{ base: "40px", md: "48px" }}>
                  <SearchIcon
                    color="gray.400"
                    boxSize={{ base: "16px", md: "20px" }}
                  />
                </InputLeftElement>
                <Input
                  placeholder="Search for subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  bg="whiteAlpha.900"
                  backdropFilter="blur(10px)"
                  border="2px solid"
                  borderColor="blue.300"
                  borderRadius={{ base: "full", md: "full" }}
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  h={{ base: "40px", md: "48px" }}
                  // pl={{ base: "40px", md: "48px" }}
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
          </Box>

          {/* Content */}
          {Object.keys(filteredData).length === 0 ? (
            <Box
              textAlign="center"
              p={{ base: 6, sm: 8, md: 12 }}
              bg="whiteAlpha.800"
              backdropFilter="blur(10px)"
              borderRadius={{ base: "lg", md: "xl" }}
              border="1px solid"
              borderColor="blue.200"
              mx={{ base: 2, sm: 0 }}
            >
              <Text
                fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                color="gray.600"
                fontWeight="medium"
                mb={{ base: 2, md: 3 }}
              >
                No subjects found matching "{searchTerm}"
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.500"
                maxW={{ base: "full", md: "md" }}
                mx="auto"
              >
                Try searching with different keywords
              </Text>
            </Box>
          ) : (
            <Box px={{ base: 4, md: 10, lg: 12 }}>
              {Object.entries(filteredData).map(([semester, subjects]) => (
                <SemesterSection
                  key={semester}
                  semester={semester}
                  subjects={subjects}
                />
              ))}
            </Box>
          )}
        </VStack>

        <Box
          width={{ base: '90%', sm: "90%", md: '80%' }}
          textAlign="center"
          mx="auto"
          mt={12}
          mb={1}
          px={{ base: 4, md: 12, lg: 12 }}>
          <BottomAd />
        </Box>
      </Container>
      <SidebarAd
        position="right"
        adSlot="3152616213"
      />
    </Box>
  );
}