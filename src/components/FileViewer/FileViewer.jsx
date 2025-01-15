import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
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

    return createPortal(
        <Modal onClose={onClose} title={file.name} downloadUrl={fileUrl}>
            {renderContent()}
        </Modal>,
        document.body
    );
};

export default FileViewer;