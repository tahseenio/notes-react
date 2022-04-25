import { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { NotesContext } from '../context/NotesContext';
import { ContextProps } from '../context/NotesContext';
interface Props {
  id: string;
  text: string;
  date: string;
}

export default function Note({ id, text, date }: Props) {
  const { handleEditNote, handleDeleteNote } = useContext(
    NotesContext
  ) as ContextProps;
  return (
    <div className='note'>
      <textarea
        className='note__input'
        cols={10}
        rows={8}
        maxLength={200}
        value={text}
        onChange={(e) => handleEditNote(e, id)}
      ></textarea>
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
