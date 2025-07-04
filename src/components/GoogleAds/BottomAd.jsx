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
            // as="footer"
            bg="gray.50"
            border="2px"
            borderRadius="5px"
            borderColor="gray.200"
            // py={{ base: 4, md: 6 }}
            // px={{ base: 3, sm: 4, md: 12, lg: 12 }}
            //   position="sticky"
            width={{ base: '90%',sm:"90%", md: '80%' }}
            mx="auto"
            bottom={0}
        //   zIndex={10}
        >
            <Container
                maxW="container.xl"
                centerContent
            >
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

            </Container>
        </Box>
    );
};

export default GoogleAdsComponent;