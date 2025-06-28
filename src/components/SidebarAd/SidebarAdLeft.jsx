import { useEffect, useRef, useState } from 'react';
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdLeft = ({ 
  position = 'left', 
  numberOfAds = 6,
  adSlots = [], // Array of slot IDs for multiple ads
  fallbackSlotId = '4333835944', // Fallback slot ID if adSlots is empty
  adClient = 'ca-pub-8107450590774580'
}) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const adRefs = useRef([]);
  const adInitialized = useRef([]);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Define breakpoint for medium screens
  const isMobile = width < 768;

  // Determine which slot IDs to use
  const getSlotIds = () => {
    if (adSlots.length > 0) {
      // If we have specific slot IDs, use them
      const slots = [];
      for (let i = 0; i < numberOfAds; i++) {
        // Cycle through available slot IDs if we need more ads than slots
        slots.push(adSlots[i % adSlots.length]);
      }
      return slots;
    } else {
      // Use fallback slot ID for all ads
      return Array(numberOfAds).fill(fallbackSlotId);
    }
  };

  const slotIds = getSlotIds();

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
    if (!isMobile) {
      // Ensure AdSense script is loaded
      const checkAdSenseAndInit = () => {
        if (window.adsbygoogle) {
          // Initialize ads one by one with proper error handling
          const initializeAdsSequentially = async () => {
            for (let index = 0; index < adRefs.current.length; index++) {
              const adRef = adRefs.current[index];
              
              if (adRef && adRef.offsetWidth > 0 && !adInitialized.current[index]) {
                try {
                  console.log(`Initializing ad ${index} with slot ${slotIds[index]}`);
                  
                  // Clear any existing ad content
                  const insElement = adRef.querySelector('.adsbygoogle');
                  if (insElement && insElement.innerHTML) {
                    console.log(`Ad ${index} already has content, skipping`);
                    adInitialized.current[index] = true;
                    continue;
                  }
                  
                  // Wait a bit before initializing
                  await new Promise(resolve => setTimeout(resolve, 300));
                  
                  (window.adsbygoogle = window.adsbygoogle || []).push({});
                  adInitialized.current[index] = true;
                  console.log(`Ad ${index} initialized successfully`);
                  
                  // Wait between ad initializations
                  await new Promise(resolve => setTimeout(resolve, 500));
                  
                } catch (adError) {
                  console.error(`AdSense error for ad ${index}:`, adError);
                }
              }
            }
          };
          
          initializeAdsSequentially();
        } else {
          console.log('AdSense not loaded yet, retrying...');
          setTimeout(checkAdSenseAndInit, 500);
        }
      };
      
      // Start checking after component mounts
      const timer = setTimeout(checkAdSenseAndInit, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, numberOfAds, slotIds]);

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
        key={`ad-${index}-${slotIds[index]}`} // Include slot ID in key for better React reconciliation
        ref={el => adRefs.current[index] = el}
        className={`ad-container-${index}`}
        width="100%"
        minHeight="600px"
        display="block"
        textAlign="center"
        mb={index < numberOfAds - 1 ? 4 : 0} // Add margin bottom except for last ad
        border="1px dashed gray" // Debug border to see ad containers
        position="relative"
      >
        {/* Debug info overlay */}
        {/* <Box
          position="absolute"
          top="2px"
          left="2px"
          fontSize="xs"
          bg="red.100"
          p={1}
          borderRadius="sm"
          zIndex={1}
        >
          Ad {index + 1}: {slotIds[index]}
        </Box> */}
        
        <ins
          className="adsbygoogle"
          style={{ 
            display: "block",
            width: "130px",
            height: "600px"
          }}
          data-ad-client={adClient}
          data-ad-slot={slotIds[index]} // Use different slot ID for each ad
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
        
        {/* Optional: Show debug info in development */}
        {process.env.NODE_ENV === 'development' && (
          <Box p={2} bg="yellow.100" borderRadius="md" fontSize="xs">
            <Text fontWeight="bold">Ad Debug Info:</Text>
            <Text>Ads: {numberOfAds}</Text>
            <Text>Slot IDs: {slotIds.join(', ')}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SidebarAdLeft;