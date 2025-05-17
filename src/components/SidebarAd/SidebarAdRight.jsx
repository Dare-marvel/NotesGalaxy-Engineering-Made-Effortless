import { useEffect } from 'react';
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useWindowSize } from '../../hooks/useWindowSize';

const SidebarAdRight = ({ position = 'right' }) => {
  const width = useWindowSize();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Define breakpoint for medium screens (768px is a common md breakpoint)
  const isMobile = width < 768;

  // This effect initializes AdSense ads when component mounts
  useEffect(() => {
    // Only run if AdSense is available and not on mobile screens
    if (window.adsbygoogle && !isMobile) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [isMobile]);

  // If on mobile, don't render the component at all
  if (isMobile) return null;

  return (
    <Box
      position="fixed"
      top="0"
      bottom="0"
      left={position === 'left' ? "0" : "auto"}
      right={position === 'right' ? "0" : "auto"}
      width="100px"
      height="100vh"
      bg={bgColor}
      borderLeft={position === 'right' ? '1px solid' : 'none'}
      borderRight={position === 'left' ? '1px solid' : 'none'}
      borderColor={borderColor}
      p={4}
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        'scrollbarWidth': 'none', /* Firefox */
        '-ms-overflow-style': 'none',  /* IE and Edge */
      }}
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="sm" color="gray.500" textAlign="center">
          Advertisement
        </Text>

        {/* Google AdSense Ad Unit */}
        <Box
          className="ad-container"
          width="100%"
          minHeight="600px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-8107450590774580"
            data-ad-slot="3152616213"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>

        </Box>
      </VStack>
    </Box>
  );
};

export default SidebarAdRight;