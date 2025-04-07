import { useState, useEffect, memo } from 'react';
import { Box, Button, Text, SlideFade, useDisclosure, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import astronaut from '../assets/astronaut.png';
import './Astronaut.css';

// Custom hook for preference storage
const usePreferenceStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Could not save preference:", error);
    }
  }, [key, value]);

  return [value, setValue];
};

const Astronaut = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const navigate = useNavigate();
  
  // Store user preference
  const [hasClosedBefore, setHasClosedBefore] = usePreferenceStorage('astronaut-closed', false);
  const [shouldRender, setShouldRender] = useState(!hasClosedBefore);

  // Color animation with reduced resources
  const [buttonColorIndex, setButtonColorIndex] = useState(0);
  const buttonColors = ['#00ff88', '#4d4dff', '#ff00ff', '#00ffff'];

  useEffect(() => {
    if (!shouldRender) return;
    
    // Reduced timing for color changes to save resources
    const colorInterval = setInterval(() => {
      setButtonColorIndex((prev) => (prev + 1) % buttonColors.length);
    }, 2000); // Increased to 2s to reduce updates

    // Timer with respect to user preferences
    const timer = setTimeout(() => {
      onClose();
      setTimeout(() => setShouldRender(false), 300); // Allow animation to complete
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(colorInterval);
    };
  }, [onClose, shouldRender]);

  const handleClose = () => {
    onClose();
    setHasClosedBefore(true); // Remember user preference
    setTimeout(() => setShouldRender(false), 300); // Allow animation to complete
  };

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Skip animations for users who prefer reduced motion
      if (hasClosedBefore) {
        setShouldRender(false);
      }
    }
  }, [hasClosedBefore]);

  if (!shouldRender) {
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
        width="200px" // Set explicit width to prevent layout shift
        height="240px" // Set explicit height to prevent layout shift
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
          aria-live="polite" // Accessibility improvement
          role="alert" // Accessibility improvement
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
            animation: 'borderGlow 3s linear infinite',
          }}
        >
          <IconButton
            position="absolute"
            right="2"
            top="2"
            size="xs"
            aria-label="Close notification"
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
            aria-label="Go to contact page"
          >
            Contact Us
          </Button>
        </Box>

        {/* Astronaut Image with Lazy Loading */}
        <Box
          width="200px"
          height="auto"
          position="relative"
          top={10}
          left={12}
        >
          <LazyLoadImage
            alt="Astronaut"
            src={astronaut}
            effect="blur"
            width={200}
            height={200}
            style={{
              cursor: "pointer",
              filter: "drop-shadow(0 0 10px rgba(88, 86, 214, 0.5))",
              transition: "transform 0.3s ease"
            }}
            wrapperProps={{
              style: {
                width: '100%',
                height: '100%'
              }
            }}
          />
        </Box>
      </Box>
    </SlideFade>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(Astronaut);