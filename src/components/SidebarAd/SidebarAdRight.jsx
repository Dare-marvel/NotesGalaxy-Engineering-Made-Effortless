import { useEffect, useRef, useState } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdRight = ({ position = 'right' }) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const [headerHeight, setHeaderHeight] = useState(0);
  const adsInitialized = useRef(false);

  // Define breakpoint for mobile devices
  const isMobile = width < 768;

  // Load the AdSense script if it hasn't been loaded already
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.setAttribute('data-ad-client', 'ca-pub-8107450590774580');
      document.head.appendChild(script);
    }
  }, []);

  // Dynamically detect header height to position the sidebar correctly
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

  // Helper function to wait until window.adsbygoogle is available
  const waitForAdsbyGoogle = (maxRetries = 10, delay = 500) => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const interval = setInterval(() => {
        if (window.adsbygoogle) {
          clearInterval(interval);
          resolve(true);
        } else if (attempts >= maxRetries) {
          clearInterval(interval);
          reject(new Error('adsbygoogle not loaded'));
        }
        attempts++;
      }, delay);
    });
  };

  // Initialize the ads if not on mobile and if they have not already been initialized
  useEffect(() => {
    if (!isMobile && !adsInitialized.current) {
      waitForAdsbyGoogle()
        .then(() => {
          const adElements = document.querySelectorAll('.adsbygoogle');
          const uninitializedAds = Array.from(adElements).filter(
            ad =>
              !ad.getAttribute('data-adsbygoogle-status') &&
              ad.innerHTML.trim() === ''
          );

          if (uninitializedAds.length > 0) {
            console.log(`Initializing ${uninitializedAds.length} ads`);
            uninitializedAds.forEach(() => {
              try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
              } catch (error) {
                console.error('Ad push error:', error);
              }
            });
            adsInitialized.current = true;
            console.log('All ads initialized successfully');
          }
        })
        .catch((err) => {
          console.error('Failed to load AdSense script:', err);
        });
    }
  }, [isMobile]);

  // Reset the ads initialization flag when switching to mobile
  useEffect(() => {
    if (isMobile) {
      adsInitialized.current = false;
    }
  }, [isMobile]);

  // Do not render the sidebar on mobile devices
  if (isMobile) return null;

  return (
    <Box
      position="fixed"
      top={`${headerHeight}px`}
      bottom="0"
      left={position === 'left' ? '0' : 'auto'}
      right={position === 'right' ? '0' : 'auto'}
      width="160px"
      height={`calc(100vh - ${headerHeight}px)`}
      bg={bgColor}
      borderLeft={position === 'right' ? '1px solid' : 'none'}
      borderRight={position === 'left' ? '1px solid' : 'none'}
      borderColor={borderColor}
      p={2}
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <VStack spacing={4} align="stretch">
        {/* Ad 1 */}
        <Box
          className="ad-container-1"
          width="100%"
          display="block"
          textAlign="center"
          border="1px dashed gray"
          position="relative"
        >
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '130px', height: '600px' }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="3152616213"
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>

        {/* Ad 2 */}
        <Box
          className="ad-container-2"
          width="100%"
          display="block"
          textAlign="center"
          border="1px dashed gray"
          position="relative"
        >
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '130px', height: '600px' }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="3253352242"
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>

        {/* Ad 3 */}
        <Box
          className="ad-container-3"
          width="100%"
          display="block"
          textAlign="center"
          border="1px dashed gray"
          position="relative"
        >
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '130px', height: '600px' }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="7001025560"
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default SidebarAdRight;
