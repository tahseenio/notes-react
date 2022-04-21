import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

interface Props {
  id: string;
  text: string;
  date: string;
  handleDeleteNote: Function;
}

export default function Note({ id, text, date, handleDeleteNote }: Props) {
  return (
    <div className='note'>
      <span className='note__title'>{text}</span>
      <div className='note__footer'>
        {date}{' '}
        <MdDeleteForever
          className='deleteBtn'
          size={'1.3em'}
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
}
