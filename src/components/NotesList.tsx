import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Note from './Note';
import Search from './Search';
import Header from './Header';
import { NotesContext } from '../context/NotesContext';

interface stateProps {
  id: string;
  text: string;
  date: string;
  color: string;
}

const NotesList = () => {
  const [notes, setNotes] = useState<stateProps[]>([
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
      color: '#e6b905',
    },
    {
      id: nanoid(),
      text: 'Second note',
      date: '26 April 2022, 20:47',
      color: '#aaaaaa',
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
      color: '#e6b905',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  // on first load, set localstorage to default values as it does not exist
  // everytime browser reloads make sure to get notes value from localstorage
  // if notes change just update the localstore

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data')!);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
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
          {!searchText}
          {updatedNotes.length === 0 ? <div>No notes found</div> : updatedNotes}
        </section>
        {/* <pre>{JSON.stringify(notes, null, 2)}</pre> */}
      </main>
    </NotesContext.Provider>
  );
};

export default NotesList;
