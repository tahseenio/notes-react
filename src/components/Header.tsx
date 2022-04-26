import React, { useContext } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { NotesContext } from '../context/NotesContext';
import { ContextProps } from '../context/NotesContext';

export default function Header() {
  const { handleAddNote } = useContext(NotesContext) as ContextProps;
  return (
    <div className='notes__header--container'>
      <div className='notes__header'>
        <CgNotes className='noteIcon' /> My Notes
      </div>
      <button className='AddNoteBtn' onClick={() => handleAddNote('')}>
        <BsPlusCircle className='AddIcon' />
        Add new note
      </button>
    </div>
  );
}
