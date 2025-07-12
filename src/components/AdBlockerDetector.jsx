import { useState, useEffect } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalBody,
  VStack, HStack, Text, Heading, Button,
  Icon, Box, Divider
} from '@chakra-ui/react';
import { CheckCircle, RefreshCw, AlertTriangle } from 'lucide-react';

const AdBlockerDetector = () => {
  const [isAdBlockerDetected, setIsAdBlockerDetected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const detectAdBlocker = async () => {
      // Check if adsbygoogle object exists
      const googleAdsBlocked = typeof window.adsbygoogle === 'undefined';
      
      // Check network request to Google Ads
      const checkGoogleRequest = async () => {
        try {
          await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-store'
          });
          return false;
        } catch {
          return true;
        }
      };

      const requestBlocked = await checkGoogleRequest();
      setIsAdBlockerDetected(googleAdsBlocked || requestBlocked);
      setIsChecking(false);
    };

    const timer = setTimeout(detectAdBlocker, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => window.location.reload();
  const handleRecheck = () => {
    setIsChecking(true);
    setTimeout(() => window.location.reload(), 500);
  };

  if (isChecking || !isAdBlockerDetected) return null;

  return (
    <Modal
      isOpen={isAdBlockerDetected}
      onClose={() => {}}
      closeOnOverlayClick={false}
      closeOnEsc={false}
      size="xl"
      isCentered
    >
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent bg="white" mx={4} maxH="400px">
        <ModalBody p={6}>
          <HStack align="start" spacing={6}>
            {/* Icon Section */}
            <Box
              bg="red.100"
              p={3}
              rounded="full"
              flexShrink={0}
              mt={1}
            >
              <Icon as={AlertTriangle} color="red.500" boxSize={6} />
            </Box>

            {/* Content Section */}
            <VStack align="start" spacing={4} overflowY="auto" maxH="320px" pr={2}>
              <Heading size="md" color='gray.900'>
                Ad Blocker Detected
              </Heading>

              <Text color='gray.600'>
                Our free service relies on ads. Please disable your ad blocker to continue.
              </Text>

              <Divider borderColor='gray.200' />

              <VStack align="start" spacing={2}>
                <Text fontSize="sm" fontWeight="semibold" color='gray.900'>
                  Disabling helps us:
                </Text>
                <HStack spacing={3}>
                  <Icon as={CheckCircle} color="green.500" boxSize={4} />
                  <Text fontSize="sm" color='gray.600'>Keep content free</Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={CheckCircle} color="green.500" boxSize={4} />
                  <Text fontSize="sm" color='gray.600'>Improve services</Text>
                </HStack>
              </VStack>

              <Divider borderColor='gray.200' />

              <VStack w="full" spacing={3}>
                <Button
                  colorScheme="blue"
                  w="full"
                  onClick={handleRecheck}
                  leftIcon={<RefreshCw size={16} />}
                  isLoading={isChecking}
                  loadingText="Checking..."
                >
                  Verify Ad Blocker Is Off
                </Button>
                <Button
                  variant="outline"
                  w="full"
                  onClick={handleRefresh}
                >
                  Refresh Page
                </Button>
              </VStack>

              <Text fontSize="xs" color="gray.500">
                This message will disappear when your ad blocker is disabled
              </Text>
            </VStack>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AdBlockerDetector;