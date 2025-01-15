import React from 'react';
import { Image } from '@chakra-ui/react';

const ImageViewer = ({ fileUrl, fileName }) => (
    <Image
        src={fileUrl}
        alt={fileName}
        maxWidth="100%"
        maxHeight="80vh"
    />
);

export default ImageViewer;
