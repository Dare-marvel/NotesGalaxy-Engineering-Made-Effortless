import { useEffect, useRef } from 'react';
import { Box, Container } from '@chakra-ui/react';

const BottomAd = () => {
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
            bg="gray.50"
            border="2px"
            borderRadius="5px"
            borderColor="gray.200"
            width={{ base: '90%', sm: "90%", md: '80%' }}
            mx="auto"
            bottom={0}
            // Fixed dimensions to prevent layout shift
            height="120px"
            minHeight="120px"
            maxHeight="120px"
            overflow="hidden"
        >
            <Container
                maxW="container.xl"
                centerContent
                height="100%"
            >
                <Box
                    width="100%"
                    maxW="728px"
                    textAlign="center"
                    height="100%"
                    // CSS containment for better performance
                    style={{ contain: 'layout style paint' }}
                >
                    {/* Google AdSense Ad Unit */}
                    <ins
                        ref={adRef}
                        className="adsbygoogle"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            minHeight: '120px',
                            maxHeight: '120px',
                            minWidth: '100%',
                            maxWidth: '100%'
                        }}
                        data-ad-client="ca-pub-8107450590774580"
                        data-ad-slot="4429475183"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default BottomAd;