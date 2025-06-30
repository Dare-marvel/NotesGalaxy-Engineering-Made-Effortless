import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  ModalFooter,
  useDisclosure,
  Input,
  Badge,
  Flex,
  Spacer,
  Select,
} from '@chakra-ui/react';
import subjectsList from '../../config/subjectsList';
import QUESTIONS from './constants/QuestionsList';

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

// Space puzzles
const SPACE_PUZZLES = [
  {
    question: "How many planets are in our solar system?",
    answer: "8",
    hint: "Pluto was reclassified in 2006"
  },
  {
    question: "What is the closest star to Earth?",
    answer: "sun",
    hint: "It's the center of our solar system"
  },
  {
    question: "How many moons does Mars have?",
    answer: "2",
    hint: "Named Phobos and Deimos"
  },
  {
    question: "What galaxy do we live in?",
    answer: "milky way",
    hint: "Named after its appearance from Earth"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "jupiter",
    hint: "It's a gas giant with a great red spot"
  },
  {
    question: "How long does it take Earth to orbit the Sun?",
    answer: "365",
    hint: "Number of days in a year"
  }
];

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const SpaceTetris = () => {
  const [board, setBoard] = useState(() =>
    Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(0))
  );
  const [currentPiece, setCurrentPiece] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [currentPosition, setCurrentPosition] = useState({ x: 4, y: 0 });
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [nextPiece, setNextPiece] = useState(null);
  const [dropTime, setDropTime] = useState(1000);

  // Puzzle state
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [puzzleAnswer, setPuzzleAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
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
        duration: 4000,
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
      setLines(prev => prev + linesCleared);
      setLevel(Math.floor(lines / 10) + 1);

      // Trigger puzzle every 3 lines cleared
      if ((lines + linesCleared) % 3 === 0) {
        triggerPuzzle();
      }

      toast({
        title: `${linesCleared} line${linesCleared > 1 ? 's' : ''} cleared!`,
        description: `+${points} points`,
        status: 'success',
        duration: 1000,
      });
    }

    return newBoard;
  }, [level, lines, updateHighScore, toast]);

  const getAllQuestions = () => {
    if (selectedSubject === "All Subjects") {
      return Object.values(QUESTIONS).flat();
    }
    return QUESTIONS[selectedSubject] || [];
  };

  const getRandomQuestion = () => {
    const availableQuestions = getAllQuestions();
    if (availableQuestions.length === 0) {
      // Fallback to math questions if selected subject has no questions
      return QUESTIONS["Mathematics"][0];
    }
    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  };

  // Trigger space puzzle
  const triggerPuzzle = () => {
    const randomPuzzle = getRandomQuestion();
    setCurrentPuzzle(randomPuzzle);
    setPuzzleAnswer('');
    setShowHint(false);
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
      });

      onClose();
      setGameRunning(true);
    } else {
      toast({
        title: "Wrong Answer ❌",
        description: "Try again next time!",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }

    setCurrentPuzzle(null);
    setGameRunning(true);
    onClose();
  };

  // Handle puzzle answer
  // const handlePuzzleSubmit = () => {
  //   if (puzzleAnswer.toLowerCase().trim() === currentPuzzle.answer.toLowerCase()) {
  //     setPuzzlesSolved(prev => prev + 1);
  //     const bonusPoints = 500;
  //     setScore(prev => {
  //       const newScore = prev + bonusPoints;
  //       updateHighScore(newScore);
  //       return newScore;
  //     });
  //     setDropTime(prev => Math.max(prev - 50, 100)); // Speed up game

  //     toast({
  //       title: 'Correct!',
  //       description: `Puzzle solved! +${bonusPoints} bonus points and faster gameplay!`,
  //       status: 'success',
  //       duration: 1000,
  //     });

  //     onClose();
  //     setGameRunning(true);
  //   } else {
  //     toast({
  //       title: 'Incorrect',
  //       description: 'Try again or use the hint!',
  //       status: 'error',
  //       duration: 1000,
  //     });
  //   }
  // };

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
          duration: 5000,
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

  // Start game
  const startGame = () => {
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
    setDropTime(1000);
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
      // p={4}
      py={{ base: 10, md: 10, lg: 12 }}
      color="black"
    >
      <VStack spacing={4} pt={{ base: 8, md: 6, lg: 8 }} >
        {/* <Text fontSize="4xl" fontWeight="bold" textAlign="center" color="purple.600">
          🚀 SPACE TETRIS 🌌
        </Text> */}

        <HStack spacing={8} align="start">
          {/* Game Board */}
          <VStack>
            <Box
              border="2px solid"
              borderColor="purple.500"
              bg="rgba(0,0,0,0.05)"
              p={2}
              borderRadius="md"
              boxShadow="0 0 20px rgba(128,90,213,0.3)"
            >
              <Grid templateColumns={`repeat(${BOARD_WIDTH}, 1fr)`} gap={0.5}>
                {displayBoard.map((row, y) =>
                  row.map((cell, x) => (
                    <GridItem
                      key={`${y}-${x}`}
                      w="20px"
                      h="20px"
                      bg={cell || 'rgba(0,0,0,0.1)'}
                      border="1px solid rgba(0,0,0,0.2)"
                      borderRadius="sm"
                    />
                  ))
                )}
              </Grid>
            </Box>

            {/* Controls */}
            <VStack spacing={2}>
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

          {/* Side Panel */}
          <VStack spacing={4} align="stretch" minW="200px">
            {/* Game Stats */}
            <Box
              bg="rgba(0,0,0,0.05)"
              p={4}
              borderRadius="md"
              border="1px solid rgba(0,0,0,0.2)"
            >
              <Text fontSize="lg" fontWeight="bold" mb={2} color="purple.600">
                MISSION STATS
              </Text>
              <VStack align="stretch" spacing={1}>
                <Flex>
                  <Text>Score:</Text>
                  <Spacer />
                  <Text fontWeight="bold">{score.toLocaleString()}</Text>
                </Flex>
                <Flex>
                  <Text>High Score:</Text>
                  <Spacer />
                  <Text fontWeight="bold" color="gold">{highScore.toLocaleString()}</Text>
                </Flex>
                <Flex>
                  <Text>Level:</Text>
                  <Spacer />
                  <Text fontWeight="bold">{level}</Text>
                </Flex>
                <Flex>
                  <Text>Lines:</Text>
                  <Spacer />
                  <Text fontWeight="bold">{lines}</Text>
                </Flex>
                <Flex>
                  <Text>Puzzles:</Text>
                  <Spacer />
                  <Badge colorScheme="purple">{puzzlesSolved}</Badge>
                </Flex>
              </VStack>
            </Box>

            {/* Subject Selection */}
            <Box w={{ base: "full", md: "400px" }}>
              <Text mb={2} fontWeight="medium">Select Subject:</Text>
              <Select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                disabled={gameRunning}
              >
                {subjectsList.map((subject) => (
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
                p={4}
                borderRadius="md"
                border="1px solid rgba(0,0,0,0.2)"
              >
                <Text fontSize="md" fontWeight="bold" mb={2} color="purple.600">
                  NEXT PIECE
                </Text>
                <Grid templateColumns={`repeat(4, 1fr)`} gap={0.5} w="60px">
                  {Array(4).fill().map((_, y) =>
                    Array(4).fill().map((_, x) => {
                      const cell = nextPiece.shape[y] && nextPiece.shape[y][x];
                      return (
                        <GridItem
                          key={`${y}-${x}`}
                          w="12px"
                          h="12px"
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
                  size="lg"
                  onClick={startGame}
                  leftIcon={<Text>🚀</Text>}
                >
                  START MISSION
                </Button>
              )}

              {gameRunning && (
                <Button
                  colorScheme="red"
                  size="md"
                  onClick={() => {
                    setGameRunning(false);
                    setGameOver(true);
                  }}
                >
                  ABORT MISSION
                </Button>
              )}

              {gameOver && (
                <Button
                  colorScheme="blue"
                  size="lg"
                  onClick={startGame}
                  leftIcon={<Text>🔄</Text>}
                >
                  NEW MISSION
                </Button>
              )}
            </VStack>
          </VStack>
        </HStack>
      </VStack>

      {/* Puzzle Modal */}
      <Modal isOpen={isOpen} onClose={() => { }} closeOnOverlayClick={false}>
        <ModalOverlay  />
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
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" textAlign="center" >
                  {currentPuzzle.question}
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3} w="full">
                  {currentPuzzle.options.map((option, index) => (
                    <GridItem key={index}>
                      <Button
                        w="full"
                        minH="12"
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => handleAnswerQuestion(index)}
                        whiteSpace="normal"
                        textAlign="center"
                        fontSize={{ base: "sm", md: "md" }}
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
    </Box>
  );
};

export default SpaceTetris;