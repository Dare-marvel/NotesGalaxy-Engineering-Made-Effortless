// components/NoteList.jsx
import React, { useEffect, useState } from 'react';
import { Container, Card, Message } from 'semantic-ui-react';
import { fetchNotes } from '../services/github';
import NoteCard from './NoteCard';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const fetchedNotes = await fetchNotes();
        setNotes(fetchedNotes);
      } catch (err) {
        setError('Failed to load notes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadNotes();
  }, []);

  if (loading) return <Message info>Loading notes...</Message>;
  if (error) return <Message negative>{error}</Message>;

  return (
    <Container>
      <Card.Group>
        {notes.map((note) => (
          <NoteCard key={note.sha} note={note} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default NoteList;