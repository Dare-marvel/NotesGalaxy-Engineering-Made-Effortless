import { useEffect, useRef, useState } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdRight = ({ 
  position = 'right', 
}) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const [headerHeight, setHeaderHeight] = useState(0);
  const adsInitialized = useRef(false);
  const adContainerRefs = useRef([]);
  const retryCount = useRef(0);
  const maxRetries = 5;

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

  // Wait for AdSense script to load
  const waitForAdSense = () => {
    return new Promise((resolve) => {
      if (window.adsbygoogle) {
        resolve(true);
        return;
      }
      
      const checkAdSense = () => {
        if (window.adsbygoogle) {
          resolve(true);
        } else {
          setTimeout(checkAdSense, 100);
        }
      };
      
      checkAdSense();
    });
  };

  // Check if ads are visible in viewport
  const isElementInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Initialize ads with better error handling and retry logic
  const initializeAds = async () => {
    if (isMobile || adsInitialized.current) return;

    try {
      // Wait for AdSense to be available
      await waitForAdSense();
      
      // Wait a bit more for DOM to be ready
      await new Promise(resolve => setTimeout(resolve, 500));

      const adElements = document.querySelectorAll('.adsbygoogle');
      const uninitializedAds = Array.from(adElements).filter(ad => 
        !ad.getAttribute('data-adsbygoogle-status') && 
        ad.innerHTML.trim() === ''
      );

      if (uninitializedAds.length > 0) {
        console.log(`Initializing ${uninitializedAds.length} ads (attempt ${retryCount.current + 1})`);
        
        // Initialize ads one by one with delay
        for (let i = 0; i < uninitializedAds.length; i++) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            await new Promise(resolve => setTimeout(resolve, 200)); // Small delay between ads
          } catch (error) {
            console.error(`Error initializing ad ${i + 1}:`, error);
          }
        }
        
        adsInitialized.current = true;
        console.log('Ads initialization completed');
        
        // Verify ads loaded after some time
        setTimeout(() => {
          verifyAdsLoaded();
        }, 3000);
      }
    } catch (error) {
      console.error('AdSense initialization error:', error);
      
      // Retry logic
      if (retryCount.current < maxRetries) {
        retryCount.current++;
        console.log(`Retrying ad initialization... (${retryCount.current}/${maxRetries})`);
        setTimeout(initializeAds, 2000);
      }
    }
  };

  // Verify if ads loaded successfully and retry if needed
  const verifyAdsLoaded = () => {
    const adElements = document.querySelectorAll('.adsbygoogle');
    const failedAds = Array.from(adElements).filter(ad => 
      !ad.getAttribute('data-adsbygoogle-status') || 
      ad.getAttribute('data-adsbygoogle-status') === 'error'
    );

    if (failedAds.length > 0 && retryCount.current < maxRetries) {
      console.log(`${failedAds.length} ads failed to load, retrying...`);
      adsInitialized.current = false;
      retryCount.current++;
      setTimeout(initializeAds, 2000);
    }
  };

  // Initialize ads when component mounts and conditions are met
  useEffect(() => {
    if (!isMobile) {
      // Use intersection observer to init ads when they become visible
      const observer = new IntersectionObserver(
        (entries) => {
          const isAnyAdVisible = entries.some(entry => entry.isIntersecting);
          if (isAnyAdVisible && !adsInitialized.current) {
            initializeAds();
          }
        },
        { threshold: 0.1 }
      );

      // Observe all ad containers
      adContainerRefs.current.forEach(ref => {
        if (ref) observer.observe(ref);
      });

      // Fallback: Initialize after delay even if not visible
      const fallbackTimer = setTimeout(() => {
        if (!adsInitialized.current) {
          initializeAds();
        }
      }, 2000);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    }
  }, [isMobile]);

  // Reset when switching between mobile/desktop
  useEffect(() => {
    if (isMobile) {
      adsInitialized.current = false;
      retryCount.current = 0;
    }
  }, [isMobile]);

  // Handle visibility change (when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && !isMobile && !adsInitialized.current) {
        setTimeout(initializeAds, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isMobile]);

  // If on mobile, don't render the component at all
  if (isMobile) return null;

  const adConfigs = [
    { slot: '3152616213', id: 'ad-1' },
    { slot: '3253352242', id: 'ad-2' },
    { slot: '7001025560', id: 'ad-3' }
  ];

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
        {adConfigs.map((config, index) => (
          <Box
            key={config.id}
            ref={(el) => (adContainerRefs.current[index] = el)}
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