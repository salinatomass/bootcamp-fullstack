import React, { useEffect, useState } from 'react';
import Note from './Note';

const Notes = props => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleChange = e => {
    setNewNote(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setNotes([...notes, noteToAddToState]);
    setNewNote('');
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    setNotes(props.notes);
  }, [props.notes]);

  if (!notes) return <p>No hay notas para mostrar</p>;
  console.log(props.notes);

  return (
    <div>
      <button onClick={handleShowAll}>
        {showAll ? 'Show All' : 'Show only importants'}
      </button>
      <ul>
        {notes
          .filter(note => {
            if (showAll === false) return note.important;
            return note;
          })
          .map(note => (
            <Note key={note.id} content={note.content} date={note.date} />
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange} />
        <button type="submit">Crear nota</button>
      </form>
    </div>
  );
};

export default Notes;
