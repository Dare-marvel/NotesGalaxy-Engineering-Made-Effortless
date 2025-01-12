// components/NoteCard.jsx
import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const NoteCard = ({ note }) => {
  const handleDownload = () => {
    const element = document.createElement('a');
    element.href = note.download_url;
    element.download = note.name;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>{note.name}</Card.Header>
        <Card.Description>
          Size: {Math.round(note.size / 1024)} KB
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button primary onClick={handleDownload}>
          Download
        </Button>
      </Card.Content>
    </Card>
  );
};

export default NoteCard;