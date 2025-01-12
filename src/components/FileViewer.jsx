// components/FileViewer.jsx
import React from 'react';
import { createPortal } from 'react-dom';

const FileViewer = ({ file, isOpen, onClose }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const githubRawUrl = file.download_url.replace('raw.githubusercontent.com', 'github.com');
    
    if (fileExtension === 'pdf') {
      return (
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(file.download_url)}&embedded=true`}
          style={{ width: '100%', height: '80vh', border: 'none' }}
          title={file.name}
        />
      );
    }

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return (
        <img
          src={file.download_url}
          alt={file.name}
          style={{ maxWidth: '100%', maxHeight: '80vh' }}
        />
      );
    }

    return (
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="file outline icon"></i>
          <p>Preview not available for this file type.</p>
          <a href={githubRawUrl} target="_blank" rel="noopener noreferrer" className="ui blue button">
            View on GitHub
          </a>
        </div>
      </div>
    );
  };

  return createPortal(
    <div className="ui dimmer modals visible active" onClick={onClose}>
      <div 
        className="ui standard modal visible active large"
        onClick={e => e.stopPropagation()}
        style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}
      >
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{file.name}</span>
          <div>
            <a 
              href={file.download_url}
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