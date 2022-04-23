import React, { useState } from 'react';
import { MdDeleteForever, MdModeEdit, MdDone } from 'react-icons/md';
interface Props {
  id: string;
  text: string;
  date: string;
  handleDeleteNote: Function;
  handleEditNote: Function;
}

export default function Note({
  id,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
}: Props) {
  return (
    <div className='note'>
      <input
        className='note__input'
        value={text}
        onChange={(e) => handleEditNote(e, id)}
      ></input>
      <div className='note__footer'>
        {date}
        <div className='buttons--wrapper'>
          <MdDeleteForever
            className='deleteBtn'
            size={'1.3em'}
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
}
