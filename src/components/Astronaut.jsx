import { useState, useEffect } from 'react';
import { Box, Button, Text, SlideFade, useDisclosure, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';
import astronaut from '../assets/astronaut.png';
import './Astronaut.css';

const Astronaut = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  // Color animation for contact button
  const [buttonColorIndex, setButtonColorIndex] = useState(0);
  const buttonColors = ['#00ff88', '#4d4dff', '#ff00ff', '#00ffff'];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setButtonColorIndex((prev) => (prev + 1) % buttonColors.length);
    }, 1000);

    // Timer to hide the component after 10 seconds
    const timer = setTimeout(() => {
      onClose();
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(colorInterval);
    };
  }, [onClose]);

  const handleClose = () => {
    onClose();
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <SlideFade in={isOpen} offsetY="20px">
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex={1000}
        display="flex"
        alignItems="flex-end"
      >
        {/* Popup Message */}
        <Box
          position="absolute"
          bottom={12}
          right={7}
          mb={3}
          mr={6}
          bg="rgba(253, 253, 255, 0.95)"
          boxShadow="0 0 20px rgba(88, 86, 214, 0.5)"
          borderRadius="xl"
          p={6}
          maxWidth="300px"
          border="2px solid transparent"
          _before={{
            content: '""',
            position: 'absolute',
            top: -1,
            right: -1,
            bottom: -1,
            left: -1,
            background: 'linear-gradient(45deg, #00ff88, #4d4dff, #ff00ff, #00ffff)',
            borderRadius: 'xl',
            zIndex: -1,
            animation: '${borderGlow} 3s linear infinite',
          }}
        >
          <IconButton
            position="absolute"
            right="2"
            top="2"
            size="xs"
            aria-label="Close"
            icon={<CloseIcon />}
            onClick={handleClose}
            variant="ghost"
            color="rgba(17, 8, 85, 0.8)"
            _hover={{
              bg: 'rgba(255, 255, 255, 0.1)',
              color: 'purple'
            }}
          />
          
          <Text 
            mb={4} 
            color="#6111ef"
            fontSize="sm"
            fontWeight="500"
            lineHeight="1.6"
          >
            You can also help out your friends by sending me notes via the contact us page
          </Text>
          
          <Button
            size="sm"
            bg={buttonColors[buttonColorIndex]}
            color="black"
            mr={4}
            onClick={() => navigate('/contact')}
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0 15px currentColor'
            }}
            transition="all 0.3s ease"
            zIndex={3}
          >
            Contact Us
          </Button>
        </Box>

        {/* Astronaut Image */}
        <Box
          as="img"
          src={astronaut}
          alt="Astronaut"
          position={'relative'}
          width="200px"
          height="auto"
          top={10}
          left={12}
          cursor="pointer"
          // onClick={handleClose}
          filter="drop-shadow(0 0 10px rgba(88, 86, 214, 0.5))"
          transition="transform 0.3s ease"
          _hover={{
            transform: 'scale(1.05)'
          }}
        />
      </Box>
    </SlideFade>
  );
};

export default Astronaut;