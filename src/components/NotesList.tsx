import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Note from './Note';
import AddNote from './AddNote';
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
      text: 'test',
      date: '17/10/2002',
      color: '#fef68a',
    },
    {
      id: nanoid(),
      text: 'hello',
      date: '19/10/2002',
      color: 'lightblue',
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
        color: '#fef68a',
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
          date: date.toLocaleString(),
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
    // console.log('changed to color:', color, 'Folor note with id:', id);
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
          {!searchText && <AddNote />}
          {updatedNotes.length === 0 ? <div>No notes found</div> : updatedNotes}
        </section>
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </main>
    </NotesContext.Provider>
  );
};

export default NotesList;
