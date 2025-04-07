import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, IconButton, ModalBody, Text, Box } from '@chakra-ui/react';
import { DownloadIcon, CloseIcon } from '@chakra-ui/icons';
import DocumentViewer from './DocumentViewer';
import ImageViewer from './ImageViewer';
import LoadingSpinner from './LoadingSpinner';
import FallbackView from './FallbackView';
import UnsupportedFileView from './UnsupportedFileView';
import {
    SUPPORTED_IMAGE_TYPES,
    SUPPORTED_DOCUMENT_TYPES,
    MAX_RETRY_ATTEMPTS,
    RETRY_DELAY,
    getFileExtension,
    getGithubRawUrl
} from '../../utils/fileUtils';

const FileViewer = ({ file, isOpen, onClose }) => {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const [showFallback, setShowFallback] = useState(false);

    if (!isOpen) return null;

    const fileExtension = getFileExtension(file.name);
    const fileUrl = getGithubRawUrl(file.download_url);

    const handleIframeLoad = (e) => {
        try {
            const iframeDoc = e.target.contentDocument || e.target.contentWindow.document;
            if (iframeDoc.body.innerHTML.includes('Loading') || iframeDoc.body.innerHTML.includes('Error')) {
                handleLoadError();
            } else {
                setIframeLoaded(true);
                setShowFallback(false);
            }
        } catch (error) {
            setIframeLoaded(true);
            setShowFallback(false);
        }
    };

    const handleLoadError = () => {
        if (retryCount < MAX_RETRY_ATTEMPTS) {
            setTimeout(() => {
                setRetryCount(prev => prev + 1);
                setIframeLoaded(false);
            }, RETRY_DELAY);
        } else {
            setShowFallback(true);
        }
    };

    const handleRetry = () => {
        setShowFallback(false);
        setRetryCount(0);
        setIframeLoaded(false);
    };

    const renderContent = () => {
        if (SUPPORTED_IMAGE_TYPES.includes(fileExtension)) {
            return <ImageViewer fileUrl={fileUrl} fileName={file.name} />;
        }

        if (SUPPORTED_DOCUMENT_TYPES.includes(fileExtension)) {
            return (
                <>
                    {!iframeLoaded && !showFallback && <LoadingSpinner />}
                    {!showFallback && (
                        <DocumentViewer
                            fileUrl={fileUrl}
                            fileName={file.name}
                            onLoad={handleIframeLoad}
                            onError={handleLoadError}
                        />
                    )}
                    {showFallback && (
                        <FallbackView onRetry={handleRetry} fileUrl={fileUrl} />
                    )}
                </>
            );
        }

        return <UnsupportedFileView fileUrl={fileUrl} />;
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}>
                <ModalHeader display="flex" justifyContent="space-between" alignItems="center">
                    <Text>{file.name}</Text>
                    <Box>
                        <IconButton as="a" href={fileUrl} download variant="outline" mr={3} icon={<DownloadIcon />} onClick={(e) => e.stopPropagation()} /> <IconButton variant="outline" icon={<CloseIcon />} onClick={onClose} />
                    </Box>
                </ModalHeader>
                <ModalBody flex={1} overflowY="auto">
                    {renderContent()}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default FileViewer;
