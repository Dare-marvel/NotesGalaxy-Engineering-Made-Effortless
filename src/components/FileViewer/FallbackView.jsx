import { Box, Icon, Text, Button, Link } from '@chakra-ui/react';

import {
  File
} from 'lucide-react';

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
    <Icon as={File} boxSize="6" mb="4" />
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
