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

import subjectsList from '../../config/subjectsList';
import QUESTIONS from './constants/QuestionsList';


const Pong = () => {
    // Game state
    const canvasRef = useRef(null);
    const gameLoopRef = useRef(null);
    const keysRef = useRef({});
    const touchRef = useRef({ player1: null, player2: null });

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
    const [isMobile, setIsMobile] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    // Initialize high score and detect mobile
    useEffect(() => {
        try {
            const savedHighScore = localStorage.getItem('spacePongHighScore');
            if (savedHighScore) {
                setHighScore(parseInt(savedHighScore));
            }
        } catch (error) {
            console.log('LocalStorage not available');
        }

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                duration: 1000,
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
                    duration: 1000,
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
                    duration: 1000,
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
                x: 400,
                y: 300,
                dx: isFirstServe ? 0 : (Math.random() > 0.5 ? 1 : -1) * 3,
                dy: isFirstServe ? 2 : (Math.random() > 0.5 ? 1 : -1) * 2,
                radius: 8,
                isFirstServe: isFirstServe
            }
        }));
    }, []);

    const updateGame = useCallback(() => {
        setGameState(prev => {
            if (!prev.gameRunning) return prev;

            const newState = { ...prev };
            const { ball, player1, player2 } = newState;

            // Update ball position
            ball.x += ball.dx;
            ball.y += ball.dy;

            // Ball collision with top/bottom walls (90-degree rebound)
            if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= 600) {
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
                if (player2.score % 7 === 0) {
                    setTimeout(showQuestion, 1000);
                }
            } else if (ball.x > 800) {
                player1.score++;
                updateHighScore(Math.max(player1.score, player2.score));
                resetBall(false);
                // Show question every 3 points
                if (player1.score % 7 === 0) {
                    setTimeout(showQuestion, 1000);
                }
            }

            // Update paddle positions based on input
            if (!isMobile) {
                if (keysRef.current['a'] && player1.y > 0) {
                    player1.y -= 6;
                }
                if (keysRef.current['z'] && player1.y < 500) {
                    player1.y += 6;
                }
                if (keysRef.current['k'] && player2.y > 0) {
                    player2.y -= 6;
                }
                if (keysRef.current['m'] && player2.y < 500) {
                    player2.y += 6;
                }
            }

            return newState;
        });
    }, [resetBall, showQuestion, updateHighScore, isMobile]);

    // Touch handling for mobile
    const handleTouchStart = (e, player) => {
        if (!isMobile) return;
        e.preventDefault();
        const touch = e.touches[0];
        touchRef.current[player] = {
            startY: touch.clientY,
            currentY: touch.clientY
        };
    };

    const handleTouchMove = (e, player) => {
        if (!isMobile || !touchRef.current[player]) return;
        e.preventDefault();
        const touch = e.touches[0];
        const deltaY = touch.clientY - touchRef.current[player].currentY;

        setGameState(prev => {
            const newState = { ...prev };
            const paddle = player === 'player1' ? newState.player1 : newState.player2;
            paddle.y = Math.max(0, Math.min(500, paddle.y + deltaY * 2));
            return newState;
        });

        touchRef.current[player].currentY = touch.clientY;
    };

    const handleTouchEnd = (player) => {
        if (!isMobile) return;
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
        const gradient = ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(0.5, '#16213e');
        gradient.addColorStop(1, '#0f0f3d');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 800, 600);

        // Draw stars
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 50; i++) {
            const x = (i * 37) % 800;
            const y = (i * 23) % 600;
            ctx.fillRect(x, y, 1, 1);
        }

        // Draw center line
        ctx.strokeStyle = '#9d4edd';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(400, 0);
        ctx.lineTo(400, 600);
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
    }, [gameState]);

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
            ball: { x: 400, y: 300, dx: 0, dy: 2, radius: 8, isFirstServe: true },
            player1: { x: 20, y: 250, width: 15, height: 100, score: 0 },
            player2: { x: 765, y: 250, width: 15, height: 100, score: 0 },
            gameRunning: false,
            gameStarted: false
        });
    };

    return (
        <Box minH="100vh" bg="white" p={gameState.gameStarted ? 0 : 4}>
            {!gameState.gameStarted ? (
                // Pre-game setup screen
                <VStack spacing={4} maxW="900px" mx="auto">
                    {/* Header */}
                    <VStack spacing={2}>
                        <Text fontSize="3xl" fontWeight="bold" bgGradient="linear(to-r, #9d4edd, #c77dff)" bgClip="text">
                            🚀 Space Pong Educational Game 🚀
                        </Text>
                        <HStack spacing={4} wrap="wrap" justify="center">
                            <Badge colorScheme="purple" fontSize="md" p={2}>
                                High Score: {highScore}
                            </Badge>
                            <Badge colorScheme="blue" fontSize="md" p={2}>
                                P1: {gameState.player1.score}
                            </Badge>
                            <Badge colorScheme="pink" fontSize="md" p={2}>
                                P2: {gameState.player2.score}
                            </Badge>
                        </HStack>
                    </VStack>

                    {/* Subject Selection */}
                    <VStack spacing={2}>
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
                        {isMobile ? (
                            <Text color="gray.600">
                                📱 Touch and drag the screen to move paddles
                            </Text>
                        ) : (
                            <HStack spacing={6} wrap="wrap" justify="center">
                                <VStack>
                                    <Text color="blue.500" fontWeight="semibold">Player 1 (Blue)</Text>
                                    <Text fontSize="sm" color="gray.600">A = Up, Z = Down</Text>
                                </VStack>
                                <VStack>
                                    <Text color="pink.500" fontWeight="semibold">Player 2 (Pink)</Text>
                                    <Text fontSize="sm" color="gray.600">K = Up, M = Down</Text>
                                </VStack>
                            </HStack>
                        )}
                    </VStack>

                    {/* Start Game Button */}
                    <Button
                        size="lg"
                        colorScheme="purple"
                        onClick={startGame}
                        _hover={{ transform: 'scale(1.05)' }}
                    >
                        Start Game
                    </Button>

                    {/* Info */}
                    <Text fontSize="sm" color="gray.500" textAlign="center" maxW="600px">
                        💡 Answer quiz questions correctly every 3 points to earn bonus points!
                        Questions are randomly selected from your chosen subject.
                    </Text>
                </VStack>
            ) : (
                // Fullscreen game view
                <VStack
                    // h="100vh"
                    spacing={0}
                    bg="black"
                    transform={isMobile ? "rotate(90deg)" : "none"}
                    transformOrigin="center"
                    w={isMobile ? "100vh" : "100vw"}
                    h={isMobile ? "100vw" : "100vh"}
                    position={isMobile ? "fixed" : "relative"}
                    top={isMobile ? "0" : "auto"}
                    left={isMobile ? "0" : "auto"}
                >
                    {/* Top Score Panel */}
                    <Flex
                        w="100%"
                        bg="blackAlpha.800"
                        p={2}

                        justify="center"
                        align="center"
                        borderBottom="1px solid"
                        borderColor="purple.400"
                        minH="60px"
                    >
                        <HStack spacing={8}>
                            <Badge colorScheme="blue" fontSize="lg" p={3}>
                                P1: {gameState.player1.score}
                            </Badge>
                            <Badge colorScheme="purple" fontSize="lg" p={3}>
                                High Score: {highScore}
                            </Badge>
                            <Badge colorScheme="pink" fontSize="lg" p={3}>
                                P2: {gameState.player2.score}
                            </Badge>
                        </HStack>
                    </Flex>

                    {/* Game Canvas - Takes remaining space */}
                    <Box
                        flex="1"
                        w="100%"
                        position="relative"
                        overflow="hidden"
                    >
                        <canvas
                            ref={canvasRef}
                            width={isMobile ? "600" : "800"}
                            height={isMobile ? "800" : "600"}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'block',
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f3d 100%)'
                            }}
                            onTouchStart={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const touch = isMobile ?
                                    (e.touches[0].clientY - rect.top < rect.height / 2) :
                                    (e.touches[0].clientX - rect.left < rect.width / 2);

                                if (touch) {
                                    handleTouchStart(e, 'player1');
                                } else {
                                    handleTouchStart(e, 'player2');
                                }
                            }}
                            onTouchMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const touch = isMobile ?
                                    (e.touches[0].clientY - rect.top < rect.height / 2) :
                                    (e.touches[0].clientX - rect.left < rect.width / 2);

                                if (touch) {
                                    handleTouchMove(e, 'player1');
                                } else {
                                    handleTouchMove(e, 'player2');
                                }
                            }}
                            onTouchEnd={() => {
                                handleTouchEnd('player1');
                                handleTouchEnd('player2');
                            }}
                        />
                    </Box>

                    {/* Bottom Control Panel */}
                    <Flex
                        w="100%"
                        bg="blackAlpha.800"
                        p={3}
                        justify="center"
                        align="center"
                        borderTop="1px solid"
                        borderColor="purple.400"
                        minH="70px"
                    >
                        <HStack spacing={4}>
                            <Badge colorScheme="blue" fontSize="lg" p={3}>
                                P1: {gameState.player1.score}
                            </Badge>
                            <Badge colorScheme="pink" fontSize="lg" p={3}>
                                P2: {gameState.player2.score}
                            </Badge>
                            <Button
                                colorScheme={gameState.gameRunning ? "red" : "green"}
                                onClick={() => setGameState(prev => ({ ...prev, gameRunning: !prev.gameRunning }))}
                                size="md"
                            >
                                {gameState.gameRunning ? "Pause" : "Resume"}
                            </Button>
                            <Button
                                colorScheme="orange"
                                onClick={resetGame}
                                size="md"
                            >
                                Reset Game
                            </Button>
                        </HStack>
                    </Flex>
                </VStack>
            )}

            {/* Question Modal */}
            <Modal isOpen={isOpen} onClose={() => { }} closeOnOverlayClick={false} size="lg">
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent
                    bg="white"
                    border="2px solid"
                    borderColor="purple.400"
                    transform={isMobile && gameState.gameStarted ? "rotate(90deg)" : "none"}
                >
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

export default Pong;