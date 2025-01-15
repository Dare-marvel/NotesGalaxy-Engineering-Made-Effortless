import React from 'react';
import { Box, Icon, Text, Link, Button } from '@chakra-ui/react';
import { FiFile } from 'react-icons/fi';

const UnsupportedFileView = ({ fileUrl }) => (
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
    <Text mb="4">Preview not available for this file type.</Text>
    <Link href={fileUrl} isExternal>
      <Button colorScheme="blue">
        View or Download
      </Button>
    </Link>
  </Box>
);

export default UnsupportedFileView;
