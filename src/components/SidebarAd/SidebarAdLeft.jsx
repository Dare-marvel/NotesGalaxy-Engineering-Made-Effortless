import { useEffect, useRef, useState } from 'react';
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdLeft = ({ position = 'left', numberOfAds = 6 }) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const adRefs = useRef([]);
  const adInitialized = useRef([]);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Define breakpoint for medium screens
  const isMobile = width < 768;

  // Initialize refs arrays based on numberOfAds
  useEffect(() => {
    adRefs.current = Array(numberOfAds).fill().map((_, i) => adRefs.current[i] || React.createRef());
    adInitialized.current = Array(numberOfAds).fill(false);
  }, [numberOfAds]);

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
    if (!isMobile && window.adsbygoogle) {
      const timer = setTimeout(() => {
        try {
          // Initialize each ad unit
          adRefs.current.forEach((adRef, index) => {
            if (adRef.current && 
                adRef.current.offsetWidth > 0 && 
                !adInitialized.current[index]) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              adInitialized.current[index] = true;
            }
          });
        } catch (error) {
          console.error('AdSense error:', error);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isMobile, numberOfAds]);

  // Reset initialization flag when component unmounts or mobile state changes
  useEffect(() => {
    if (isMobile) {
      adInitialized.current = Array(numberOfAds).fill(false);
    }
  }, [isMobile, numberOfAds]);

  // If on mobile, don't render the component at all
  if (isMobile) return null;

  // Generate ad units based on numberOfAds
  const renderAdUnits = () => {
    return Array.from({ length: numberOfAds }, (_, index) => (
      <Box
        key={index}
        ref={el => adRefs.current[index] = el}
        className={`ad-container-${index}`}
        width="100%"
        minHeight="600px"
        display="block"
        textAlign="center"
        mb={index < numberOfAds - 1 ? 4 : 0} // Add margin bottom except for last ad
      >
        <ins
          className="adsbygoogle"
          style={{ 
            display: "block",
            width: "120px",
            height: "600px"
          }}
          data-ad-client="ca-pub-8107450590774580"
          data-ad-slot="4333835944" // You might want to use different slot IDs
          data-ad-format="vertical"
          data-full-width-responsive="true"
        />
      </Box>
    ));
  };

  return (
    <Box
      position="fixed"
      top={`${headerHeight}px`}
      bottom="0"
      left={position === 'left' ? "0" : "auto"}
      right={position === 'right' ? "0" : "auto"}
      width="160px"
      height={`calc(100vh - ${headerHeight}px)`}
      bg={bgColor}
      borderLeft={position === 'right' ? '1px solid' : 'none'}
      borderRight={position === 'left' ? '1px solid' : 'none'}
      borderColor={borderColor}
      p={2}
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
        {renderAdUnits()}
      </VStack>
    </Box>
  );
};

export default SidebarAdLeft;