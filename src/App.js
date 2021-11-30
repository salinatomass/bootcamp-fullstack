import React, { useState, useEffect } from 'react';
import Notes from './components/Notes';

const API_URL = 'https://bootcamp-notes-api.herokuapp.com/api/notes';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Notes</h1>
      <Notes notes={notes} />
    </>
  );
};

export default App;
