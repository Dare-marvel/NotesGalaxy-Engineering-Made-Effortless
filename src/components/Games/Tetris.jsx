import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Badge,
  Flex,
  Spacer,
  Select,
} from '@chakra-ui/react';
import subjectsList from '../../config/subjectsList';

import SidebarAd from '../GoogleAds/SidebarAd';
import BottomAd from '../GoogleAds/BottomAd'
import { usePageMeta } from '../../hooks/usePageMeta';

// Tetris pieces
const TETROMINOS = {
  I: {
    shape: [[1, 1, 1, 1]],
    color: '#00f5ff',
    name: 'I-piece'
  },
  O: {
    shape: [[1, 1], [1, 1]],
    color: '#ffff00',
    name: 'O-piece'
  },
  T: {
    shape: [[0, 1, 0], [1, 1, 1]],
    color: '#800080',
    name: 'T-piece'
  },
  S: {
    shape: [[0, 1, 1], [1, 1, 0]],
    color: '#00ff00',
    name: 'S-piece'
  },
  Z: {
    shape: [[1, 1, 0], [0, 1, 1]],
    color: '#ff0000',
    name: 'Z-piece'
  },
  J: {
    shape: [[1, 0, 0], [1, 1, 1]],
    color: '#0000ff',
    name: 'J-piece'
  },
  L: {
    shape: [[0, 0, 1], [1, 1, 1]],
    color: '#ffa500',
    name: 'L-piece'
  }
};

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const SpaceTetris = () => {
  usePageMeta(
    "Tetris Game",
    "Play Tetris, the classic puzzle game, in your browser. Solve Engineering Problems to score points and level up your knowledge. Perfect for Engineering students looking to combine fun and learning.",
  );
  const [board, setBoard] = useState(() =>
    Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(0))
  );
  const [currentPiece, setCurrentPiece] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("Problem Solving through Imperative Programming Lab in C (PSIPL)");
  const [currentPosition, setCurrentPosition] = useState({ x: 4, y: 0 });
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [nextPiece, setNextPiece] = useState(null);
  const [dropTime, setDropTime] = useState(500);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  // Puzzle state
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [puzzlesSolved, setPuzzlesSolved] = useState(0);

  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('tetrisHighScore')) || 0;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const gameLoopRef = useRef();

  // Update high score function
  const updateHighScore = useCallback((newScore) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem('tetrisHighScore', newScore.toString());

      toast({
        title: '🎉 NEW HIGH SCORE!',
        description: `Amazing! You scored ${newScore.toLocaleString()} points!`,
        status: 'success',
        duration: 1200,
        isClosable: true,
        position: 'top-right',
      });
    }
  }, [highScore, toast]);

  // Generate random piece
  const generatePiece = useCallback(() => {
    const pieces = Object.keys(TETROMINOS);
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    return {
      shape: TETROMINOS[randomPiece].shape,
      color: TETROMINOS[randomPiece].color,
      name: TETROMINOS[randomPiece].name
    };
  }, []);

  // Rotate piece
  const rotatePiece = (piece) => {
    const rotated = piece[0].map((_, index) =>
      piece.map(row => row[index]).reverse()
    );
    return rotated;
  };

  // Check collision
  const checkCollision = (piece, position, boardState = board) => {
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x]) {
          const newX = position.x + x;
          const newY = position.y + y;

          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
            return true;
          }

          if (newY >= 0 && boardState[newY][newX]) {
            return true;
          }
        }
      }
    }
    return false;
  };

  // Place piece on board
  const placePiece = useCallback(() => {
    const newBoard = board.map(row => [...row]);

    for (let y = 0; y < currentPiece.shape.length; y++) {
      for (let x = 0; x < currentPiece.shape[y].length; x++) {
        if (currentPiece.shape[y][x]) {
          const boardY = currentPosition.y + y;
          const boardX = currentPosition.x + x;

          if (boardY >= 0) {
            newBoard[boardY][boardX] = currentPiece.color;
          }
        }
      }
    }

    setBoard(newBoard);
    return newBoard;
  }, [board, currentPiece, currentPosition]);

  // Clear completed lines
  // Clear completed lines
  const clearLines = useCallback((boardState) => {
    let linesCleared = 0;
    const newBoard = boardState.filter(row => {
      if (row.every(cell => cell !== 0)) {
        linesCleared++;
        return false;
      }
      return true;
    });

    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }

    if (linesCleared > 0) {
      const points = linesCleared * 100 * level;
      setScore(prev => {
        const newScore = prev + points;
        updateHighScore(newScore);
        return newScore;
      });

      // Store the previous lines count before updating
      const previousLines = lines;
      const newTotalLines = lines + linesCleared;

      setLines(newTotalLines);
      setLevel(Math.floor(newTotalLines / 10) + 1);

      // Check if we crossed a multiple of 3 threshold
      // This handles cases where user clears multiple lines at once
      const previousThreshold = Math.floor(previousLines / 3);
      const newThreshold = Math.floor(newTotalLines / 3);

      if (newThreshold > previousThreshold) {
        triggerPuzzle();
      }

      toast({
        title: `${linesCleared} line${linesCleared > 1 ? 's' : ''} cleared!`,
        description: `+${points} points`,
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top-right',
      });
    }

    return newBoard;
  }, [level, lines, updateHighScore, toast]);


  const getRandomQuestion = () => {
    // const availableQuestions = getAllQuestions();
    if (currentQuestions.length === 0) {
      // Fallback to math questions if selected subject has no questions
      return {
        question: "Fallback: What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        category: "Fallback"
      };
    }
    return currentQuestions[Math.floor(Math.random() * currentQuestions.length)];
  };

  // Trigger space puzzle
  const triggerPuzzle = () => {
    const randomPuzzle = getRandomQuestion();
    setCurrentPuzzle(randomPuzzle);
    setGameRunning(false);
    onOpen();
  };

  const handleAnswerQuestion = (selectedIndex) => {
    const isCorrect = selectedIndex === currentPuzzle.correct;

    if (isCorrect) {
      setPuzzlesSolved(prev => prev + 1);
      const bonusPoints = 500;
      setScore(prev => {
        const newScore = prev + bonusPoints;
        updateHighScore(newScore);
        return newScore;
      });
      setDropTime(prev => Math.max(prev - 50, 100)); // Speed up game


      toast({
        title: 'Correct!',
        description: `Puzzle solved! +${bonusPoints} bonus points and faster gameplay!`,
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'top-right',
      });

      onClose();
      setGameRunning(true);
    } else {
      toast({
        title: "Wrong Answer ❌",
        description: "Try again next time!",
        status: "error",
        duration: 1000,
        position: 'top-right',
        isClosable: true,
      });
    }

    setCurrentPuzzle(null);
    setGameRunning(true);
    onClose();
  };

  // Move piece
  const movePiece = useCallback((direction) => {
    if (!currentPiece || !gameRunning) return;

    const newPosition = { ...currentPosition };

    switch (direction) {
      case 'left':
        newPosition.x -= 1;
        break;
      case 'right':
        newPosition.x += 1;
        break;
      case 'down':
        newPosition.y += 1;
        break;
    }

    if (!checkCollision(currentPiece.shape, newPosition)) {
      setCurrentPosition(newPosition);
    } else if (direction === 'down') {
      // Piece has landed
      const newBoard = placePiece();
      const clearedBoard = clearLines(newBoard);
      setBoard(clearedBoard);

      // Check game over
      if (currentPosition.y <= 1) {
        setGameOver(true);
        setGameRunning(false);

        // Final high score check
        updateHighScore(score);

        toast({
          title: 'Game Over!',
          description: `Final Score: ${score} | Puzzles Solved: ${puzzlesSolved}`,
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        });
        return;
      }

      // Spawn new piece
      setCurrentPiece(nextPiece);
      setNextPiece(generatePiece());
      setCurrentPosition({ x: 4, y: 0 });
    }
  }, [currentPiece, currentPosition, gameRunning, placePiece, clearLines, nextPiece, generatePiece, score, puzzlesSolved, updateHighScore, toast]);

  // Rotate current piece
  const rotateCurrent = useCallback(() => {
    if (!currentPiece || !gameRunning) return;

    const rotated = rotatePiece(currentPiece.shape);
    if (!checkCollision(rotated, currentPosition)) {
      setCurrentPiece(prev => ({ ...prev, shape: rotated }));
    }
  }, [currentPiece, currentPosition, gameRunning]);

  // Game loop
  useEffect(() => {
    if (gameRunning && !gameOver) {
      gameLoopRef.current = setInterval(() => {
        movePiece('down');
      }, dropTime);
    } else {
      clearInterval(gameLoopRef.current);
    }

    return () => clearInterval(gameLoopRef.current);
  }, [gameRunning, gameOver, movePiece, dropTime]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameRunning) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          movePiece('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          movePiece('right');
          break;
        case 'ArrowDown':
          e.preventDefault();
          movePiece('down');
          break;
        case 'ArrowUp':
        case ' ':
          e.preventDefault();
          rotateCurrent();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameRunning, movePiece, rotateCurrent]);

  const loadSubjectQuestions = async (subject) => {
    const subjectSlug = subject.replace(/\s+/g, '').replace(/[^\w]/g, '');
    const questionSet = Math.floor(Math.random() * 4) + 1;
    const module = await import(`../../question-files/${subjectSlug}-${questionSet}.js`);
    return module.default || [];
  };

  // Start game
  const startGame = async () => {
    try {
      const questions = await loadSubjectQuestions(selectedSubject);
      setCurrentQuestions(questions);
    }
    catch (error) {
      console.error("Error loading questions:", error);
      toast({
        title: "Error loading questions",
        description: "Please try a different subject.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }

    setBoard(Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(0)));
    setCurrentPiece(generatePiece());
    setNextPiece(generatePiece());
    setCurrentPosition({ x: 4, y: 0 });
    setScore(0);
    setLevel(1);
    setLines(0);
    setGameRunning(true);
    setGameOver(false);
    setPuzzlesSolved(0);
    setDropTime(500);
  };


  // Render board with current piece
  const renderBoard = () => {
    const displayBoard = board.map(row => [...row]);

    // Add current piece to display
    if (currentPiece) {
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x]) {
            const boardY = currentPosition.y + y;
            const boardX = currentPosition.x + x;

            if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
              displayBoard[boardY][boardX] = currentPiece.color;
            }
          }
        }
      }
    }

    return displayBoard;
  };

  const displayBoard = renderBoard();

  return (
    <Box
      minH="100vh"
      bg="white"
      pt={{ base: 10, md: 10, lg: 12 }}
      px={{ base: 2, md: 4, lg: 6 }}
      color="black"
    >
      <SidebarAd
        position="left"
        adSlot="4333835944"
      />
      <VStack spacing={{ base: 2, md: 6, lg: 8 }} pt={{ base: 2, md: 6, lg: 8 }}>
        {/* Mobile Top Section - Stats and Subject */}
        <VStack
          pt={{ base: 4, sm: 3 }}
          mt={{ base: 2 }}
          spacing={2}
          w="full"
          display={{ base: "flex", lg: "none" }}>
          {/* Compact Mission Stats for Mobile */}
          <Box
            bg="rgba(0,0,0,0.05)"
            borderRadius="md"
            border="2px solid rgba(164, 28, 182, 0.2)"
            w="full"
            maxW="400px"
          >
            <Text fontSize="sm" fontWeight="bold" mb={1} color="purple.600" textAlign="center">
              MISSION STATS
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={1} fontSize="xs">
              <VStack spacing={0}>
                <Text fontWeight="bold">{score.toLocaleString()}</Text>
                <Text opacity={0.7}>Score</Text>
              </VStack>
              <VStack spacing={0}>
                <Text fontWeight="bold" color="gold">{highScore.toLocaleString()}</Text>
                <Text opacity={0.7}>High</Text>
              </VStack>
              <VStack spacing={0}>
                <Text fontWeight="bold">{level}</Text>
                <Text opacity={0.7}>Level</Text>
              </VStack>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap={1} fontSize="xs" mt={1}>
              <VStack spacing={0}>
                <Text fontWeight="bold">{lines}</Text>
                <Text opacity={0.7}>Lines</Text>
              </VStack>
              <VStack spacing={0}>
                <Badge colorScheme="purple" fontSize="xs">{puzzlesSolved}</Badge>
                <Text opacity={0.7}>Puzzles</Text>
              </VStack>
            </Grid>
          </Box>

          {/* Subject Selection for Mobile */}
          <Box w="full" maxW="400px">
            <Text mb={1} fontWeight="medium" fontSize="sm" textAlign="center">
              Subject:
            </Text>
            <Select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              disabled={gameRunning}
              size="sm"
            >
              {subjectsList.slice(0, -1).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}

            </Select>
          </Box>
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          spacing={0}
          gap={{ base: 3, md: 8, lg: 8 }}
          align={{ base: "center", lg: "start" }}
          w="full"
          justify="center"
        >
          {/* Game Board */}
          <VStack spacing={{ base: 2, md: 4 }}>
            <Box
              border="2px solid"
              borderColor="purple.500"
              bg="rgba(0,0,0,0.05)"
              p={{ base: 1, md: 2 }}
              borderRadius="md"
              boxShadow="0 0 20px rgba(128,90,213,0.3)"
              maxW="fit-content"
            >
              <Grid
                templateColumns={`repeat(${BOARD_WIDTH}, 1fr)`}
                gap={{ base: "1px", md: "2px" }}
              >
                {displayBoard.map((row, y) =>
                  row.map((cell, x) => (
                    <GridItem
                      key={`${y}-${x}`}
                      w={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
                      h={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
                      bg={cell || 'rgba(0,0,0,0.1)'}
                      border="1px solid rgba(0,0,0,0.2)"
                      borderRadius="sm"
                    />
                  ))
                )}
              </Grid>
            </Box>

            {/* Mobile Controls */}
            <VStack spacing={2} display={{ base: "flex", lg: "none" }}>
              <HStack spacing={2}>
                <Button
                  size="sm"
                  colorScheme="cyan"
                  onClick={() => movePiece('left')}
                  isDisabled={!gameRunning}
                  minW="45px"
                  h="45px"
                >
                  ←
                </Button>
                <VStack spacing={1}>
                  <Button
                    size="sm"
                    colorScheme="purple"
                    onClick={rotateCurrent}
                    isDisabled={!gameRunning}
                    minW="45px"
                    h="35px"
                  >
                    ↻
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="cyan"
                    onClick={() => movePiece('down')}
                    isDisabled={!gameRunning}
                    minW="45px"
                    h="45px"
                  >
                    ↓
                  </Button>
                </VStack>
                <Button
                  size="sm"
                  colorScheme="cyan"
                  onClick={() => movePiece('right')}
                  isDisabled={!gameRunning}
                  minW="45px"
                  h="45px"
                >
                  →
                </Button>
              </HStack>
              <Text fontSize="xs" textAlign="center" opacity={0.7}>
                Touch controls
              </Text>
            </VStack>

            {/* Desktop Controls */}
            <VStack spacing={2} display={{ base: "none", lg: "flex" }}>
              <HStack>
                <Button
                  size="sm"
                  colorScheme="cyan"
                  onClick={() => movePiece('left')}
                  isDisabled={!gameRunning}
                >
                  ←
                </Button>
                <Button
                  size="sm"
                  colorScheme="cyan"
                  onClick={() => movePiece('down')}
                  isDisabled={!gameRunning}
                >
                  ↓
                </Button>
                <Button
                  size="sm"
                  colorScheme="cyan"
                  onClick={() => movePiece('right')}
                  isDisabled={!gameRunning}
                >
                  →
                </Button>
                <Button
                  size="sm"
                  colorScheme="purple"
                  onClick={rotateCurrent}
                  isDisabled={!gameRunning}
                >
                  ↻
                </Button>
              </HStack>
              <Text fontSize="xs" textAlign="center" opacity={0.7}>
                Use arrow keys or buttons to play
              </Text>
            </VStack>
          </VStack>

          {/* Side Panel - Desktop Only Stats and Subject */}
          <VStack
            spacing={4}
            align="stretch"
            w={{ base: "full", md: "350px", lg: "280px" }}
            maxW={{ base: "400px", lg: "none" }}
            display={{ base: "flex", lg: "flex" }}
          >
            {/* Game Stats - Desktop Only */}
            <Box
              bg="rgba(0,0,0,0.05)"
              p={{ base: 3, md: 4 }}
              borderRadius="md"
              border="1px solid rgba(0,0,0,0.2)"
              display={{ base: "none", lg: "block" }}
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                mb={2}
                color="purple.600"
              >
                MISSION STATS
              </Text>
              <VStack align="stretch" spacing={1}>
                <Flex>
                  <Text fontSize={{ base: "sm", md: "md" }}>Score:</Text>
                  <Spacer />
                  <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                    {score.toLocaleString()}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize={{ base: "sm", md: "md" }}>High Score:</Text>
                  <Spacer />
                  <Text
                    fontWeight="bold"
                    color="gold"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {highScore.toLocaleString()}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize={{ base: "sm", md: "md" }}>Level:</Text>
                  <Spacer />
                  <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                    {level}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize={{ base: "sm", md: "md" }}>Lines:</Text>
                  <Spacer />
                  <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                    {lines}
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize={{ base: "sm", md: "md" }}>Puzzles:</Text>
                  <Spacer />
                  <Badge colorScheme="purple" fontSize={{ base: "xs", md: "sm" }}>
                    {puzzlesSolved}
                  </Badge>
                </Flex>
              </VStack>
            </Box>

            {/* Subject Selection - Desktop Only */}
            <Box display={{ base: "none", lg: "block" }}>
              <Text
                mb={2}
                fontWeight="medium"
                fontSize={{ base: "sm", md: "md" }}
              >
                Select Subject:
              </Text>
              <Select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                disabled={gameRunning}
                size={{ base: "sm", md: "md" }}
              >
                {subjectsList.slice(0, -1).map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </Select>
            </Box>

            {/* Next Piece */}
            {nextPiece && (
              <Box
                bg="rgba(0,0,0,0.05)"
                p={{ base: 3, md: 4 }}
                borderRadius="md"
                border="1px solid rgba(0,0,0,0.2)"
              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  mb={2}
                  color="purple.600"
                >
                  NEXT PIECE
                </Text>
                <Grid
                  templateColumns={`repeat(4, 1fr)`}
                  gap={{ base: "1px", md: "2px" }}
                  w={{ base: "48px", md: "60px" }}
                >
                  {Array(4).fill().map((_, y) =>
                    Array(4).fill().map((_, x) => {
                      const cell = nextPiece.shape[y] && nextPiece.shape[y][x];
                      return (
                        <GridItem
                          key={`${y}-${x}`}
                          w={{ base: "10px", md: "12px" }}
                          h={{ base: "10px", md: "12px" }}
                          bg={cell ? nextPiece.color : 'transparent'}
                          border={cell ? '1px solid rgba(0,0,0,0.3)' : 'none'}
                          borderRadius="sm"
                        />
                      );
                    })
                  )}
                </Grid>
              </Box>
            )}

            {/* Game Controls */}
            <VStack spacing={2}>
              {!gameRunning && !gameOver && (
                <Button
                  colorScheme="green"
                  size={{ base: "sm", md: "lg" }}
                  onClick={startGame}
                  leftIcon={<Text>🚀</Text>}
                  w="full"
                >
                  START MISSION
                </Button>
              )}

              {gameRunning && (
                <Button
                  colorScheme="red"
                  size={{ base: "xs", md: "md" }}
                  onClick={() => {
                    setGameRunning(false);
                    setGameOver(true);
                  }}
                  w="full"
                >
                  ABORT MISSION
                </Button>
              )}

              {gameOver && (
                <Button
                  colorScheme="blue"
                  size={{ base: "sm", md: "lg" }}
                  onClick={startGame}
                  leftIcon={<Text>🔄</Text>}
                  w="full"
                >
                  NEW MISSION
                </Button>
              )}
            </VStack>
          </VStack>
        </Flex>
      </VStack>

      {/* Puzzle Modal */}
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size="lg">
        <ModalOverlay />
        <ModalContent border="2px solid" borderColor="purple.300">
          <ModalHeader>
            <Badge colorScheme="purple" mr={2}>
              {currentPuzzle?.category}
            </Badge>
            Question Time! 🧠
          </ModalHeader>
          <ModalBody>
            {currentPuzzle && (
              <VStack spacing={4} align="stretch">
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="medium"
                  whiteSpace="pre-wrap" // Ensures \n becomes a line break
                  textAlign="center"
                >
                  {currentPuzzle.question}
                </Text>

                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3} w="full">
                  {currentPuzzle.options.map((option, index) => (
                    <GridItem key={index}>
                      <Button
                        w="full"
                        py={4} // Adds more vertical padding
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => handleAnswerQuestion(index)}
                        whiteSpace="normal" // Allows wrapping
                        textAlign="center"
                        fontSize={{ base: "sm", md: "md" }}
                        height="auto" // Allow button height to expand based on content
                      >
                        {option}
                      </Button>
                    </GridItem>
                  ))}
                </Grid>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box
        width={{ base: '90%', sm: "90%", md: '80%' }}
        textAlign="center"
        mx="auto"
        mt={8}
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

export default SpaceTetris;