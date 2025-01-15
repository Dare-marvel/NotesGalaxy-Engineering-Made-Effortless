import React from 'react';
import { Box, Icon, Text, Button, Link } from '@chakra-ui/react';
import { FiFile } from 'react-icons/fi';

const FallbackView = ({ onRetry, fileUrl }) => (
  <Box 
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="center" 
    padding="6" 
    borderWidth="1px" 
    borderRadius="lg"
  >
    <Icon as={FiFile} boxSize="6" mb="4" />
    <Text mb="4">Unable to load preview. Please try again or download the file.</Text>
    <Box>
      <Button colorScheme="blue" onClick={onRetry}>
        Retry Preview
      </Button>
      <Link 
        href={fileUrl} 
        isExternal 
        ml="3" 
        textDecoration="none"
      >
        <Button variant="outline">
          Download File
        </Button>
      </Link>
    </Box>
  </Box>
);

export default FallbackView;
