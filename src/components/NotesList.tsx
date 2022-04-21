import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Note from './Note';
import AddNote from './AddNote';
import Search from './Search';
import Header from './Header';

interface stateProps {
  id: string;
  text: string;
  date: string;
}

export default function NotesList() {
  const [notes, setNotes] = useState<stateProps[]>(
    // JSON.parse(localStorage.getItem('react-notes-data')!)
    [
      {
        id: nanoid(),
        text: 'test',
        date: '1967/10/2002',
      },
    ]
  );

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data')!);
    if (savedNotes) setNotes(savedNotes);
  }, []);

  useEffect(() => {
    console.log('notes changed');
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (text: string) => {
    const date = new Date();
    const newObject = [
      ...notes,
      {
        id: nanoid(),
        text,
        date: date.toLocaleString(),
      },
    ];
    setNotes(newObject);
  };

  const handleDeleteNote = (id: string) => {
    const newNote = notes.filter((elem) => elem.id !== id);
    setNotes(newNote);
  };

  return (
    <main className='notes__container'>
      <Header />
      <Search setSearchText={setSearchText} />
      <section className='notes__list'>
        {notes
          .filter((elem) => elem.text.toLowerCase().includes(searchText))
          .map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              date={note.date}
              {...{ handleDeleteNote }}
            />
          ))}
        <AddNote handleAddNote={handleAddNote} />
      </section>
    </main>
  );
}
