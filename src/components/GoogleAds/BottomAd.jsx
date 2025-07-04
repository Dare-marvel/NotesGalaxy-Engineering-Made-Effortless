import React, { useEffect, useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';

const GoogleAdsComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Check if AdSense script is loaded and initialize ad
    const initializeAd = () => {
      try {
        if (window.adsbygoogle && adRef.current) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };

    // Check if AdSense is already loaded
    if (window.adsbygoogle) {
      initializeAd();
    } else {
      // If not loaded yet, wait for it
      const checkAdSense = setInterval(() => {
        if (window.adsbygoogle) {
          clearInterval(checkAdSense);
          initializeAd();
        }
      }, 100);

      // Cleanup interval after 10 seconds to avoid infinite checking
      const timeout = setTimeout(() => {
        clearInterval(checkAdSense);
        console.warn('AdSense script not found after 10 seconds');
      }, 10000);

      return () => {
        clearInterval(checkAdSense);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <Box
      as="footer"
      width="100%"
      bg="gray.50"
      borderTop="1px"
      borderColor="gray.200"
      py={{ base: 4, md: 6 }}
      px={{ base: 2, md: 4 }}
      position="sticky"
      bottom={0}
      zIndex={10}
    >
      <Container maxW="container.xl" centerContent>
        <Box
          width="100%"
          maxW="728px"
          textAlign="center"
          overflow="hidden"
        >
          {/* Google AdSense Ad Unit */}
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              minHeight: '90px',
              maxHeight: '250px'
            }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="4429475183"
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          />
        </Box>
        
        {/* Optional: Ad label for transparency */}
        <Box
          fontSize="xs"
          color="gray.500"
          mt={2}
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Advertisement
        </Box>
      </Container>
    </Box>
  );
};

export default GoogleAdsComponent;