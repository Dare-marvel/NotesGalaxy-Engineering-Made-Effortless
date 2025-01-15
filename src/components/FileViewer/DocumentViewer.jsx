import React from 'react';

const DocumentViewer = ({ fileUrl, fileName, onLoad, onError }) => {
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`;
    
    return (
        <iframe
            src={viewerUrl}
            style={{
                width: '100%',
                height: '80vh',
                border: 'none'
            }}
            title={fileName}
            onLoad={onLoad}
            onError={onError}
        />
    );
};

export default DocumentViewer;