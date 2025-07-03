import { useEffect, useRef, useState } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdRight = ({ position = 'right' }) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const [headerHeight, setHeaderHeight] = useState(0);
  const [adsLoaded, setAdsLoaded] = useState([false, false, false]);
  const retryCounts = useRef([0, 0, 0]);
  const maxRetries = 3;

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

  const retryAdLoad = (adIndex) => {
    if (retryCounts.current[adIndex] >= maxRetries) return;
    
    retryCounts.current[adIndex]++;
    
    const adContainer = document.querySelector(`.ad-container-${adIndex + 1}`);
    if (adContainer) {
      const adElement = adContainer.querySelector('.adsbygoogle');
      if (adElement && !adElement.getAttribute('data-adsbygoogle-status')) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log(`Retrying ad ${adIndex + 1}, attempt ${retryCounts.current[adIndex]}`);
        } catch (error) {
          console.error(`Retry failed for ad ${adIndex + 1}:`, error);
          setTimeout(() => retryAdLoad(adIndex), 2000 * retryCounts.current[adIndex]);
        }
      }
    }
  };

  // Initialize ads
  useEffect(() => {
    if (!isMobile) {
      const initializeAds = () => {
        if (window.adsbygoogle) {
          try {
            const adElements = document.querySelectorAll('.adsbygoogle');
            
            adElements.forEach((ad, index) => {
              if (!ad.getAttribute('data-adsbygoogle-status') && ad.innerHTML.trim() === '') {
                try {
                  (window.adsbygoogle = window.adsbygoogle || []).push({});
                  
                  // Set up observer for this ad
                  const observer = new MutationObserver((mutations) => {
                    if (ad.getAttribute('data-adsbygoogle-status') === 'done') {
                      setAdsLoaded(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                      });
                      observer.disconnect();
                    } else if (ad.getAttribute('data-adsbygoogle-status') === 'error') {
                      retryAdLoad(index);
                      observer.disconnect();
                    }
                  });
                  
                  observer.observe(ad, { attributes: true });
                  
                } catch (error) {
                  console.error(`Error initializing ad ${index + 1}:`, error);
                  retryAdLoad(index);
                }
              }
            });
          } catch (error) {
            console.error('AdSense initialization error:', error);
          }
        } else {
          // Load AdSense script if not present
          if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            script.async = true;
            script.onerror = () => {
              console.error('Failed to load AdSense script');
              setTimeout(initializeAds, 2000);
            };
            document.head.appendChild(script);
          }
          setTimeout(initializeAds, 500);
        }
      };

      // Initial attempt with delay to allow page to settle
      const timer = setTimeout(initializeAds, 1000);
      
      // Set up periodic checks
      const interval = setInterval(() => {
        if (adsLoaded.some(loaded => !loaded)) {
          initializeAds();
        }
      }, 10000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [isMobile, adsLoaded]);

  // Reset when switching between mobile/desktop
  useEffect(() => {
    if (isMobile) {
      retryCounts.current = [0, 0, 0];
      setAdsLoaded([false, false, false]);
    }
  }, [isMobile]);

  if (isMobile) return null;

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
        {/* Ad 1 */}
        <Box
          className="ad-container-1"
          width="100%"
          minHeight="600px"
          display="block"
          textAlign="center"
          border="1px dashed gray"
          position="relative"
        >
          {!adsLoaded[0] && (
            <Box 
              width="130px" 
              height="600px" 
              bg="gray.100" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
            >
              Loading ad...
            </Box>
          )}
          <ins
            className="adsbygoogle"
            style={{ 
              display: adsLoaded[0] ? "block" : "none",
              width: "130px",
              height: "600px"
            }}
            data-ad-client='ca-pub-8107450590774580'
            data-ad-slot='3152616213'
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>

        {/* Ad 2 */}
        <Box
          className="ad-container-2"
          width="100%"
          minHeight="600px"
          display="block"
          textAlign="center"
          border="1px dashed gray"
          position="relative"
        >
          {!adsLoaded[1] && (
            <Box 
              width="130px" 
              height="600px" 
              bg="gray.100" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
            >
              Loading ad...
            </Box>
          )}
          <ins
            className="adsbygoogle"
            style={{ 
              display: adsLoaded[1] ? "block" : "none",
              width: "130px",
              height: "600px"
            }}
            data-ad-client='ca-pub-8107450590774580'
            data-ad-slot='3253352242'
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>

        {/* Ad 3 */}
        <Box
          className="ad-container-3"
          width="100%"
          minHeight="600px"
          display="block"
          textAlign="center"
          border="1px dashed gray"
          position="relative"
        >
          {!adsLoaded[2] && (
            <Box 
              width="130px" 
              height="600px" 
              bg="gray.100" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
            >
              Loading ad...
            </Box>
          )}
          <ins
            className="adsbygoogle"
            style={{ 
              display: adsLoaded[2] ? "block" : "none",
              width: "130px",
              height: "600px"
            }}
            data-ad-client='ca-pub-8107450590774580'
            data-ad-slot='7001025560'
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default SidebarAdRight;