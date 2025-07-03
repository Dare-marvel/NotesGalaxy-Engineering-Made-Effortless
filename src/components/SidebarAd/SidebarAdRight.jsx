import { useEffect, useRef, useState, useCallback } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdRight = ({ 
  position = 'right', 
}) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const [headerHeight, setHeaderHeight] = useState(0);
  const [adsLoaded, setAdsLoaded] = useState(false);
  const componentRef = useRef(null);
  const initializationRef = useRef(false);
  const adElementsRef = useRef([]);
  const retryTimeoutRef = useRef(null);

  // Define breakpoint for medium screens
  const isMobile = width < 768;

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

  // Clean up function to remove ads properly
  const cleanupAds = useCallback(() => {
    if (componentRef.current) {
      const adElements = componentRef.current.querySelectorAll('.adsbygoogle');
      adElements.forEach(ad => {
        // Remove any existing ad content
        ad.innerHTML = '';
        // Remove status attributes
        ad.removeAttribute('data-adsbygoogle-status');
        ad.removeAttribute('data-ad-status');
      });
    }
    setAdsLoaded(false);
    initializationRef.current = false;
    
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  }, []);

  // Initialize ads with proper checks
  const initializeAds = useCallback(async () => {
    if (isMobile || initializationRef.current || !componentRef.current) {
      return;
    }

    try {
      // Wait for AdSense to be available
      if (!window.adsbygoogle) {
        console.log('AdSense not loaded yet, waiting...');
        retryTimeoutRef.current = setTimeout(initializeAds, 1000);
        return;
      }

      // Get fresh ad elements from the current component
      const adElements = componentRef.current.querySelectorAll('.adsbygoogle');
      
      if (adElements.length === 0) {
        console.log('No ad elements found');
        return;
      }

      // Check if any ads are already initialized
      const uninitializedAds = Array.from(adElements).filter(ad => 
        !ad.getAttribute('data-adsbygoogle-status') && 
        ad.innerHTML.trim() === ''
      );

      if (uninitializedAds.length === 0) {
        console.log('All ads already initialized');
        setAdsLoaded(true);
        return;
      }

      console.log(`Initializing ${uninitializedAds.length} ads`);
      initializationRef.current = true;

      // Initialize ads with individual error handling
      let successCount = 0;
      for (let i = 0; i < uninitializedAds.length; i++) {
        const ad = uninitializedAds[i];
        
        try {
          // Double-check this specific ad isn't already initialized
          if (!ad.getAttribute('data-adsbygoogle-status') && ad.innerHTML.trim() === '') {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            successCount++;
            console.log(`Ad ${i + 1} initialized successfully`);
          }
        } catch (error) {
          console.error(`Error initializing ad ${i + 1}:`, error);
          // Continue with other ads even if one fails
        }
        
        // Small delay between ads
        if (i < uninitializedAds.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      if (successCount > 0) {
        setAdsLoaded(true);
        console.log(`Successfully initialized ${successCount} ads`);
      }

    } catch (error) {
      console.error('Ad initialization failed:', error);
      initializationRef.current = false;
      
      // Retry after delay
      retryTimeoutRef.current = setTimeout(initializeAds, 3000);
    }
  }, [isMobile]);

  // Main effect to handle ad initialization
  useEffect(() => {
    if (isMobile) {
      cleanupAds();
      return;
    }

    // Wait for component to be properly mounted
    const timer = setTimeout(() => {
      if (componentRef.current && !initializationRef.current) {
        initializeAds();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isMobile, initializeAds, cleanupAds]);

  // Handle visibility change (when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && !isMobile && !adsLoaded && componentRef.current) {
        setTimeout(initializeAds, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isMobile, adsLoaded, initializeAds]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupAds();
    };
  }, [cleanupAds]);

  // If on mobile, don't render the component at all
  if (isMobile) return null;

  const adConfigs = [
    { slot: '3152616213', id: 'ad-1' },
    { slot: '3253352242', id: 'ad-2' },
    { slot: '7001025560', id: 'ad-3' }
  ];

  return (
    <Box
      ref={componentRef}
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
            key={`${config.id}-${index}`}
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