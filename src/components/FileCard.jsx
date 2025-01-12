// components/FileCard.jsx
import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

const FileCard = ({ item, onClick }) => {
  const isPDF = item.name.toLowerCase().endsWith('.pdf');

  const handleDownload = (e) => {
    e.stopPropagation();
    const element = document.createElement('a');
    element.href = item.download_url;
    element.download = item.name;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card onClick={onClick}>
      <Card.Content>
        <Icon 
          name={item.type === 'dir' ? 'folder' : 'file'}
          size="large"
        />
        <Card.Header>{item.name}</Card.Header>
      </Card.Content>
      {item.type !== 'dir' && (
        <Card.Content extra>
          <Button.Group fluid>
            <Button primary onClick={handleDownload}>
              <Icon name="download" /> Download
            </Button>
            {isPDF && (
              <Button secondary>
                <Icon name="eye" /> View
              </Button>
            )}
          </Button.Group>
        </Card.Content>
      )}
    </Card>
  );
};

export default FileCard;