import { useEffect, useRef, useState } from 'react';
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdRight = ({ 
  position = 'right', 
  numberOfAds = 3,
  adSlots = [], // Array of slot IDs for multiple ads
  fallbackSlotId = '3152616213', // Fallback slot ID if adSlots is empty
  adClient = 'ca-pub-8107450590774580'
}) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const adRefs = useRef([]);
  const adInitialized = useRef([]);
  const adsPushed = useRef([]); // Track which ads have been pushed to adsbygoogle
  const [headerHeight, setHeaderHeight] = useState(0);
  const componentId = useRef(`sidebar-ads-${Date.now()}-${Math.random()}`);

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
    adsPushed.current = Array(numberOfAds).fill(false);
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

  // Clean up function to properly remove ads
  const cleanupAds = () => {
    adRefs.current.forEach((adRef, index) => {
      if (adRef) {
        const insElements = adRef.querySelectorAll('.adsbygoogle');
        insElements.forEach(ins => {
          // Remove any existing ad content
          ins.innerHTML = '';
          // Remove data attributes that might prevent re-initialization
          ins.removeAttribute('data-adsbygoogle-status');
        });
      }
    });
    adInitialized.current = Array(numberOfAds).fill(false);
    adsPushed.current = Array(numberOfAds).fill(false);
  };

  useEffect(() => {
    if (!isMobile) {
      // Clean up any existing ads first
      cleanupAds();
      
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
                  
                  // Find the ins element for this ad
                  const insElement = adRef.querySelector('.adsbygoogle');
                  if (!insElement) {
                    console.warn(`No ins element found for ad ${index}`);
                    continue;
                  }

                  // Check if this ad has already been processed by AdSense
                  const adStatus = insElement.getAttribute('data-adsbygoogle-status');
                  if (adStatus === 'done' || insElement.innerHTML.trim() !== '') {
                    console.log(`Ad ${index} already initialized, skipping`);
                    adInitialized.current[index] = true;
                    adsPushed.current[index] = true;
                    continue;
                  }

                  // Check if we've already pushed this ad to the queue
                  if (adsPushed.current[index]) {
                    console.log(`Ad ${index} already pushed to queue, skipping`);
                    continue;
                  }
                  
                  // Wait a bit before initializing
                  await new Promise(resolve => setTimeout(resolve, 300));
                  
                  // Mark as pushed before actually pushing to prevent duplicate calls
                  adsPushed.current[index] = true;
                  
                  // Push to AdSense queue
                  (window.adsbygoogle = window.adsbygoogle || []).push({});
                  adInitialized.current[index] = true;
                  console.log(`Ad ${index} pushed to AdSense queue successfully`);
                  
                  // Wait between ad initializations
                  await new Promise(resolve => setTimeout(resolve, 500));
                  
                } catch (adError) {
                  console.error(`AdSense error for ad ${index}:`, adError);
                  // Reset the pushed flag on error so we can retry
                  adsPushed.current[index] = false;
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
      return () => {
        clearTimeout(timer);
        // Don't clean up ads on unmount as it might interfere with AdSense
      };
    }
  }, [isMobile, numberOfAds, slotIds]);

  // Reset initialization flags when mobile state changes
  useEffect(() => {
    if (isMobile) {
      // Reset flags but don't clean DOM elements when switching to mobile
      adInitialized.current = Array(numberOfAds).fill(false);
      adsPushed.current = Array(numberOfAds).fill(false);
    }
  }, [isMobile, numberOfAds]);

  // If on mobile, don't render the component at all
  if (isMobile) return null;

  // Generate ad units based on numberOfAds
  const renderAdUnits = () => {
    return Array.from({ length: numberOfAds }, (_, index) => (
      <Box
        key={`${componentId.current}-ad-${index}-${slotIds[index]}`} // Unique key with component instance
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
          key={`ins-${componentId.current}-${index}`} // Unique key for ins element
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
        {/* {process.env.NODE_ENV === 'development' && (
          <Box p={2} bg="yellow.100" borderRadius="md" fontSize="xs">
            <Text fontWeight="bold">Ad Debug Info:</Text>
            <Text>Ads: {numberOfAds}</Text>
            <Text>Slot IDs: {slotIds.join(', ')}</Text>
            <Text>Component ID: {componentId.current}</Text>
          </Box>
        )} */}
      </VStack>
    </Box>
  );
};

export default SidebarAdRight;