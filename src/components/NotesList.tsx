import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Note from './Note';
import Search from './Search';
import Header from './Header';
import { NotesContext } from '../context/NotesContext';
import { AnimatePresence } from 'framer-motion';
interface stateProps {
  id: string;
  text: string;
  date: string;
  color: string;
}

const NotesList = () => {
  const [notes, setNotes] = useState<stateProps[]>([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  useEffect(() => {
    console.log('ran here');
    const GenericNotes = [
      {
        id: nanoid(),
        text: 'Edit this or create a new note to get started',
        date: '26 April 2022, 17:39',
        color: '#6fd262',
      },
      {
        id: nanoid(),
        text: 'First note',
        date: '26 April 2022, 20:46',
        color: '#ffe793',
      },
      {
        id: nanoid(),
        text: 'Second note',
        date: '26 April 2022, 20:47',
        color: '#ffffff',
      },
      {
        id: nanoid(),
        text: 'Hello World',
        date: '26 April 2022, 20:47',
        color: '#c78eff',
      },
      {
        id: nanoid(),
        text: 'Fifth note',
        date: '26 April 2022, 20:47',
        color: '#ff6d5b',
      },
      {
        id: nanoid(),
        text: 'Delete me!',
        date: '26 April 2022, 20:47',
        color: '#ffe793',
      },
    ];
    const savedNotes = JSON.parse(localStorage.getItem('notes-data')!);
    console.log(savedNotes);
    if (savedNotes) {
      console.log('exist here?');
      setNotes(savedNotes);
    } else setNotes(GenericNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
    console.log(localStorage.getItem('notes-data')!);
  }, [notes]);

  const handleAddNote = (text: string): void => {
    const date = new Date();
    const newObject = [
      ...notes,
      {
        id: nanoid(),
        text,
        date: date.toLocaleString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }),
        color: '#fafafa',
      },
    ];
    setNotes(newObject);
  };

  const handleDeleteNote = (id: string): void => {
    const newNote = notes.filter((elem) => elem.id !== id);
    setNotes(newNote);
  };

  const handleEditNote = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ): void => {
    const date = new Date();
    const changedNote = notes.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          text: e.target.value,
          date: date.toLocaleString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          }),
        };
      } else return elem;
    });
    setNotes(changedNote);
  };

  const updatedNotes = notes
    .filter((elem) => elem.text.toLowerCase().includes(searchText))
    .map((note) => (
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        date={note.date}
        color={note.color}
      />
    ));

  const handleColorChange = (color: string, id: string) => {
    const updatedNotes = notes.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          color,
        };
      } else return elem;
    });
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        setSearchText,
        handleAddNote,
        handleDeleteNote,
        handleEditNote,
        handleColorChange,
      }}
    >
      <main className='notes__container'>
        <Header />
        <Search />
        <section className='notes__list'>
          {updatedNotes.length === 0 ? (
            <div>No notes found</div>
          ) : (
            <AnimatePresence initial={false}>{updatedNotes}</AnimatePresence>
          )}
        </section>
        {/* <pre>{JSON.stringify(notes, null, 2)}</pre> */}
      </main>
    </NotesContext.Provider>
  );
};

export default NotesList;
