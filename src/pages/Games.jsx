import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Card,
  CardBody,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import SidebarAd from '../components/GoogleAds/SidebarAd';

import { usePageMeta } from '../hooks/usePageMeta';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

// Custom Icons using simple SVG paths
const SnakeIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path
      d="M10 30 Q20 20, 30 30 Q40 40, 50 30"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="48" cy="32" r="3" fill="currentColor" />
    <circle cx="45" cy="28" r="1.5" fill="currentColor" />
  </svg>
);

const TetrisIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="15" y="15" width="10" height="10" fill="currentColor" />
    <rect x="25" y="15" width="10" height="10" fill="currentColor" />
    <rect x="35" y="15" width="10" height="10" fill="currentColor" />
    <rect x="25" y="25" width="10" height="10" fill="currentColor" />
    <rect x="10" y="35" width="10" height="10" fill="currentColor" />
    <rect x="20" y="35" width="10" height="10" fill="currentColor" />
    <rect x="30" y="35" width="10" height="10" fill="currentColor" />
    <rect x="40" y="35" width="10" height="10" fill="currentColor" />
  </svg>
);

const PongIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    {/* Left Paddle */}
    <rect x="5" y="20" width="4" height="20" fill="currentColor" />

    {/* Right Paddle */}
    <rect x="51" y="25" width="4" height="20" fill="currentColor" />

    {/* Ball */}
    <circle cx="30" cy="30" r="3" fill="currentColor" />

    {/* Motion Trail (optional for style) */}
    <circle cx="25" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="20" cy="26" r="1" fill="currentColor" opacity="0.4" />
  </svg>
);


// const ComingSoonIcon = () => (
//   <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
//     <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
//     <text x="30" y="35" textAnchor="middle" fontSize="20" fill="currentColor">?</text>
//   </svg>
// );

