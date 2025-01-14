import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const FileViewer = ({ file, isOpen, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  if (!isOpen) return null;

  const fileExtension = file.name.split('.').pop().toLowerCase();
  const fileUrl = file.download_url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');

  const handleIframeLoad = (e) => {
    const iframe = e.target;
    // Check if the iframe content loaded successfully
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDoc.body.innerHTML.includes('Loading') || iframeDoc.body.innerHTML.includes('Error')) {
        handleLoadError();
      } else {
        setIframeLoaded(true);
        setShowFallback(false);
      }
    } catch (error) {
      // Cross-origin restrictions might prevent access to iframe content
      // We'll consider it loaded unless an error event occurs
      setIframeLoaded(true);
      setShowFallback(false);
    }
  };

  const handleLoadError = () => {
    if (retryCount < 5) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setIframeLoaded(false);
      }, 2000); // Retry after 2 seconds
    } else {
      setShowFallback(true);
    }
  };

  const renderDocumentViewer = () => {
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`;

    return (
      <div style={{ position: 'relative', height: '100%' }}>
        {!iframeLoaded && !showFallback && (
          <div className="ui active centered inline loader" style={{ marginTop: '20px' }}></div>
        )}
        <iframe
          src={viewerUrl}
          style={{
            width: '100%',
            height: '80vh',
            border: 'none',
            display: showFallback ? 'none' : 'block'
          }}
          title={file.name}
          onLoad={handleIframeLoad}
          onError={handleLoadError}
        />
        {showFallback && (
          <div className="ui placeholder segment">
            <div className="ui icon header">
              <i className="file outline icon"></i>
              <p>Unable to load preview. Please try again or download the file.</p>
              <div>
                <button
                  className="ui blue button"
                  onClick={() => {
                    setShowFallback(false);
                    setRetryCount(0);
                    setIframeLoaded(false);
                  }}
                >
                  Retry Preview
                </button>
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui basic button"
                  style={{ marginLeft: '10px' }}
                >
                  Download File
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderContent = () => {
    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return (
        <img
          src={fileUrl}
          alt={file.name}
          style={{ maxWidth: '100%', maxHeight: '80vh' }}
        />
      );
    }

    if (['doc', 'docx', 'ppt', 'pdf', 'pptx', 'xls', 'xlsx'].includes(fileExtension)) {
      return renderDocumentViewer();
    }

    return (
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="file outline icon"></i>
          <p>Preview not available for this file type.</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="ui blue button">
            View or Download
          </a>
        </div>
      </div>
    );
  };
  return createPortal(
    <div className="ui dimmer modals visible active" onClick={onClose}>
      <div
        className="ui standard modal visible active large"
        onClick={(e) => e.stopPropagation()}
        style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}
      >
        <div
          className="header"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <span>{file.name}</span>
          <div>
            <a
              href={fileUrl}
              download
              className="ui basic button"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="download icon"></i> Download
            </a>
            <button
              className="ui basic button"
              onClick={onClose}
              style={{ marginLeft: '8px' }}
            >
              <i className="close icon"></i> Close
            </button>
          </div>
        </div>
        <div className="content" style={{ flex: 1, overflow: 'auto' }}>
          {renderContent()}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default FileViewer;
