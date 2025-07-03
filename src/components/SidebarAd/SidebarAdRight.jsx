import { useEffect, useState } from 'react';
import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

// Individual Google Ad Component
const GoogleAd = ({ adSlot, width = "130px", height = "600px" }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ 
        display: "block",
        width: width,
        height: height
      }}
      data-ad-client='ca-pub-8107450590774580'
      data-ad-slot={adSlot}
      data-ad-format="vertical"
      data-full-width-responsive="true"
    />
  );
};

const SidebarAdRight = ({ 
  position = 'right', 
}) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const [headerHeight, setHeaderHeight] = useState(0);

  // Define breakpoint for medium screens
  const isMobile = width < 530;

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

  // If on mobile, don't render the component at all
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
          <GoogleAd adSlot="3152616213" />
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
          <GoogleAd adSlot="3253352242" />
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
          <GoogleAd adSlot="7001025560" />
        </Box>
      </VStack>
    </Box>
  );
};

export default SidebarAdRight;