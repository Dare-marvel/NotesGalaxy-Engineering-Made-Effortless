import { useEffect, useRef, useState } from 'react';
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdLeft = ({ position = 'left' }) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const adRef = useRef(null);
  const adInitialized = useRef(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Define breakpoint for medium screens
  const isMobile = width < 768;

  // Detect header height dynamically
  useEffect(() => {
    const detectHeaderHeight = () => {
      // Common header/navbar selectors - adjust these based on your app
      const headerSelectors = [
        'header',
        '.header',
        '.navbar',
        '.nav-bar',
        '[data-testid="header"]',
        '.chakra-ui-header' // if you're using Chakra UI header
      ];
      
      let detectedHeight = 0;
      
      for (const selector of headerSelectors) {
        const headerElement = document.querySelector(selector);
        if (headerElement) {
          detectedHeight = headerElement.offsetHeight;
          break;
        }
      }
      
      // Fallback: check if there's significant content in the first 100px
      if (detectedHeight === 0) {
        const viewportTop = document.elementFromPoint(window.innerWidth / 2, 50);
        if (viewportTop && viewportTop !== document.body && viewportTop !== document.documentElement) {
          detectedHeight = 60; // reasonable default
        }
      }
      
      setHeaderHeight(detectedHeight);
    };

    detectHeaderHeight();
    
    // Re-detect on window resize
    window.addEventListener('resize', detectHeaderHeight);
    return () => window.removeEventListener('resize', detectHeaderHeight);
  }, []);

  useEffect(() => {
    if (!isMobile && window.adsbygoogle && !adInitialized.current) {
      const timer = setTimeout(() => {
        try {
          // Check if the ad container exists and has proper dimensions
          if (adRef.current && adRef.current.offsetWidth > 0) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            adInitialized.current = true;
          }
        } catch (error) {
          console.error('AdSense error:', error);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  // Reset initialization flag when component unmounts or mobile state changes
  useEffect(() => {
    if (isMobile) {
      adInitialized.current = false;
    }
  }, [isMobile]);

  // If on mobile, don't render the component at all
  if (isMobile) return null;

  return (
    <Box
      position="fixed"
      top={`${headerHeight}px`}
      bottom="0"
      left={position === 'left' ? "0" : "auto"}
      right={position === 'right' ? "0" : "auto"}
      width="160px" // Increased from 100px for better ad display
      height={`calc(100vh - ${headerHeight}px)`}
      bg={bgColor}
      borderLeft={position === 'right' ? '1px solid' : 'none'}
      borderRight={position === 'left' ? '1px solid' : 'none'}
      borderColor={borderColor}
      p={2} // Reduced padding to maximize ad space
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <VStack spacing={4} align="stretch">
        {/* Google AdSense Ad Unit */}
        <Box
          ref={adRef}
          className="ad-container"
          width="100%"
          minHeight="600px"
          display="block" // Changed from flex
          textAlign="center"
        >
          <ins
            className="adsbygoogle"
            style={{ 
              display: "block",
              width: "120px",
              height: "600px"
            }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="4333835944"
            data-ad-format="rectangle"
            data-full-width-responsive="false"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default SidebarAdLeft;