// components/PDFViewer.jsx
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Modal, Icon } from 'semantic-ui-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ fileUrl, isOpen, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Modal open={isOpen} onClose={onClose} size="large">
      <Modal.Header>Document Viewer</Modal.Header>
      <Modal.Content>
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Button.Group>
            <Button 
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
              icon
            >
              <Icon name="chevron left" />
            </Button>
            <Button.Or text={`${pageNumber} / ${numPages}`} />
            <Button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
              icon
            >
              <Icon name="chevron right" />
            </Button>
          </Button.Group>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default PDFViewer;