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
  const [notes, setNotes] = useState<stateProps[]>([
    {
      id: nanoid(),
      text: 'test',
      date: '17/10/2002',
    },
    {
      id: nanoid(),
      text: 'hello',
      date: '19/10/2002',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data')!);
    if (savedNotes) setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (text: string): void => {
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

  const handleDeleteNote = (id: string): void => {
    const newNote = notes.filter((elem) => elem.id !== id);
    setNotes(newNote);
  };

  const handleEditNote = (e: any, id: string): void => {
    // console.log('ID IS:', id, 'Element to change to is:', e.target.value);

    const changedNote = notes.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          text: e.target.value,
        };
      } else return elem;
    });
    setNotes(changedNote);
  };

  return (
    <main className='notes__container'>
      <Header />
      <Search setSearchText={setSearchText} />
      <section className='notes__list'>
        <AddNote handleAddNote={handleAddNote} />
        {notes
          .filter((elem) => elem.text.toLowerCase().includes(searchText))
          .map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              date={note.date}
              {...{ handleDeleteNote, handleEditNote }}
            />
          ))}
      </section>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </main>
  );
}
