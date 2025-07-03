import { useEffect, useRef, useState } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdRight = ({ position = 'right' }) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const [headerHeight, setHeaderHeight] = useState(0);
  const adsInitialized = useRef(false);
  const isMobile = width < 768;

  // Load AdSense script once globally
  useEffect(() => {
    if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.setAttribute('data-ad-client', 'ca-pub-8107450590774580');
      document.head.appendChild(script);
    }
  }, []);

  // Detect header height dynamically
  useEffect(() => {
    const detectHeaderHeight = () => {
      const headerSelectors = [
        'header', '.header', '.navbar', '.nav-bar',
        '[data-testid="header"]', '.chakra-ui-header'
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
        const fallbackElement = document.elementFromPoint(window.innerWidth / 2, 50);
        if (fallbackElement && fallbackElement !== document.body && fallbackElement !== document.documentElement) {
          detectedHeight = 60;
        }
      }

      setHeaderHeight(detectedHeight);
    };

    detectHeaderHeight();
    window.addEventListener('resize', detectHeaderHeight);
    return () => window.removeEventListener('resize', detectHeaderHeight);
  }, []);

  // Retry mechanism for AdSense readiness
  const waitForAdsbyGoogle = (maxRetries = 10, delay = 500) => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const interval = setInterval(() => {
        if (window.adsbygoogle) {
          clearInterval(interval);
          resolve(true);
        } else if (attempts >= maxRetries) {
          clearInterval(interval);
          reject('adsbygoogle not loaded');
        }
        attempts++;
      }, delay);
    });
  };

  // Initialize ads once on desktop
  useEffect(() => {
    if (!isMobile && !adsInitialized.current) {
      waitForAdsbyGoogle().then(() => {
        const adElements = document.querySelectorAll('.adsbygoogle');
        const uninitializedAds = Array.from(adElements).filter(
          ad =>
            !ad.getAttribute('data-adsbygoogle-status') &&
            ad.innerHTML.trim() === ''
        );

        uninitializedAds.forEach(() => {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error('Ad push error:', e);
          }
        });

        if (uninitializedAds.length > 0) {
          console.log(`Initialized ${uninitializedAds.length} ads`);
          adsInitialized.current = true;
        }
      }).catch((err) => {
        console.error('AdSense script failed to load:', err);
      });
    }
  }, [isMobile]);

  // Reset flag when switching to mobile
  useEffect(() => {
    if (isMobile) adsInitialized.current = false;
  }, [isMobile]);

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
        {/* Ad Slot 1 */}
        <Box textAlign="center">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="3152616213"
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>

        {/* Ad Slot 2 */}
        <Box textAlign="center">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="3253352242"
            data-ad-format="vertical"
            data-full-width-responsive="true"
          />
        </Box>

        {/* Ad Slot 3 */}
        <Box textAlign="center">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
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
