import { useState, useEffect, useCallback } from 'react';
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
  Container,
  useToast,
  Select,
  IconButton,
  SimpleGrid,
  useBreakpointValue
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import SidebarAdRight from '../SidebarAd/SidebarAdRight';
import SidebarAdLeft from '../SidebarAd/SidebarAdLeft';

import subjectsList from '../../config/subjectsList';

import { usePageMeta } from '../../hooks/usePageMeta';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const GAME_SPEED = 300;


export default function EnhancedEducationalSnakeGame() {
  usePageMeta(
    "Snake Game",
    "Play the Snake Game with an educational twist! Answer questions to grow your snake and score points. Perfect for B.Tech students to test their knowledge while having fun.",
  );
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('snakeGameHighScore')) || 0;
  });;
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [level, setLevel] = useState(1);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState("Problem Solving through Imperative Programming Lab in C (PSIPL)");
  const [subjectQuestions, setSubjectQuestions] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const gameSize = useBreakpointValue({ base: 300, md: 400 });
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12, xl: 12 });
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });

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

  // const getAllQuestions = () => {
  //    if (selectedSubject === "All Subjects") {
  //      return Object.values(QUESTIONS).flat();
  //   }
  //   return QUESTIONS[selectedSubject] || [];
  // };

  const getRandomQuestion = () => {
    if (subjectQuestions.length === 0) {
      return {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        category: "Fallback"
      };
    }
    return subjectQuestions[Math.floor(Math.random() * subjectQuestions.length)];
  };

  const updateHighScore = (newScore) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem('snakeGameHighScore', newScore.toString());
      toast({
        title: "New High Score! 🏆",
        description: `Amazing! You scored ${newScore} points!`,
        status: "success",
        duration: 1000,
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood({ x: 15, y: 15 });
    setGameOver(false);
    setGameStarted(false);
    updateHighScore(score); // Check for high score before resetting
    setScore(0);
    setCurrentQuestion(null);
    setGameRunning(false);
    setLevel(1);
    setQuestionsAnswered(0);
  };

  const startGame = async () => {
    resetGame();

    try {
      const fileSafeSubject = selectedSubject.replace(/\s+/g, '').replace(/[^\w]/g, '');
      const module = await import(`../../question-files/${fileSafeSubject}.js`);
      setSubjectQuestions(module.default);
      setGameStarted(true);
      setGameRunning(true);
    } catch (error) {
      console.error("Error loading questions:", error);
      toast({
        title: "Error loading questions",
        description: "Please try a different subject.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };


  const moveSnake = (newDirection) => {
    if (!gameRunning || gameOver) return;

    // Prevent reverse direction
    if (
      (newDirection.x === 1 && direction.x === -1) ||
      (newDirection.x === -1 && direction.x === 1) ||
      (newDirection.y === 1 && direction.y === -1) ||
      (newDirection.y === -1 && direction.y === 1)
    ) {
      return;
    }

    setDirection(newDirection);
  };

  const handleKeyPress = useCallback((e) => {
    if (!gameRunning || gameOver) return;

    e.preventDefault();
    const key = e.key;

    switch (key) {
      case 'ArrowUp':
        moveSnake({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        moveSnake({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        moveSnake({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        moveSnake({ x: 1, y: 0 });
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
      const points = 10 * level;
      setScore(prev => {
        const newScore = prev + points;
        updateHighScore(newScore);
        return newScore;
      });
      setQuestionsAnswered(prev => prev + 1);

      // Grow snake
      setSnake(prev => [...prev, { ...prev[prev.length - 1] }]);

      toast({
        title: "Correct! 🎉",
        description: `+${points} points`,
        status: "success",
        duration: 1000,
        position: 'top-right',
        isClosable: true,
      });

      // Level up every 3 questions
      if ((questionsAnswered + 1) % 3 === 0) {
        setLevel(prev => prev + 1);
        toast({
          title: "Level Up! 🚀",
          description: `Now on level ${level + 1}`,
          status: "info",
          duration: 1100,
          position: 'top-right',
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Wrong Answer ❌",
        description: "Try again next time!",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: 'top-right',
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
          updateHighScore(score);
          return currentSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          setGameRunning(false);
          updateHighScore(score);
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
  }, [direction, food, gameRunning, gameOver, generateFood, level, onOpen, score]);

  return (
    <Container maxW="4xl" py={containerPadding}>
      <SidebarAdLeft
        position="left"
      />
      <VStack spacing={6}>
        {/* <Heading
          color="teal.500"
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          🐍 Educational Snake Game
        </Heading> */}

        {/* Stats Display */}
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 4, xl: 4 }}
          spacing={4}
          w="full"
          pt={{ base: 12, md: 8, lg: 5 }}
          px={{ base: 4, md: 6, lg: 8 }}
          width={{ base: "full", md: "70%", lg: "80%" }} // Responsive width
          mt={2}
        >
          <Badge
            colorScheme="blue"
            fontSize="md"
            p={2}
            textAlign="center"
            w={{ base: "full", md: "auto" }} // Responsive width
          >
            Score: {score}
          </Badge>
          <Badge
            colorScheme="orange"
            fontSize="md"
            p={2}
            textAlign="center"
            w={{ base: "full", md: "auto" }} // Responsive width
          >
            High Score: {highScore}
          </Badge>
          <Badge
            colorScheme="green"
            fontSize="md"
            p={2}
            textAlign="center"
            w={{ base: "full", md: "auto" }} // Responsive width
          >
            Level: {level}
          </Badge>
          <Badge
            colorScheme="purple"
            fontSize="md"
            p={2}
            textAlign="center"
            w={{ base: "full", md: "auto" }} // Responsive width
          >
            Questions: {questionsAnswered}
          </Badge>
        </SimpleGrid>

        {/* Subject Selection */}
        <Box w={{ base: "full", md: "400px" }}>
          <Text mb={2} fontWeight="medium">Select Subject:</Text>
          <Select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            disabled={gameStarted && gameRunning}
          >
            {subjectsList.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Select>
        </Box>

        {!gameStarted ? (
          <VStack spacing={4}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              textAlign="center"
              color="gray.600"
              px={4}
            >
              🎮 Use arrow keys or touch controls to move<br />
              🍎 Eat food to trigger educational questions<br />
              📚 Answer correctly to grow and earn points!
            </Text>
            <Button colorScheme="teal" size={buttonSize} onClick={startGame}>
              Start Game
            </Button>
          </VStack>
        ) : (
          <>
            <Box
              width={`${gameSize}px`}
              height={`${gameSize}px`}
              border="3px solid"
              borderColor="teal.400"
              bg="gray.50"
              position="relative"
              borderRadius="md"
              mx="auto"
            >
              {/* Snake */}
              {snake.map((segment, index) => (
                <Box
                  key={index}
                  position="absolute"
                  left={`${(segment.x * gameSize) / GRID_SIZE}px`}
                  top={`${(segment.y * gameSize) / GRID_SIZE}px`}
                  width={`${gameSize / GRID_SIZE}px`}
                  height={`${gameSize / GRID_SIZE}px`}
                  bg={index === 0 ? "teal.500" : "teal.300"}
                  borderRadius={index === 0 ? "md" : "sm"}
                />
              ))}

              {/* Food */}
              <Box
                position="absolute"
                left={`${(food.x * gameSize) / GRID_SIZE}px`}
                top={`${(food.y * gameSize) / GRID_SIZE}px`}
                width={`${gameSize / GRID_SIZE}px`}
                height={`${gameSize / GRID_SIZE}px`}
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

            {/* Mobile Controls */}
            <VStack spacing={2}>
              <IconButton
                aria-label="Move up"
                icon={<ChevronUpIcon />}
                colorScheme="teal"
                size="lg"
                onClick={() => moveSnake({ x: 0, y: -1 })}
                disabled={!gameRunning || gameOver}
              />
              <HStack spacing={4}>
                <IconButton
                  aria-label="Move left"
                  icon={<ChevronLeftIcon />}
                  colorScheme="teal"
                  size="lg"
                  onClick={() => moveSnake({ x: -1, y: 0 })}
                  disabled={!gameRunning || gameOver}
                />
                <IconButton
                  aria-label="Move right"
                  icon={<ChevronRightIcon />}
                  colorScheme="teal"
                  size="lg"
                  onClick={() => moveSnake({ x: 1, y: 0 })}
                  disabled={!gameRunning || gameOver}
                />
              </HStack>
              <IconButton
                aria-label="Move down"
                icon={<ChevronDownIcon />}
                colorScheme="teal"
                size="lg"
                onClick={() => moveSnake({ x: 0, y: 1 })}
                disabled={!gameRunning || gameOver}
              />
            </VStack>

            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                colorScheme="orange"
                onClick={() => setGameRunning(!gameRunning)}
                disabled={gameOver}
                size={buttonSize}
              >
                {gameRunning ? "Pause" : "Resume"}
              </Button>
              <Button colorScheme="red" onClick={resetGame} size={buttonSize}>
                Reset Game
              </Button>
            </HStack>

            {gameOver && (
              <VStack
                spacing={4}
                p={6}
                bg="red.50"
                borderRadius="md"
                border="2px solid"
                borderColor="red.200"
                textAlign="center"
              >
                <Text fontSize="2xl" fontWeight="bold" color="red.500">
                  Game Over! 🎮
                </Text>
                <VStack spacing={2}>
                  <Text fontSize="lg">
                    Final Score: {score}
                  </Text>
                  <Text fontSize="lg">
                    High Score: {highScore}
                  </Text>
                  <Text fontSize="md">
                    Questions Answered: {questionsAnswered}
                  </Text>
                </VStack>
                <Button colorScheme="teal" onClick={startGame} size={buttonSize}>
                  Play Again
                </Button>
              </VStack>
            )}
          </>
        )}

        {/* Question Modal */}
        <Modal isOpen={isOpen} onClose={() => { }} closeOnOverlayClick={false} size={{ base: "sm", md: "md" }}>
          <ModalOverlay />
          <ModalContent mx={4}>
            <ModalHeader>
              <Badge colorScheme="purple" mr={2}>
                {currentQuestion?.category}
              </Badge>
              Question Time! 🧠
            </ModalHeader>
            <ModalBody>
              <VStack spacing={4}>
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" textAlign="center">
                  {currentQuestion?.question}
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3} w="full">
                  {currentQuestion?.options.map((option, index) => (
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
            </ModalBody>
            <ModalFooter>
              <Text fontSize="sm" color="gray.500" textAlign="center" w="full">
                Choose the correct answer to grow your snake!
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
      <SidebarAdRight
        position="right"
      />
    </Container>
  );
}