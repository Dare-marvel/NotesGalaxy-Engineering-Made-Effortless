import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Box,
    VStack,
    HStack,
    Text,
    Button,
    Select,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    RadioGroup,
    Radio,
    useDisclosure,
    Badge,
    Flex,
    useToast
} from '@chakra-ui/react';

import SidebarAdRight from '../SidebarAd/SidebarAdRight';
import SidebarAdLeft from '../SidebarAd/SidebarAdLeft';

import subjectsList from '../../config/subjectsList';
import QUESTIONS from './constants/QuestionsList';

const SpacePongGame = () => {
    // Game state
    const canvasRef = useRef(null);
    const gameLoopRef = useRef(null);
    const keysRef = useRef({});
    const touchRef = useRef({ player1: null, player2: null });
    const gameContainerRef = useRef(null);

    // Device detection
    const [deviceType, setDeviceType] = useState('desktop'); // desktop, tablet, mobile
    const [gameSize, setGameSize] = useState({ width: 800, height: 600 });

    // Game objects
    const [gameState, setGameState] = useState({
        ball: { x: 400, y: 300, dx: 0, dy: 2, radius: 8, isFirstServe: true },
        player1: { x: 20, y: 250, width: 15, height: 100, score: 0 },
        player2: { x: 765, y: 250, width: 15, height: 100, score: 0 },
        gameRunning: false,
        gameStarted: false
    });

    // UI state
    const [selectedSubject, setSelectedSubject] = useState(subjectsList[0]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [highScore, setHighScore] = useState(0);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    // Device detection and game size calculation
    useEffect(() => {
        const updateGameSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            let newDeviceType = 'desktop';
            let newGameSize = { width: 800, height: 600 };

            if (width <= 768) {
                newDeviceType = 'mobile';
                // Mobile: vertical orientation
                newGameSize = {
                    width: Math.min(400, width - 20),
                    height: Math.min(600, height - 120) // Leave space for panels
                };
            } else if (width <= 1024) {
                newDeviceType = 'tablet';
                // Tablet: horizontal orientation
                newGameSize = {
                    width: Math.min(800, width - 40),
                    height: Math.min(600, height - 120)
                };
            } else {
                // Desktop: horizontal orientation
                newGameSize = {
                    width: Math.min(800, width - 40),
                    height: Math.min(600, height - 120)
                };
            }

            setDeviceType(newDeviceType);
            setGameSize(newGameSize);
        };

        updateGameSize();
        window.addEventListener('resize', updateGameSize);
        return () => window.removeEventListener('resize', updateGameSize);
    }, []);

    // Update game objects positions based on game size
    useEffect(() => {
        if (gameState.gameStarted) {
            setGameState(prev => ({
                ...prev,
                ball: {
                    ...prev.ball,
                    x: gameSize.width / 2,
                    y: gameSize.height / 2
                },
                player1: {
                    ...prev.player1,
                    x: 20,
                    y: (gameSize.height - prev.player1.height) / 2
                },
                player2: {
                    ...prev.player2,
                    x: gameSize.width - 35,
                    y: (gameSize.height - prev.player2.height) / 2
                }
            }));
        }
    }, [gameSize, gameState.gameStarted]);

    // Initialize high score
    useEffect(() => {
        try {
            const savedHighScore = localStorage.getItem('spacePongHighScore');
            if (savedHighScore) {
                setHighScore(parseInt(savedHighScore));
            }
        } catch (error) {
            console.log('LocalStorage not available');
        }
    }, []);

    // Prevent scroll when game is running
    useEffect(() => {
        if (gameState.gameStarted) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
            document.body.style.height = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
            document.body.style.height = 'unset';
        };
    }, [gameState.gameStarted]);

    // Update high score
    const updateHighScore = useCallback((score) => {
        if (score > highScore) {
            setHighScore(score);
            try {
                localStorage.setItem('spacePongHighScore', score.toString());
            } catch (error) {
                console.log('LocalStorage not available');
            }
            toast({
                title: "New High Score!",
                description: `You've reached ${score} points!`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    }, [highScore, toast]);

    // Question system
    const showQuestion = useCallback(() => {
        const questions = QUESTIONS[selectedSubject];
        if (questions && questions.length > 0) {
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            setCurrentQuestion(randomQuestion);
            setSelectedAnswer('');
            setGameState(prev => ({ ...prev, gameRunning: false }));
            onOpen();
        }
    }, [selectedSubject, onOpen]);

    const handleAnswerSubmit = () => {
        if (currentQuestion && selectedAnswer !== '') {
            const isCorrect = parseInt(selectedAnswer) === currentQuestion.correct;

            if (isCorrect) {
                toast({
                    title: "Correct!",
                    description: "Great job! Continue playing.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
                // Bonus points for correct answer
                setGameState(prev => {
                    const newScore = Math.max(prev.player1.score, prev.player2.score) + 5;
                    updateHighScore(newScore);
                    return {
                        ...prev,
                        player1: { ...prev.player1, score: prev.player1.score >= prev.player2.score ? newScore : prev.player1.score },
                        player2: { ...prev.player2, score: prev.player2.score > prev.player1.score ? newScore : prev.player2.score }
                    };
                });
            } else {
                toast({
                    title: "Incorrect",
                    description: `The correct answer was: ${currentQuestion.options[currentQuestion.correct]}`,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }

            onClose();
            setGameState(prev => ({ ...prev, gameRunning: true }));
        }
    };

    // Game logic
    const resetBall = useCallback((isFirstServe = false) => {
        setGameState(prev => ({
            ...prev,
            ball: {
                x: gameSize.width / 2,
                y: gameSize.height / 2,
                dx: isFirstServe ? 0 : (Math.random() > 0.5 ? 1 : -1) * 3,
                dy: isFirstServe ? 2 : (Math.random() > 0.5 ? 1 : -1) * 2,
                radius: 8,
                isFirstServe: isFirstServe
            }
        }));
    }, [gameSize]);

    const updateGame = useCallback(() => {
        setGameState(prev => {
            if (!prev.gameRunning) return prev;

            const newState = { ...prev };
            const { ball, player1, player2 } = newState;

            // Update ball position
            ball.x += ball.dx;
            ball.y += ball.dy;

            // Ball collision with top/bottom walls (90-degree rebound)
            if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= gameSize.height) {
                ball.dy = -ball.dy;
                // If it's the first serve, start horizontal movement after hitting top/bottom
                if (ball.isFirstServe) {
                    ball.dx = Math.random() > 0.5 ? 3 : -3;
                    ball.isFirstServe = false;
                }
            }

            // Ball collision with paddles (90-degree rebound)
            if (
                ball.x - ball.radius <= player1.x + player1.width &&
                ball.y >= player1.y &&
                ball.y <= player1.y + player1.height &&
                ball.dx < 0
            ) {
                ball.dx = -ball.dx;
                ball.x = player1.x + player1.width + ball.radius;
            }

            if (
                ball.x + ball.radius >= player2.x &&
                ball.y >= player2.y &&
                ball.y <= player2.y + player2.height &&
                ball.dx > 0
            ) {
                ball.dx = -ball.dx;
                ball.x = player2.x - ball.radius;
            }

            // Scoring
            if (ball.x < 0) {
                player2.score++;
                updateHighScore(Math.max(player1.score, player2.score));
                resetBall(false);
                // Show question every 3 points
                if (player2.score % 10 === 0) {
                    setTimeout(showQuestion, 1000);
                }
            } else if (ball.x > gameSize.width) {
                player1.score++;
                updateHighScore(Math.max(player1.score, player2.score));
                resetBall(false);
                // Show question every 3 points
                if (player1.score % 10 === 0) {
                    setTimeout(showQuestion, 1000);
                }
            }

            // Update paddle positions based on input
            if (deviceType !== 'mobile') {
                if (keysRef.current['a'] && player1.y > 0) {
                    player1.y -= 6;
                }
                if (keysRef.current['z'] && player1.y < gameSize.height - player1.height) {
                    player1.y += 6;
                }
                if (keysRef.current['k'] && player2.y > 0) {
                    player2.y -= 6;
                }
                if (keysRef.current['m'] && player2.y < gameSize.height - player2.height) {
                    player2.y += 6;
                }
            }

            return newState;
        });
    }, [resetBall, showQuestion, updateHighScore, deviceType, gameSize]);

    // Touch handling for mobile
    const handleTouchStart = (e, player) => {
        if (deviceType !== 'mobile') return;
        e.preventDefault();
        const touch = e.touches[0];
        touchRef.current[player] = {
            startY: touch.clientY,
            currentY: touch.clientY
        };
    };

    const handleTouchMove = (e, player) => {
        if (deviceType !== 'mobile' || !touchRef.current[player]) return;
        e.preventDefault();
        const touch = e.touches[0];
        const deltaY = touch.clientY - touchRef.current[player].currentY;

        setGameState(prev => {
            const newState = { ...prev };
            const paddle = player === 'player1' ? newState.player1 : newState.player2;
            paddle.y = Math.max(0, Math.min(gameSize.height - paddle.height, paddle.y + deltaY * 2));
            return newState;
        });

        touchRef.current[player].currentY = touch.clientY;
    };

    const handleTouchEnd = (player) => {
        if (deviceType !== 'mobile') return;
        touchRef.current[player] = null;
    };

    // Keyboard handling
    useEffect(() => {
        const handleKeyDown = (e) => {
            keysRef.current[e.key] = true;
        };

        const handleKeyUp = (e) => {
            keysRef.current[e.key] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Game loop
    useEffect(() => {
        if (gameState.gameRunning) {
            gameLoopRef.current = setInterval(updateGame, 16);
        } else {
            clearInterval(gameLoopRef.current);
        }

        return () => clearInterval(gameLoopRef.current);
    }, [gameState.gameRunning, updateGame]);

    // Canvas rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Clear canvas with space background
        const gradient = ctx.createLinearGradient(0, 0, 0, gameSize.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(0.5, '#16213e');
        gradient.addColorStop(1, '#0f0f3d');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, gameSize.width, gameSize.height);

        // Draw stars
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 50; i++) {
            const x = (i * 37) % gameSize.width;
            const y = (i * 23) % gameSize.height;
            ctx.fillRect(x, y, 1, 1);
        }

        // Draw center line
        ctx.strokeStyle = '#9d4edd';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(gameSize.width / 2, 0);
        ctx.lineTo(gameSize.width / 2, gameSize.height);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw paddles with glow effect
        const drawPaddle = (paddle, color) => {
            ctx.shadowBlur = 20;
            ctx.shadowColor = color;
            ctx.fillStyle = color;
            ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
            ctx.shadowBlur = 0;
        };

        drawPaddle(gameState.player1, '#00d4ff');
        drawPaddle(gameState.player2, '#ff006e');

        // Draw ball with glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#c77dff';
        ctx.fillStyle = '#c77dff';
        ctx.beginPath();
        ctx.arc(gameState.ball.x, gameState.ball.y, gameState.ball.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }, [gameState, gameSize]);

    const startGame = () => {
        setGameState(prev => ({
            ...prev,
            gameRunning: true,
            gameStarted: true
        }));
        // Reset ball for first serve
        resetBall(true);
    };

    const resetGame = () => {
        setGameState({
            ball: { x: gameSize.width / 2, y: gameSize.height / 2, dx: 0, dy: 2, radius: 8, isFirstServe: true },
            player1: { x: 20, y: (gameSize.height - 100) / 2, width: 15, height: 100, score: 0 },
            player2: { x: gameSize.width - 35, y: (gameSize.height - 100) / 2, width: 15, height: 100, score: 0 },
            gameRunning: false,
            gameStarted: false
        });
    };

    // Pre-game setup screen
    if (!gameState.gameStarted) {
        return (
            <Box minH="100vh" bg="white" >
                <SidebarAdLeft
                    position="left"
                />
                <VStack spacing={4} maxW="900px" mx="auto">
                    {/* Header */}
                    {/* <VStack spacing={2}>
            <Text fontSize="3xl" fontWeight="bold" bgGradient="linear(to-r, #9d4edd, #c77dff)" bgClip="text">
              🚀 Space Pong Educational Game 🚀
            </Text>
            <HStack spacing={4} wrap="wrap" justify="center">
              <Badge colorScheme="purple" fontSize="md" p={2}>
                High Score: {highScore}
              </Badge>
            </HStack>
          </VStack> */}

                    {/* Subject Selection */}
                    <VStack
                        spacing={2}
                        pt={{ base: 12, md: 12, lg: 12, xl: 12 }}
                        mt={4}
                    >
                        <Text fontSize="lg" color="gray.600">Select Subject for Quiz Questions:</Text>
                        <Select
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                            maxW="400px"
                            borderColor="purple.300"
                            focusBorderColor="purple.500"
                        >
                            {subjectsList.map((subject, index) => (
                                <option key={index} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </Select>
                    </VStack>

                    {/* Controls Info */}
                    <VStack spacing={2} textAlign="center">
                        <Text fontSize="lg" fontWeight="semibold" color="gray.700">
                            Game Controls
                        </Text>
                        {deviceType === 'mobile' ? (
                            <Text color="gray.600">
                                📱 Touch and drag the left/right side of the screen to move paddles
                            </Text>
                        ) : (
                            <HStack spacing={6} wrap="wrap" justify="center" p={4} bg="white">
                                <VStack spacing={1} align="center">
                                    <Text color="blue.500" fontWeight="semibold">Player 1 (Blue)</Text>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        color="blue.700"
                                        // textShadow="0 0 6px #3b82f6"
                                        letterSpacing="wide"
                                    >
                                        A = Up
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        color="blue.700"
                                        // textShadow="0 0 6px #3b82f6"
                                        letterSpacing="wide"
                                    >
                                        Z = Down
                                    </Text>
                                </VStack>

                                <VStack spacing={1} align="center">
                                    <Text color="pink.500" fontWeight="semibold">Player 2 (Pink)</Text>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        color="pink.700"
                                        // textShadow="0 0 6px #ec4899"
                                        letterSpacing="wide"
                                    >
                                        K = Up
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        fontWeight="bold"
                                        color="pink.700"
                                        // textShadow="0 0 6px #ec4899"
                                        letterSpacing="wide"
                                    >
                                        M = Down
                                    </Text>
                                </VStack>
                            </HStack>

                        )}
                    </VStack>

                    {/* Start Button */}
                    <Button
                        size="lg"
                        colorScheme="purple"
                        onClick={startGame}
                        _hover={{ transform: 'scale(1.05)' }}
                    >
                        Start Game
                    </Button>

                    {/* Info */}
                    {/* <Text fontSize="sm" color="gray.500" textAlign="center" maxW="600px">
            💡 Answer quiz questions correctly every 3 points to earn bonus points! 
            Questions are randomly selected from your chosen subject.
          </Text> */}
                </VStack>
                <SidebarAdRight
                    position="right"
                />
            </Box>
        );
    }

    // Full-screen game view
    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="black"
            overflow="hidden"
            // pt={{ base: 0, md: 0, lg: 10, xl: 12 }}
            ref={gameContainerRef}
            zIndex={3}
        >
            {/* Top Panel - Scores */}
            <Flex
                position="absolute"
                // pt={{ base: 2, md: 4, lg: 6, xl: 8 }}
                top="0"
                left="0"
                right="0"
                height="60px"
                bg="rgba(0,0,0,0.8)"
                align="center"
                justify="center"
                zIndex={2}
            >
                <HStack spacing={8}>
                    <Text color="#00d4ff" fontSize="xl" fontWeight="bold">
                        P1: {gameState.player1.score}
                    </Text>
                    <Text color="white" fontSize="lg">
                        High: {highScore}
                    </Text>
                    <Text color="#ff006e" fontSize="xl" fontWeight="bold">
                        P2: {gameState.player2.score}
                    </Text>
                </HStack>
            </Flex>

            {/* Game Canvas */}
            <Box
                position="absolute"
                top="20px"
                left="50%"
                transform="translateX(-50%)"
                bottom="60px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <canvas
                    ref={canvasRef}
                    width={gameSize.width}
                    height={gameSize.height}
                    style={{
                        border: '2px solid #9d4edd',
                        borderRadius: '8px',
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                    onTouchStart={(e) => {
                        if (deviceType !== 'mobile') return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.touches[0].clientX - rect.left;
                        if (x < rect.width / 2) {
                            handleTouchStart(e, 'player1');
                        } else {
                            handleTouchStart(e, 'player2');
                        }
                    }}
                    onTouchMove={(e) => {
                        if (deviceType !== 'mobile') return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.touches[0].clientX - rect.left;
                        if (x < rect.width / 2) {
                            handleTouchMove(e, 'player1');
                        } else {
                            handleTouchMove(e, 'player2');
                        }
                    }}
                    onTouchEnd={() => {
                        if (deviceType !== 'mobile') return;
                        handleTouchEnd('player1');
                        handleTouchEnd('player2');
                    }}
                />
            </Box>

            {/* Bottom Panel - Controls */}
            <Flex
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                height="60px"
                bg="rgba(0,0,0,0.8)"
                align="center"
                justify="center"
                zIndex="10"
            >
                <HStack spacing={4}>
                    <Button
                        colorScheme={gameState.gameRunning ? "red" : "green"}
                        onClick={() => setGameState(prev => ({ ...prev, gameRunning: !prev.gameRunning }))}
                        size="sm"
                    >
                        {gameState.gameRunning ? "Pause" : "Resume"}
                    </Button>
                    <Button colorScheme="orange" onClick={resetGame} size="sm">
                        Reset Game
                    </Button>
                </HStack>
            </Flex>

            {/* Question Modal */}
            <Modal isOpen={isOpen} onClose={() => { }} closeOnOverlayClick={false} size="lg">
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent bg="white" border="2px solid" borderColor="purple.400">
                    <ModalHeader bg="purple.500" color="white" borderRadius="md md 0 0">
                        🧠 Quiz Time! - {currentQuestion?.category}
                    </ModalHeader>
                    <ModalBody p={6}>
                        {currentQuestion && (
                            <VStack spacing={4} align="stretch">
                                <Text fontSize="lg" fontWeight="semibold">
                                    {currentQuestion.question}
                                </Text>
                                <RadioGroup value={selectedAnswer} onChange={setSelectedAnswer}>
                                    <VStack align="stretch" spacing={2}>
                                        {currentQuestion.options.map((option, index) => (
                                            <Radio
                                                key={index}
                                                value={index.toString()}
                                                colorScheme="purple"
                                                size="lg"
                                            >
                                                {option}
                                            </Radio>
                                        ))}
                                    </VStack>
                                </RadioGroup>
                            </VStack>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="purple"
                            onClick={handleAnswerSubmit}
                            disabled={selectedAnswer === ''}
                            _hover={{ transform: 'scale(1.05)' }}
                        >
                            Submit Answer
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default SpacePongGame;