import React from 'react';

const Modal = ({ children, onClose, title, downloadUrl }) => (
    <div className="ui dimmer modals visible active" onClick={onClose}>
        <div
            className="ui standard modal visible active large"
            onClick={(e) => e.stopPropagation()}
            style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}
        >
            <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{title}</span>
                <div>
                    <a
                        href={downloadUrl}
                        download
                        className="ui basic button"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <i className="download icon" /> Download
                    </a>
                    <button className="ui basic button" onClick={onClose} style={{ marginLeft: '8px' }}>
                        <i className="close icon" /> Close
                    </button>
                </div>
            </div>
            <div className="content" style={{ flex: 1, overflow: 'auto' }}>
                {children}
            </div>
        </div>
    </div>
);

export default Modal;