import { useEffect, useRef, useState } from 'react';
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdLeft = ({ position = 'left' }) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const adRef = useRef(null);
  const adInitialized = useRef(new Set()); // Track which ads are initialized
  const [headerHeight, setHeaderHeight] = useState(0);
  const [availableHeight, setAvailableHeight] = useState(0);

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
      // Calculate available height for ads
      const availableSpace = window.innerHeight - detectedHeight - 32; // 32px for padding
      setAvailableHeight(availableSpace);
    };

    detectHeaderHeight();
    
    // Re-detect on window resize
    window.addEventListener('resize', detectHeaderHeight);
    return () => window.removeEventListener('resize', detectHeaderHeight);
  }, []);

  // Calculate how many ads can fit
  const getAdConfiguration = () => {
    if (availableHeight <= 0) return [];
    
    const adConfigs = [];
    let remainingHeight = availableHeight;
    let adIndex = 0;
    
    // Priority order: larger ads first, then smaller ones to fill remaining space
    const adTypes = [
      { width: 120, height: 600, format: 'rectangle', name: 'skyscraper' },
      { width: 120, height: 240, format: 'rectangle', name: 'vertical-banner' },
      { width: 120, height: 120, format: 'rectangle', name: 'square' },
      { width: 120, height: 90, format: 'rectangle', name: 'small-rectangle' }
    ];
    
    // First, try to fit the largest ads
    for (const adType of adTypes) {
      while (remainingHeight >= adType.height + 16) { // 16px margin between ads
        adConfigs.push({
          ...adType,
          id: `ad-${adIndex}`,
          marginBottom: adIndex === 0 ? 0 : 4
        });
        remainingHeight -= (adType.height + 16);
        adIndex++;
        
        // Limit total ads to prevent too many requests
        if (adConfigs.length >= 4) break;
      }
      if (adConfigs.length >= 4) break;
    }
    
    return adConfigs;
  };

  const adConfigs = getAdConfiguration();

  useEffect(() => {
    if (!isMobile && window.adsbygoogle && adConfigs.length > 0) {
      const timer = setTimeout(() => {
        adConfigs.forEach((config, index) => {
          try {
            if (!adInitialized.current.has(config.id)) {
              const adElement = document.querySelector(`#${config.id} .adsbygoogle`);
              if (adElement && adElement.offsetWidth > 0) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                adInitialized.current.add(config.id);
              }
            }
          } catch (error) {
            console.error(`AdSense error for ${config.id}:`, error);
          }
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isMobile, adConfigs.length]);

  // Reset initialization when component unmounts or mobile state changes
  useEffect(() => {
    if (isMobile) {
      adInitialized.current.clear();
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
      pt={4} // Extra top padding to avoid header overlap
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <VStack spacing={2} align="stretch">
        {/* Multiple Google AdSense Ad Units */}
        {adConfigs.map((config, index) => (
          <Box
            key={config.id}
            id={config.id}
            ref={index === 0 ? adRef : null}
            className="ad-container"
            width="100%"
            height={`${config.height}px`}
            display="block"
            textAlign="center"
            mb={index < adConfigs.length - 1 ? 4 : 0}
            flexShrink={0}
          >
            <ins
              className="adsbygoogle"
              style={{ 
                display: "block",
                width: `${config.width}px`,
                height: `${config.height}px`
              }}
              data-ad-client="ca-pub-8107450590774580"
              data-ad-slot="4333835944"
              data-ad-format={config.format}
              data-full-width-responsive="false"
            />
          </Box>
        ))}
        
        {/* Show a message if no ads can fit */}
        {adConfigs.length === 0 && availableHeight > 0 && (
          <Box
            width="100%"
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xs"
            color="gray.500"
            textAlign="center"
          >
            <Text>Ad space too small</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SidebarAdLeft;