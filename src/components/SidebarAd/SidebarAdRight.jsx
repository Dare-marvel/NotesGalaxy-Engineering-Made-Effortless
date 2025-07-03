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
  const resizeObservers = useRef([]);

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

  const retryAdLoad = (index) => {
    if (retryCounts.current[index] >= maxRetries) return;
    
    retryCounts.current[index]++;
    
    const container = document.querySelector(`.ad-container-${index + 1}`);
    if (container) {
      const adElement = container.querySelector('.adsbygoogle');
      if (adElement && !adElement.getAttribute('data-adsbygoogle-status')) {
        const rect = container.getBoundingClientRect();
        if (rect.width > 0) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log(`Retrying ad ${index + 1}, attempt ${retryCounts.current[index]}`);
          } catch (error) {
            console.error(`Retry failed for ad ${index + 1}:`, error);
            setTimeout(() => retryAdLoad(index), 2000 * retryCounts.current[index]);
          }
        }
      }
    }
  };

  const initializeAd = (index) => {
    const container = document.querySelector(`.ad-container-${index + 1}`);
    if (container) {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0) {
        const adElement = container.querySelector('.adsbygoogle');
        if (adElement && !adElement.getAttribute('data-adsbygoogle-status')) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            
            // Set up mutation observer for this ad
            const observer = new MutationObserver((mutations) => {
              if (adElement.getAttribute('data-adsbygoogle-status') === 'done') {
                setAdsLoaded(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
                observer.disconnect();
              } else if (adElement.getAttribute('data-adsbygoogle-status') === 'error') {
                retryAdLoad(index);
                observer.disconnect();
              }
            });
            
            observer.observe(adElement, { attributes: true });
            
          } catch (error) {
            console.error(`Error initializing ad ${index + 1}:`, error);
            retryAdLoad(index);
          }
        }
      }
    }
  };

  // Initialize ads
  useEffect(() => {
    if (!isMobile) {
      // Load AdSense script if not present
      if (!window.adsbygoogle && !document.querySelector('script[src*="adsbygoogle.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.onerror = () => {
          console.error('Failed to load AdSense script');
          setTimeout(() => initializeAllAds(), 2000);
        };
        document.head.appendChild(script);
      }

      const initializeAllAds = () => {
        // Set up resize observers for each ad container
        [0, 1, 2].forEach(index => {
          const container = document.querySelector(`.ad-container-${index + 1}`);
          if (container) {
            const observer = new ResizeObserver(entries => {
              for (let entry of entries) {
                const { width } = entry.contentRect;
                if (width > 0 && !adsLoaded[index]) {
                  initializeAd(index);
                }
              }
            });
            observer.observe(container);
            resizeObservers.current.push(observer);
          }
        });

        // Initial attempt to load visible ads
        [0, 1, 2].forEach(index => {
          const container = document.querySelector(`.ad-container-${index + 1}`);
          if (container) {
            const rect = container.getBoundingClientRect();
            if (rect.width > 0) {
              initializeAd(index);
            }
          }
        });
      };

      // Start initialization after short delay
      const timer = setTimeout(initializeAllAds, 1000);
      
      return () => {
        clearTimeout(timer);
        // Clean up observers
        resizeObservers.current.forEach(observer => observer.disconnect());
        resizeObservers.current = [];
      };
    }
  }, [isMobile]);

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
          width="160px"
          minHeight="600px"
          display="block"
          visibility={adsLoaded[0] ? "visible" : "hidden"}
          textAlign="center"
          position="relative"
        >
          {!adsLoaded[0] && (
            <Box 
              width="100%"
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
              display: "block",
              width: "160px",
              height: "600px",
              margin: "0 auto"
            }}
            data-ad-client='ca-pub-8107450590774580'
            data-ad-slot='3152616213'
            data-ad-format="auto"
            data-full-width-responsive="false"
          />
        </Box>

        {/* Ad 2 */}
        <Box
          className="ad-container-2"
          width="160px"
          minHeight="600px"
          display="block"
          visibility={adsLoaded[1] ? "visible" : "hidden"}
          textAlign="center"
          position="relative"
        >
          {!adsLoaded[1] && (
            <Box 
              width="100%"
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
              display: "block",
              width: "160px",
              height: "600px",
              margin: "0 auto"
            }}
            data-ad-client='ca-pub-8107450590774580'
            data-ad-slot='3253352242'
            data-ad-format="auto"
            data-full-width-responsive="false"
          />
        </Box>

        {/* Ad 3 */}
        <Box
          className="ad-container-3"
          width="160px"
          minHeight="600px"
          display="block"
          visibility={adsLoaded[2] ? "visible" : "hidden"}
          textAlign="center"
          position="relative"
        >
          {!adsLoaded[2] && (
            <Box 
              width="100%"
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
              display: "block",
              width: "160px",
              height: "600px",
              margin: "0 auto"
            }}
            data-ad-client='ca-pub-8107450590774580'
            data-ad-slot='7001025560'
            data-ad-format="auto"
            data-full-width-responsive="false"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default SidebarAdRight;