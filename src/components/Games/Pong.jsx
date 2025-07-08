import { useState, useEffect, useRef, useCallback } from 'react';
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
    Grid,
    GridItem,
    useDisclosure,
    Tooltip,
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
    Flex,
    useToast
} from '@chakra-ui/react';

import { InfoIcon } from '@chakra-ui/icons';
import './Pong.css'

import BottomAd from '../GoogleAds/BottomAd'
import SidebarAd from '../GoogleAds/SidebarAd';

import subjectsList from '../../config/subjectsList';

import { usePageMeta } from '../../hooks/usePageMeta';

const Pong = () => {

    usePageMeta(
        "Pong Game",
        "Play Pong, the classic arcade game, in your browser. Solve Engineering Problems to score points and level up your knowledge. Perfect for B.Tech students looking to combine fun and learning."
    );

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
        gameStarted: false,
        qFreq: 5,
        currentQuestions: [],
        winner: null, // Add winner tracking
        questionTriggeredBy: null, // Add question trigger tracking
    });

    // UI state
    const [selectedSubject, setSelectedSubject] = useState(subjectsList[0]);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    useEffect(() => {
        const fixHeight = () => {
            const el = document.getElementsByClassName('pong-game-container')[0];
            if (el) {
                el.style.setProperty('height', '100vh', 'important');
                el.style.setProperty('min-height', '100vh', 'important');
            }
        };

        // Apply height fix immediately
        fixHeight();

        // Setup interval to re-apply height every 500ms (aggressive fallback)
        const intervalId = setInterval(fixHeight, 500);

        // Also listen to fullscreen changes
        document.addEventListener('fullscreenchange', fixHeight);
        document.addEventListener('webkitfullscreenchange', fixHeight); // Safari

        return () => {
            clearInterval(intervalId);
            document.removeEventListener('fullscreenchange', fixHeight);
            document.removeEventListener('webkitfullscreenchange', fixHeight);
        };
    }, []);

    // Device detection and game size calculation
    useEffect(() => {
        const updateGameSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            let newDeviceType = 'desktop';
            let newGameSize = { width: 800, height: 600 };
            let paddleWidth = 15;
            let paddleHeight = 100;

            if (height <= 530) {
                newDeviceType = 'mobile';
                // Mobile: use full screen
                newGameSize = {
                    width: width,
                    height: height - 50 // Leave space for score panel
                };
                paddleWidth = 8;
                paddleHeight = 40;
            } else if (height <= 1024) {
                newDeviceType = 'tablet';
                // Tablet: use most of screen
                newGameSize = {
                    width: width - 40,
                    height: height - 70
                };
                paddleWidth = 12;
                paddleHeight = 80;
            } else {
                // Desktop: use most of screen
                newGameSize = {
                    width: width - 40,
                    height: height - 100
                };
                paddleWidth = 15;
                paddleHeight = 100;
            }

            if (width < 768) {
                newDeviceType = 'mobile';
            }

            // if (width <= 768) {
            //     newDeviceType = 'mobile';
            //     // Mobile: use full screen
            //     newGameSize = {
            //         width: width,
            //         height: height - 120 // Leave space for score panel
            //     };
            //     paddleWidth = 8;
            //     paddleHeight = 60;
            // } else if (width <= 1024) {
            //     newDeviceType = 'tablet';
            //     // Tablet: use most of screen
            //     newGameSize = {
            //         width: width - 40,
            //         height: height - 120
            //     };
            //     paddleWidth = 12;
            //     paddleHeight = 80;
            // } else {
            //     // Desktop: use most of screen
            //     newGameSize = {
            //         width: width - 40,
            //         height: height - 120
            //     };
            //     paddleWidth = 15;
            //     paddleHeight = 100;
            // }

            setDeviceType(newDeviceType);
            setGameSize(newGameSize);

            // Update paddle dimensions based on screen size
            setGameState(prev => ({
                ...prev,
                player1: { ...prev.player1, width: paddleWidth, height: paddleHeight },
                player2: { ...prev.player2, width: paddleWidth, height: paddleHeight }
            }));
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

    // Prevent scroll when game is running
    useEffect(() => {
        if (gameState.gameStarted) {
            document.body.classList.add('game-active');
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
        } else {
            document.body.classList.remove('game-active');
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

    // Question system
    const showQuestion = useCallback((triggeredByPlayer) => {
        // Access current questions directly from state updater
        setGameState(prev => {
            const questions = prev.currentQuestions;

            if (questions && questions.length > 0) {
                const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
                setCurrentQuestion(randomQuestion);
                onOpen();

                // Stop the game while showing question and track which player triggered it
                return {
                    ...prev,
                    gameRunning: false,
                    questionTriggeredBy: triggeredByPlayer // Track which player triggered the question
                };
            }

            return prev;
        });
    }, [onOpen]);

    const handleAnswerSubmit = (selectedIndex) => {
        if (currentQuestion && selectedIndex !== '') {
            const isCorrect = selectedIndex === currentQuestion.correct;

            if (isCorrect) {
                toast({
                    title: "Correct!",
                    description: "Great job! Continue playing.",
                    status: "success",
                    duration: 500,
                    isClosable: true,
                    position: 'top',
                });

                // Bonus points for correct answer to the player who triggered the question
                setGameState(prev => {
                    const newState = { ...prev };
                    const bonusPoints = 1;

                    // Give bonus points to the player who triggered the question
                    if (prev.questionTriggeredBy === 'player1') {
                        const newScore = prev.player1.score + bonusPoints;
                        if (newScore >= 10) {
                            newState.player1.score = 10;
                            newState.winner = 'player1';
                            newState.gameRunning = false;
                        } else {
                            newState.player1.score = newScore;
                        }
                    } else if (prev.questionTriggeredBy === 'player2') {
                        const newScore = prev.player2.score + bonusPoints;
                        if (newScore >= 10) {
                            newState.player2.score = 10;
                            newState.winner = 'player2';
                            newState.gameRunning = false;
                        } else {
                            newState.player2.score = newScore;
                        }
                    }

                    return newState;
                });
            } else {
                toast({
                    title: "Incorrect",
                    description: `The correct answer was: ${currentQuestion.options[currentQuestion.correct]}`,
                    status: "error",
                    duration: 500,
                    position: 'top',
                    isClosable: true,
                });
            }

            onClose();

            // Only resume game if no winner was declared
            setTimeout(() => {
                setGameState(prev => ({
                    ...prev,
                    gameRunning: prev.winner ? false : true
                }));
            }, 400);
        }
    };

    // Game logic
    const resetBall = useCallback((isFirstServe = false) => {

        const FIRST_SERVE_SPEED = 4;
        const GAME_SPEED = 7;

        setGameState(prev => ({
            ...prev,
            ball: {
                x: gameSize.width / 2,
                y: gameSize.height / 2,
                dx: (Math.random() > 0.5 ? 1 : -1) * (isFirstServe ? FIRST_SERVE_SPEED : GAME_SPEED),
                dy: (Math.random() > 0.5 ? 0.8 : -0.8) * (isFirstServe ? FIRST_SERVE_SPEED : GAME_SPEED),
                radius: 8,
                isFirstServe: isFirstServe
            }
        }));
    }, [gameSize]);

    const updateGame = useCallback(() => {
        setGameState(prev => {
            if (!prev.gameRunning) return prev;

            const newState = { ...prev };
            const { ball, player1, player2, qFreq } = newState;

            // Update ball position
            ball.x += ball.dx;
            ball.y += ball.dy;

            // Ball collision with top/bottom walls (90-degree rebound)
            if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= gameSize.height) {
                ball.dy = -ball.dy;
                ball.isFirstServe = false;
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
                resetBall(false);

                // Check for winner
                if (player2.score >= 10) {
                    newState.winner = 'player2';
                    newState.gameRunning = false;
                    return newState;
                }

                // Show question every qFreq points
                if (player2.score % qFreq === 0 && player2.score > 0) {
                    showQuestion('player2');
                }
            } else if (ball.x > gameSize.width) {
                player1.score++;
                resetBall(false);

                // Check for winner
                if (player1.score >= 10) {
                    newState.winner = 'player1';
                    newState.gameRunning = false;
                    return newState;
                }

                // Show question every qFreq points
                if (player1.score % qFreq === 0 && player1.score > 0) {
                    showQuestion('player1');
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
    }, [resetBall, showQuestion, deviceType, gameSize]);

    // Touch handling for mobile - supporting simultaneous touches
    const handleTouchStart = (e) => {
        if (deviceType !== 'mobile') return;
        e.preventDefault();

        const rect = e.currentTarget.getBoundingClientRect();

        // Handle all touches
        for (let i = 0; i < e.touches.length; i++) {
            const touch = e.touches[i];
            const x = touch.clientX - rect.left;

            if (x < rect.width / 2) {
                // Left side - Player 1
                touchRef.current.player1 = {
                    id: touch.identifier,
                    startY: touch.clientY,
                    currentY: touch.clientY
                };
            } else {
                // Right side - Player 2
                touchRef.current.player2 = {
                    id: touch.identifier,
                    startY: touch.clientY,
                    currentY: touch.clientY
                };
            }
        }
    };

    const handleTouchMove = (e) => {
        if (deviceType !== 'mobile') return;
        e.preventDefault();

        const rect = e.currentTarget.getBoundingClientRect();

        // Handle all touches
        for (let i = 0; i < e.touches.length; i++) {
            const touch = e.touches[i];
            const x = touch.clientX - rect.left;

            // Determine which player this touch belongs to
            let player = null;
            if (x < rect.width / 2 && touchRef.current.player1 && touchRef.current.player1.id === touch.identifier) {
                player = 'player1';
            } else if (x >= rect.width / 2 && touchRef.current.player2 && touchRef.current.player2.id === touch.identifier) {
                player = 'player2';
            }

            if (player && touchRef.current[player]) {
                const deltaY = touch.clientY - touchRef.current[player].currentY;

                setGameState(prev => {
                    const newState = { ...prev };
                    const paddle = player === 'player1' ? newState.player1 : newState.player2;
                    paddle.y = Math.max(0, Math.min(gameSize.height - paddle.height, paddle.y + deltaY * 2));
                    return newState;
                });

                touchRef.current[player].currentY = touch.clientY;
            }
        }
    };

    const handleTouchEnd = (e) => {
        if (deviceType !== 'mobile') return;

        // Remove ended touches
        for (let i = 0; i < e.changedTouches.length; i++) {
            const touch = e.changedTouches[i];

            if (touchRef.current.player1 && touchRef.current.player1.id === touch.identifier) {
                touchRef.current.player1 = null;
            }
            if (touchRef.current.player2 && touchRef.current.player2.id === touch.identifier) {
                touchRef.current.player2 = null;
            }
        }
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

    const requestFullScreen = () => {
        const elem = gameContainerRef.current;
        if (!elem) {
            console.warn("Fullscreen element not found");
            return;
        }

        const isFullscreen =
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement;

        if (isFullscreen) {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(err => {
                    console.error("Error attempting to exit fullscreen:", err);
                });
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            // Enter fullscreen
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch(err => {
                    console.error("Error attempting to enable fullscreen:", err);
                });
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }
    };


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

    const loadSubjectQuestions = async (subject) => {
        const subjectSlug = subject.replace(/\s+/g, '').replace(/[^\w]/g, '');
        const questionSet = Math.floor(Math.random() * 4) + 1;
        const module = await import(`../../question-files/${subjectSlug}-${questionSet}.js`);
        return module.default || [];
    };

    async function enableFullscreenAndLandscape() {
        const elem = document.documentElement; // or any specific element like a game container

        try {
            // Request fullscreen
            if (elem.requestFullscreen) {
                await elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { // Safari
                await elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { // IE11
                await elem.msRequestFullscreen();
            }

            // Lock orientation to landscape (only works in fullscreen on supported devices)
            if (screen.orientation && screen.orientation.lock) {
                await screen.orientation.lock('landscape');
            } else if (screen.lockOrientation) {
                screen.lockOrientation('landscape');
            } else {
                console.warn("Screen orientation locking not supported on this device.");
            }
        } catch (err) {
            console.error("Failed to enter fullscreen or lock orientation:", err);
        }
    }



    const startGame = async () => {
        // console.log("Checking freq ",qFreq, typeof qFreq);

        let questions = [];
        try {
            questions = await loadSubjectQuestions(selectedSubject);
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
        const value = parseInt(document.getElementById('qFreq_3425').value, 10);
        // setGameState(prev => ({
        //     ...prev,
        //     gameRunning: true,
        //     gameStarted: true,
        //     qFreq: isNaN(value) ? 5 : value, // Default to 5 if invalid input
        //     currentQuestions: questions || [],
        // }));
        // Reset ball for first serve
        // resetBall(true);

        if (deviceType === 'mobile') {
            enableFullscreenAndLandscape()
        }

        // setTimeout(() => {

        setGameState(prev => ({
            ...prev,
            gameRunning: false,
            gameStarted: true,
            qFreq: isNaN(value) ? 5 : value,
            currentQuestions: questions || [],
        }));

        resetBall(true);
        // }, 1000);

    };

    const resetGame = () => {
        const paddleWidth = deviceType === 'mobile' ? 8 : deviceType === 'tablet' ? 12 : 15;
        const paddleHeight = deviceType === 'mobile' ? 60 : deviceType === 'tablet' ? 80 : 100;

        setGameState({
            ball: { x: gameSize.width / 2, y: gameSize.height / 2, dx: 0, dy: 2, radius: 8, isFirstServe: true },
            player1: { x: 20, y: (gameSize.height - paddleHeight) / 2, width: paddleWidth, height: paddleHeight, score: 0 },
            player2: { x: gameSize.width - 35, y: (gameSize.height - paddleHeight) / 2, width: paddleWidth, height: paddleHeight, score: 0 },
            gameRunning: false,
            gameStarted: false,
            qFreq: 5,
            currentQuestions: [],
            winner: null, // Reset winner
            questionTriggeredBy: null, // Reset question trigger
        });
    };

    // Pre-game setup screen
    if (!gameState.gameStarted) {
        return (
            <Box minH="100vh" bg="white" >
                <SidebarAd
                    position="left"
                    adSlot="4333835944"
                />
                <VStack spacing={4} maxW="900px" mx="auto">

                    {/* Subject Selection */}
                    <VStack
                        spacing={2}
                        pt={{ base: 12, md: 12, lg: 12, xl: 12 }}
                        mt={4}
                        px={{ base: 4, sm: 6, md: 8 }}
                        w="full"
                        maxW="100vw"
                        overflow="hidden"
                    >
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            textAlign="center"
                            px={2}
                            color="purple.600">Select Subject for Quiz Questions:</Text>
                        <Select
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                            w="full"
                            maxW={{ base: "100%", sm: "400px" }}
                            borderColor="purple.300"
                            focusBorderColor="purple.500"
                            size={{ base: "md", md: "md" }}
                        >
                            {subjectsList.slice(0, -1).map((subject, index) => (
                                <option key={index} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </Select>
                        <VStack
                            align="center"
                            w="full"
                            spacing={3}
                            px={2}
                        >
                            <HStack
                                spacing={1}
                                align="center"
                                justify="center"
                                flexWrap="wrap"
                            >
                                <Text
                                    color="purple.600"
                                    fontSize={{ base: "sm", md: "md" }}
                                    fontWeight="semibold"
                                    textAlign="center"
                                >
                                    Points/Question
                                </Text>
                                <Tooltip
                                    label="This number signifies the frequency with which questions would be asked to you. Default is 5 points."
                                    fontSize="sm"
                                    bg="blue.700"
                                    color="white"
                                    borderRadius="md"
                                    px={3}
                                    py={2}
                                >
                                    <InfoIcon color="purple.300" cursor="pointer" />
                                </Tooltip>
                            </HStack>

                            <NumberInput
                                step={1}
                                min={2}
                                max={29}
                                size={{ base: "md", md: "md" }}
                                w="full"
                                maxW={{ base: "200px", sm: "250px", md: "300px" }}
                                id='qFreq_3425'
                            >
                                <NumberInputField
                                    color="purple.600"
                                    _placeholder={{ color: 'gray.400' }}
                                    _hover={{ borderColor: 'purple.500' }}
                                    _focus={{ boxShadow: '0 0 10px #8e2de2' }}
                                    borderColor="blue.300"
                                    placeholder="Enter a number"
                                />
                                <NumberInputStepper>
                                    <NumberIncrementStepper color="purple.300" />
                                    <NumberDecrementStepper color="purple.300" />
                                </NumberInputStepper>
                            </NumberInput>
                        </VStack>
                    </VStack>

                    {/* Controls Info */}
                    <VStack spacing={2} textAlign="center">
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            fontWeight="semibold"
                            color="gray.700"
                        >
                            Game Controls
                        </Text>
                        {deviceType === 'mobile' ? (
                            <Box
                                maxW={{ base: "100%", sm: "400px", md: "500px", lg: "960px" }}
                                mx="auto"
                                px={{ base: 4, sm: 5, md: 6 }}
                            >
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    color="gray.600"
                                    textAlign="center"
                                >
                                    📱 Touch and drag the left/right side of the screen to move paddles
                                </Text>
                            </Box>

                        ) : (
                            <VStack spacing={3} align="center">
                                <HStack
                                    spacing={{ base: 4, md: 8 }}
                                    wrap="wrap"
                                    justify="center"
                                    bg="gray.50"
                                    p={4}
                                    borderRadius="lg"
                                    boxShadow="sm"
                                    width="full"
                                    maxW="md"
                                >
                                    <VStack
                                        spacing={1}
                                        px={3}
                                        py={2}
                                        bg="blue.50"
                                        borderRadius="md"
                                        borderLeft="4px solid"
                                        borderColor="blue.500">
                                        <Text color="blue.500" fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>Player 1 (Blue)</Text>
                                        <Text fontSize="xs" color="gray.500" fontWeight="medium">▲ A / Z ▼</Text>
                                    </VStack>
                                    <VStack
                                        spacing={1}
                                        px={3}
                                        py={2}
                                        bg="pink.50" borderRadius="md"
                                        borderLeft="4px solid"
                                        borderColor="pink.500">
                                        <Text
                                            color="pink.500"
                                            fontWeight="bold"
                                            fontSize={{ base: "sm", md: "md" }}>Player 2 (Pink)</Text>
                                        <Text
                                            fontSize="xs"
                                            color="gray.500"
                                            fontWeight="medium">▲ K / M ▼</Text>
                                    </VStack>
                                </HStack>
                                <Text
                                    fontSize="sm"
                                    color="purple.500"
                                    fontStyle="italic"
                                    // display={{ base: "block", md: "block" }}
                                    textAlign="center"
                                >
                                    Play on full screen for best experience.
                                    Score 10 points to win
                                </Text>
                            </VStack>
                        )}
                    </VStack>

                    {/* Start Button */}
                    <Button
                        size={{ base: "sm", sm: "md", md: "lg" }}
                        colorScheme="purple"
                        onClick={startGame}
                        variant={deviceType === 'mobile' ? "solid" : "outline"}
                        _hover={{ transform: 'scale(1.05)' }}
                    >
                        Start Game
                    </Button>

                </VStack>

                <Box
                    width={{ base: '90%', sm: "90%", md: '80%' }}
                    textAlign="center"
                    mx="auto"
                    mt={7}
                    pt={6}
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
    }

    if (gameState.winner) {

        const winnerName = gameState.winner === 'player1' ? 'Player 1' : 'Player 2';
        const winnerColor = gameState.winner === 'player1' ? '#00d4ff' : '#ff006e';
        return (
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                bg="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex={2}
                overflow="hidden"
            >
                {/* Stars Background */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    background="radial-gradient(2px 2px at 20px 30px, white, transparent),
                           radial-gradient(2px 2px at 40px 70px, white, transparent),
                           radial-gradient(1px 1px at 90px 40px, white, transparent),
                           radial-gradient(1px 1px at 130px 80px, white, transparent),
                           radial-gradient(2px 2px at 160px 30px, white, transparent),
                           radial-gradient(1px 1px at 200px 60px, white, transparent),
                           radial-gradient(2px 2px at 240px 90px, white, transparent),
                           radial-gradient(1px 1px at 280px 20px, white, transparent),
                           radial-gradient(1px 1px at 320px 50px, white, transparent),
                           radial-gradient(2px 2px at 360px 80px, white, transparent),
                           radial-gradient(1px 1px at 400px 30px, white, transparent),
                           radial-gradient(2px 2px at 440px 60px, white, transparent),
                           radial-gradient(1px 1px at 480px 90px, white, transparent),
                           radial-gradient(2px 2px at 520px 20px, white, transparent),
                           radial-gradient(1px 1px at 560px 50px, white, transparent),
                           radial-gradient(2px 2px at 600px 80px, white, transparent),
                           radial-gradient(1px 1px at 640px 30px, white, transparent),
                           radial-gradient(2px 2px at 680px 60px, white, transparent),
                           radial-gradient(1px 1px at 720px 90px, white, transparent),
                           radial-gradient(2px 2px at 760px 20px, white, transparent)"
                    backgroundSize="800px 100px"
                    animation="twinkle 3s ease-in-out infinite"
                />

                {/* Floating Particles */}
                <Box
                    position="absolute"
                    top="10%"
                    left="10%"
                    width="8px"
                    height="8px"
                    bg="#00d4ff"
                    borderRadius="50%"
                    animation="float1 4s ease-in-out infinite"
                    boxShadow="0 0 16px #00d4ff"
                />
                <Box
                    position="absolute"
                    top="20%"
                    right="15%"
                    width="6px"
                    height="6px"
                    bg="#ff006e"
                    borderRadius="50%"
                    animation="float2 3s ease-in-out infinite"
                    boxShadow="0 0 12px #ff006e"
                />
                <Box
                    position="absolute"
                    bottom="30%"
                    left="20%"
                    width="10px"
                    height="10px"
                    bg="#ffd700"
                    borderRadius="50%"
                    animation="float3 5s ease-in-out infinite"
                    boxShadow="0 0 20px #ffd700"
                />
                <Box
                    position="absolute"
                    top="40%"
                    left="60%"
                    width="7px"
                    height="7px"
                    bg="#9d4edd"
                    borderRadius="50%"
                    animation="float1 3.5s ease-in-out infinite"
                    boxShadow="0 0 14px #9d4edd"
                />
                <Box
                    position="absolute"
                    bottom="20%"
                    right="25%"
                    width="9px"
                    height="9px"
                    bg="#06ffa5"
                    borderRadius="50%"
                    animation="float2 4.5s ease-in-out infinite"
                    boxShadow="0 0 18px #06ffa5"
                />

                {/* Winner Modal */}
                <Box
                    bg="rgba(255, 255, 255, 0.95)"
                    backdropFilter="blur(10px)"
                    borderRadius="24px"
                    p={12}
                    textAlign="center"
                    boxShadow="0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                    border="2px solid rgba(255, 255, 255, 0.2)"
                    animation="modalAppear 0.8s ease-out"
                    maxW="90vw"
                    maxH="90vh"
                >
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        color={winnerColor}
                        mb={6}
                        textShadow={`0 0 20px ${winnerColor}`}
                        animation="pulse 2s ease-in-out infinite"
                    >
                        🚀 {winnerName} Wins! 🏆
                    </Text>

                    <Text
                        fontSize="xl"
                        color="#333"
                        mb={8}
                        fontWeight="600"
                    >
                        Final Score: {gameState.player1.score} - {gameState.player2.score}
                    </Text>

                    <Button
                        onClick={resetGame}
                        bg="linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
                        color="white"
                        borderRadius="12px"
                        px={8}
                        py={4}
                        fontSize="lg"
                        fontWeight="bold"
                        boxShadow="0 4px 15px rgba(102, 126, 234, 0.4)"
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)'
                        }}
                        transition="all 0.3s ease"
                    >
                        🌌 Return to Space
                    </Button>
                </Box>
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
            className="pong-game-container"
            overflow="hidden"
            ref={gameContainerRef}
            zIndex={3}
            css={{
                '@media (display-mode: fullscreen)': {
                    width: '100%',
                    height: '100%'
                },
                // Prevent iOS rubber band effect
                overscrollBehavior: 'none',
                WebkitOverflowScrolling: 'touch'
            }}
        >
            {/* Top Panel - Scores */}
            <Flex
                position="absolute"
                top="0"
                left="0"
                right="0"
                height={{ base: "40px", md: "50px", lg: "60px" }}
                bg="rgba(0,0,0,0.8)"
                align="center"
                justify="space-between"
                px={{ base: 3, md: 6, lg: 8, xl: 7 }}
                zIndex={2}
            >
                {/* Centered Scores */}
                <Box flex="1" textAlign="center" >
                    <HStack
                        spacing={{ base: 3, md: 6, lg: 8, xl: 10 }}
                        mr={{ base: 5, md: 5, lg: 5, xl: 7 }}
                        width={{ base: "100%", md: "auto", lg: "auto", xl: "20%" }}
                        justify="right"
                    >
                        <Text
                            color="#00d4ff"
                            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                            fontWeight="bold"
                        // mr={{ base: 2, md: 2, lg: 2, xl: 3 }}
                        >
                            P1: {gameState.player1.score}
                        </Text>
                        <Text
                            color="#ff006e"
                            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                            fontWeight="bold"
                            mr={{ base: 2, md: 2, lg: 2, xl: 6 }}

                        >
                            P2: {gameState.player2.score}
                        </Text>
                    </HStack>
                </Box>

                {/* Right-aligned Buttons */}
                <HStack
                    spacing={{ base: 2, md: 3 }}
                // ml="auto"
                >
                    <Button
                        colorScheme={gameState.gameRunning ? "red" : "green"}
                        onClick={() =>
                            setGameState((prev) => ({ ...prev, gameRunning: !prev.gameRunning }))
                        }
                        size={{ base: "xs", md: "sm" }}
                        // variant="outline"
                        // bg="white"
                    >
                        {gameState.gameRunning ? "⏸ Pause" : "▶ Start"}
                    </Button>
                    <Button
                        colorScheme="orange"
                        onClick={resetGame}
                        size={{ base: "xs", md: "sm" }}
                    >
                        ↺ Reset Game
                    </Button>
                    <Button
                        colorScheme="purple"
                        onClick={requestFullScreen}
                        size={{ base: "xs", md: "sm" }}
                    >
                        ⛶  Full Screen
                    </Button>
                </HStack>
            </Flex>


            {/* Game Canvas */}
            <Box
                position="absolute"
                top={{ base: "40px", md: "60px", lg: "60px", xl: "60px" }}
                left="0"
                right="0"
                bottom="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <canvas
                    ref={canvasRef}
                    width={gameSize.width}
                    height={gameSize.height}
                    style={{
                        border: deviceType === 'mobile' ? 'none' : '2px solid #9d4edd',
                        borderRadius: deviceType === 'mobile' ? '0' : '8px',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        touchAction: 'none',
                        userSelect: 'none',
                        WebkitUserSelect: 'none'
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                />
            </Box>

            {/* Question Modal - Now inside the fullscreen container */}
            <Modal
                isOpen={isOpen}
                onClose={() => { }}
                closeOnOverlayClick={false}
                size="lg"
                // Add portalProps to render inside the current container
                portalProps={{
                    containerRef: gameContainerRef
                }}
            >
                <ModalOverlay
                    bg="blackAlpha.800"
                    // Put overlay behind the modal content
                    zIndex={4}
                    // Make overlay non-interactive so clicks pass through
                    pointerEvents="none"
                />
                <ModalContent
                    bg="white"
                    border="2px solid"
                    borderColor="purple.400"
                    // Ensure modal content appears above overlay
                    zIndex={5}
                    // Center the modal properly in fullscreen
                    position="relative"
                    top="auto"
                    left="auto"
                    transform="none"
                    m="auto"
                    mt="10vh"
                    // Ensure pointer events work
                    pointerEvents="auto"
                >
                    <ModalHeader bg="purple.500" color="white" borderRadius="md md 0 0">
                        🧠 {gameState.questionTriggeredBy === 'player1' ? 'Player 1' : 'Player 2'}'s Question
                    </ModalHeader>
                    <ModalBody p={6}>
                        {currentQuestion && (
                            <VStack spacing={4} align="stretch">
                                <Text
                                    whiteSpace="pre-wrap"
                                    fontSize="lg"
                                    fontWeight="semibold">
                                    {currentQuestion.question}
                                </Text>

                                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={3} w="full">
                                    {currentQuestion.options.map((option, index) => (
                                        <GridItem key={index}>
                                            <Button
                                                w="full"
                                                py={4} // Adds more vertical padding
                                                variant="outline"
                                                colorScheme="teal"
                                                onClick={() => handleAnswerSubmit(index)}
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
        </Box>
    );
};

export default Pong;