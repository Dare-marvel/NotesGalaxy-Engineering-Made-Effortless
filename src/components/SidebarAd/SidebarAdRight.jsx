import { useEffect, useRef, useState } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useAdSense } from '../../hooks/useAdSense'; // Import the hook

const SidebarAdRight = ({ 
  position = 'right', 
}) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const [headerHeight, setHeaderHeight] = useState(0);
  const containerRef = useRef(null);

  // Define breakpoint for medium screens
  const isMobile = width < 768;

  // Use the AdSense hook
  const { isAdSenseLoaded, initializeAds, resetAds } = useAdSense(!isMobile);

  // Ad configurations
  const adConfigs = [
    { slot: '3152616213', id: 'ad-1' },
    { slot: '3253352242', id: 'ad-2' },
    { slot: '7001025560', id: 'ad-3' }
  ];

  // Detect header height dynamically
  useEffect(() => {
    const detectHeaderHeight = () => {
      const headerSelectors = [
        'header',
        '.header',
        '.navbar',
        '.nav-bar',
        '[data-testid="header"]',
        '.chakra-ui-header'
      ];
      
      let detectedHeight = 0;
      
      for (const selector of headerSelectors) {
        const headerElement = document.querySelector(selector);
        if (headerElement) {
          detectedHeight = headerElement.offsetHeight;
          break;
        }
      }
      
      if (detectedHeight === 0) {
        const viewportTop = document.elementFromPoint(window.innerWidth / 2, 50);
        if (viewportTop && viewportTop !== document.body && viewportTop !== document.documentElement) {
          detectedHeight = 60;
        }
      }
      
      setHeaderHeight(detectedHeight);
    };

    detectHeaderHeight();
    window.addEventListener('resize', detectHeaderHeight);
    return () => window.removeEventListener('resize', detectHeaderHeight);
  }, []);

  // Initialize ads when conditions are met
  useEffect(() => {
    if (!isMobile && isAdSenseLoaded && containerRef.current) {
      const timer = setTimeout(() => {
        initializeAds(containerRef);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isMobile, isAdSenseLoaded, initializeAds]);

  // Handle mobile/desktop switching
  useEffect(() => {
    if (isMobile) {
      resetAds();
      // Clean up ads when switching to mobile
      if (containerRef.current) {
        const adElements = containerRef.current.querySelectorAll('.adsbygoogle');
        adElements.forEach(ad => {
          ad.innerHTML = '';
          ad.removeAttribute('data-adsbygoogle-status');
        });
      }
    }
  }, [isMobile, resetAds]);

  // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && !isMobile && isAdSenseLoaded && containerRef.current) {
        setTimeout(() => initializeAds(containerRef), 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isMobile, isAdSenseLoaded, initializeAds]);

  // If on mobile, don't render the component at all
  if (isMobile) return null;

  return (
    <Box
      ref={containerRef}
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
        {adConfigs.map((config, index) => (
          <Box
            key={`${config.id}-${Date.now()}-${index}`} // Unique key to prevent conflicts
            className={`ad-container-${index + 1}`}
            width="100%"
            minHeight="600px"
            display="block"
            textAlign="center"
            border="1px dashed gray"
            position="relative"
          >
            <ins
              className="adsbygoogle"
              style={{ 
                display: "block",
                width: "130px",
                height: "600px"
              }}
              data-ad-client="ca-pub-8107450590774580"
              data-ad-slot={config.slot}
              data-ad-format="vertical"
              data-full-width-responsive="true"
            />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default SidebarAdRight;