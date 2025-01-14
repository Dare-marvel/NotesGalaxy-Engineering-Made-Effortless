import React from 'react';
import { createPortal } from 'react-dom';
import FileViewer from 'react-file-viewer';

const EnhancedFileViewer = ({ file, isOpen, onClose }) => {
  if (!isOpen) return null;

  const fileExtension = file.name.split('.').pop().toLowerCase();

  const handleError = (error) => {
    console.error('Error in file viewer:', error);
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
          <FileViewer
            fileType={fileExtension}
            filePath={file.download_url}
            onError={handleError}
            errorComponent={() => (
              <div className="ui placeholder segment">
                <div className="ui icon header">
                  <i className="file outline icon"></i>
                  <p>Unable to preview this file</p>
                  <a 
                    href={file.download_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ui blue button"
                  >
                    Download File
                  </a>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EnhancedFileViewer;