const GameCard = ({ game, index }) => {
  usePageMeta(
    "Gamified Learning Experience",
    "Level up your engineering skills with Notes-Galaxy’s gamified learning experience! Play Snake, Tetris, and Pong with an educational twist—where mastering concepts is just one move away."
  );
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)');
  const hoverBg = useColorModeValue('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)');

  const handleClick = () => {
    if (game.slug) { // Assuming `game.slug` is the unique identifier (e.g., "chess", "sudoku")
      navigate(`/${game.slug}`); // Relative navigation
    }
  };

  return (
    <Card
      bg={isHovered ? hoverBg : cardBg}
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor={game.borderColor}
      borderRadius="xl"
      cursor="pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="all 0.3s ease"
      transform={isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'}
      boxShadow={isHovered ? `0 20px 40px ${game.glowColor}40` : `0 8px 20px ${game.glowColor}20`}
      _hover={{
        boxShadow: `0 20px 40px ${game.glowColor}60`,
      }}
      position="relative"
      overflow="hidden"
      minH="200px"
      animation={`${float} 6s ease-in-out infinite`}
      animationDelay={`${index * 0.5}s`}
    >
      {/* Animated background pattern */}
      <Box
        position="absolute"
        top="-50%"
        left="-50%"
        right="-50%"
        bottom="-50%"
        background={`radial-gradient(circle, ${game.glowColor}15 0%, transparent 70%)`}
        animation={`${pulse} 4s ease-in-out infinite`}
        animationDelay={`${index * 0.8}s`}
        pointerEvents="none"
      />

      {/* Sparkle effects */}
      <Box
        position="absolute"
        top="10px"
        right="10px"
        width="4px"
        height="4px"
        bg={game.accentColor}
        borderRadius="full"
        animation={`${sparkle} 2s ease-in-out infinite`}
        animationDelay="0s"
      />
      <Box
        position="absolute"
        top="30px"
        left="15px"
        width="3px"
        height="3px"
        bg={game.secondaryColor}
        borderRadius="full"
        animation={`${sparkle} 2s ease-in-out infinite`}
        animationDelay="0.7s"
      />
      <Box
        position="absolute"
        bottom="20px"
        right="20px"
        width="2px"
        height="2px"
        bg={game.accentColor}
        borderRadius="full"
        animation={`${sparkle} 2s ease-in-out infinite`}
        animationDelay="1.4s"
      />

      <CardBody p={6}>
        <VStack spacing={4} align="center" justify="center" minH="150px">
          <Box
            color={game.primaryColor}
            transform={isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'}
            transition="all 0.3s ease"
            filter={isHovered ? `drop-shadow(0 0 20px ${game.glowColor})` : 'none'}
          >
            {game.icon}
          </Box>

          <VStack spacing={2} align="center">
            <Heading
              size="md"
              color={game.primaryColor}
              textAlign="center"
              fontWeight="bold"
              textShadow={isHovered ? `0 0 20px ${game.glowColor}` : 'none'}
              transition="all 0.3s ease"
            >
              {game.name}
            </Heading>

            {/* {game.status && (
              <Badge
                colorScheme={game.status === 'Available' ? 'green' : 'orange'}
                variant="subtle"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="xs"
                bg={game.status === 'Available' ? 'green.100' : 'orange.100'}
                color={game.status === 'Available' ? 'green.800' : 'orange.800'}
              >
                {game.status}
              </Badge>
            )} */}

            {isHovered && game.description && (
              <Text
                fontSize="sm"
                color="gray.600"
                textAlign="center"
                opacity={isHovered ? 1 : 0}
                transform={isHovered ? 'translateY(0)' : 'translateY(10px)'}
                transition="all 0.3s ease"
                mt={2}
              >
                {game.description}
              </Text>
            )}
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

const Games = () => {
  const games = [
    {
      name: 'Snake Game',
      icon: <SnakeIcon />,
      primaryColor: '#00ff88',
      secondaryColor: '#00cc66',
      accentColor: '#88ffbb',
      glowColor: '#00ff88',
      borderColor: 'rgba(0, 255, 136, 0.3)',
      status: 'Available',
      description: 'Classic snake game with modern twist',
      slug: 'snake-game'
    },
    {
      name: 'Tetris',
      icon: <TetrisIcon />,
      primaryColor: '#8b5cf6',
      secondaryColor: '#7c3aed',
      accentColor: '#c4b5fd',
      glowColor: '#8b5cf6',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      status: 'Available',
      description: 'Stack blocks and clear lines',
      slug: 'tetris-game'
    },
    {
      name: 'Pong',
      icon: <PongIcon />,
      primaryColor: '#ec4899',
      secondaryColor: '#db2777',
      accentColor: '#f9a8d4',
      glowColor: '#ec4899',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      status: 'Available',
      description: 'Classic paddle ball game',
      slug: 'pong-game'
    },

  ];

  return (
    <Box
      minH="100vh"
      bg="white"
      position="relative"
      overflow="hidden"
    >
      <SidebarAd
        position="left"
        adSlot="4333835944"
      />
      {/* Animated background elements */}
      <Box
        position="fixed"
        top="10%"
        left="5%"
        width="300px"
        height="300px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)"
        animation={`${pulse} 8s ease-in-out infinite`}
        pointerEvents="none"
      />
      <Box
        position="fixed"
        top="60%"
        right="10%"
        width="200px"
        height="200px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)"
        animation={`${pulse} 6s ease-in-out infinite`}
        animationDelay="2s"
        pointerEvents="none"
      />
      <Box
        position="fixed"
        bottom="20%"
        left="20%"
        width="150px"
        height="150px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)"
        animation={`${pulse} 10s ease-in-out infinite`}
        animationDelay="4s"
        pointerEvents="none"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          position="fixed"
          width="2px"
          height="2px"
          bg={`hsl(${Math.random() * 360}, 70%, 60%)`}
          borderRadius="full"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          animation={`${sparkle} ${2 + Math.random() * 3}s ease-in-out infinite`}
          animationDelay={`${Math.random() * 2}s`}
          pointerEvents="none"
        />
      ))}

      <Container maxW="7xl" py={{ base: 10, md: 12, lg: 12 }} position="relative" zIndex={1}>
        <VStack spacing={12} align="center">
          <VStack spacing={4} textAlign="center" mt={{ base: 8, md: 6, lg: 8 }}>
            <Heading
              // size="2xl"
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', xl: '5xl' }}
              bgGradient="linear(to-r, #8b5cf6, #06b6d4, #00ff88)"
              bgClip="text"
              fontWeight="extrabold"
              textShadow="0 0 40px rgba(139, 92, 246, 0.3)"
              animation={`${pulse} 3s ease-in-out infinite`}
            >
              🚀 Cosmic Games Hub
            </Heading>
          </VStack>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 220px)",
              md: "repeat(2, 220px)",
              lg: "repeat(3, 210px)",
              xl: "repeat(3, 300px)",
            }}
            gap={6}
            justifyContent="center"
            w="full">
            {games.map((game, index) => (
              <GridItem key={index}>
                <Box
                  key={game.id}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <GameCard key={game.name} game={game} index={index} />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
      <SidebarAd
        position="right"
        adSlot="3152616213"
      />
    </Box>
  );
};

export default Games;