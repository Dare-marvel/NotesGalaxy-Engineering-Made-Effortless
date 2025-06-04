import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Badge,
  Grid,
  GridItem,
  Flex,
  Container,
  Heading,
  useToast
} from '@chakra-ui/react';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const GAME_SPEED = 300;

const QUESTIONS = [
  {
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "62"],
    correct: 1,
    category: "Math"
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2,
    category: "Geography"
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Hydrogen", "Oxygen", "Water", "Carbon"],
    correct: 2,
    category: "Science"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correct: 1,
    category: "Literature"
  },
  {
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correct: 1,
    category: "Math"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correct: 1,
    category: "Science"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3,
    category: "Geography"
  },
  {
    question: "What is 12²?",
    options: ["124", "144", "164", "184"],
    correct: 1,
    category: "Math"
  }
];

export default function EducationalSnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [level, setLevel] = useState(1);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const generateFood = useCallback(() => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const getRandomQuestion = () => {
    return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood({ x: 15, y: 15 });
    setGameOver(false);
    setGameStarted(false);
    setScore(0);
    setCurrentQuestion(null);
    setGameRunning(false);
    setLevel(1);
    setQuestionsAnswered(0);
  };

  const startGame = () => {
    resetGame();
    setGameStarted(true);
    setGameRunning(true);
  };

  const handleKeyPress = useCallback((e) => {
    if (!gameRunning || gameOver) return;
    
    e.preventDefault(); // Prevent page scrolling
    const key = e.key;

    switch (key) {
      case 'ArrowUp':
        if (direction.y !== 1) { // Prevent reverse direction
          setDirection({ x: 0, y: -1 });
        }
        break;
      case 'ArrowDown':
        if (direction.y !== -1) {
          setDirection({ x: 0, y: 1 });
        }
        break;
      case 'ArrowLeft':
        if (direction.x !== 1) {
          setDirection({ x: -1, y: 0 });
        }
        break;
      case 'ArrowRight':
        if (direction.x !== -1) {
          setDirection({ x: 1, y: 0 });
        }
        break;
      default:
        return;
    }
  }, [direction, gameRunning, gameOver]);

  useEffect(() => {
    const handleGlobalKeyPress = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        handleKeyPress(e);
      }
    };
    
    document.addEventListener('keydown', handleGlobalKeyPress);
    return () => document.removeEventListener('keydown', handleGlobalKeyPress);
  }, [handleKeyPress]);

  const handleAnswerQuestion = (selectedIndex) => {
    const isCorrect = selectedIndex === currentQuestion.correct;
    
    if (isCorrect) {
      setScore(prev => prev + (10 * level));
      setQuestionsAnswered(prev => prev + 1);
      
      // Grow snake
      setSnake(prev => [...prev, { ...prev[prev.length - 1] }]);
      
      toast({
        title: "Correct!",
        description: `+${10 * level} points`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      
      // Level up every 3 questions
      if ((questionsAnswered + 1) % 3 === 0) {
        setLevel(prev => prev + 1);
        toast({
          title: "Level Up!",
          description: `Now on level ${level + 1}`,
          status: "info",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Wrong Answer",
        description: "Try again next time!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    
    setCurrentQuestion(null);
    setGameRunning(true);
    onClose();
  };

  useEffect(() => {
    if (!gameRunning || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };
        
        head.x += direction.x;
        head.y += direction.y;
        
        // Check wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          setGameRunning(false);
          return currentSnake;
        }
        
        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          setGameRunning(false);
          return currentSnake;
        }
        
        newSnake.unshift(head);
        
        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setFood(generateFood());
          setCurrentQuestion(getRandomQuestion());
          setGameRunning(false);
          onOpen();
        } else {
          newSnake.pop();
        }
        
        return newSnake;
      });
    }, Math.max(100, GAME_SPEED - (level - 1) * 30));

    return () => clearInterval(gameLoop);
  }, [direction, food, gameRunning, gameOver, generateFood, level, onOpen]);

  return (
    <Container maxW="4xl" py={8}>
      <VStack spacing={6}>
        <Heading color="teal.500" textAlign="center">
          🐍 Educational Snake Game
        </Heading>
        
        <HStack spacing={8}>
          <Badge colorScheme="blue" fontSize="md" p={2}>
            Score: {score}
          </Badge>
          <Badge colorScheme="green" fontSize="md" p={2}>
            Level: {level}
          </Badge>
          <Badge colorScheme="purple" fontSize="md" p={2}>
            Questions: {questionsAnswered}
          </Badge>
        </HStack>

        {!gameStarted ? (
          <VStack spacing={4}>
            <Text fontSize="lg" textAlign="center" color="gray.600">
              🎮 Use arrow keys to move the snake<br/>
              🍎 Eat food to trigger educational questions<br/>
              📚 Answer correctly to grow and earn points!
            </Text>
            <Button colorScheme="teal" size="lg" onClick={startGame}>
              Start Game
            </Button>
          </VStack>
        ) : (
          <>
            <Box
              width={`${GRID_SIZE * CELL_SIZE}px`}
              height={`${GRID_SIZE * CELL_SIZE}px`}
              border="3px solid"
              borderColor="teal.400"
              bg="gray.50"
              position="relative"
              borderRadius="md"
              tabIndex={0}
              outline="none"
              onKeyDown={handleKeyPress}
            >
              {/* Snake */}
              {snake.map((segment, index) => (
                <Box
                  key={index}
                  position="absolute"
                  left={`${segment.x * CELL_SIZE}px`}
                  top={`${segment.y * CELL_SIZE}px`}
                  width={`${CELL_SIZE}px`}
                  height={`${CELL_SIZE}px`}
                  bg={index === 0 ? "teal.500" : "teal.300"}
                  borderRadius={index === 0 ? "md" : "sm"}
                />
              ))}
              
              {/* Food */}
              <Box
                position="absolute"
                left={`${food.x * CELL_SIZE}px`}
                top={`${food.y * CELL_SIZE}px`}
                width={`${CELL_SIZE}px`}
                height={`${CELL_SIZE}px`}
                bg="red.400"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xs"
              >
                🍎
              </Box>
            </Box>

            <HStack spacing={4}>
              <Button 
                colorScheme="orange" 
                onClick={() => {
                  setGameRunning(!gameRunning);
                }}
                disabled={gameOver}
              >
                {gameRunning ? "Pause" : "Resume"}
              </Button>
              <Button colorScheme="red" onClick={resetGame}>
                Reset Game
              </Button>
            </HStack>

            {gameOver && (
              <VStack spacing={4} p={6} bg="red.50" borderRadius="md" border="2px solid" borderColor="red.200">
                <Text fontSize="2xl" fontWeight="bold" color="red.500">
                  Game Over! 🎮
                </Text>
                <Text fontSize="lg">
                  Final Score: {score} | Questions Answered: {questionsAnswered}
                </Text>
                <Button colorScheme="teal" onClick={startGame}>
                  Play Again
                </Button>
              </VStack>
            )}
          </>
        )}

        {/* Question Modal */}
        <Modal isOpen={isOpen} onClose={() => {}} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Badge colorScheme="purple" mr={2}>
                {currentQuestion?.category}
              </Badge>
              Question Time! 🧠
            </ModalHeader>
            <ModalBody>
              <VStack spacing={4}>
                <Text fontSize="lg" fontWeight="medium" textAlign="center">
                  {currentQuestion?.question}
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={3} w="full">
                  {currentQuestion?.options.map((option, index) => (
                    <GridItem key={index}>
                      <Button
                        w="full"
                        h="12"
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => handleAnswerQuestion(index)}
                        whiteSpace="normal"
                        textAlign="center"
                      >
                        {option}
                      </Button>
                    </GridItem>
                  ))}
                </Grid>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Text fontSize="sm" color="gray.500">
                Choose the correct answer to grow your snake!
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
}