import { useContext, useState } from 'react';
import { MdDeleteForever, MdOutlineColorLens } from 'react-icons/md';
import { ColorChangeContext } from '../context/ColorChangeContext';
import { NotesContext } from '../context/NotesContext';
import { ContextProps } from '../context/NotesContext';
import { ColorPane } from './ColorPane';
interface Props {
  id: string;
  text: string;
  date: string;
  color: string;
}

export default function Note({ id, text, date, color }: Props) {
  const { handleEditNote, handleDeleteNote } = useContext(
    NotesContext
  ) as ContextProps;

  const [colorPane, toggleColorPane] = useState(false);

  return (
    <ColorChangeContext.Provider value={{ toggleColorPane, id }}>
      <div className='note' style={{ backgroundColor: color }}>
        <textarea
          className='note__input'
          cols={10}
          rows={8}
          maxLength={200}
          value={text}
          onChange={(e) => handleEditNote(e, id)}
        ></textarea>
        <div className='note__footer'>
          <div className='date--wrapper'>{date}</div>
          <div className='buttons--wrapper'>
            <MdOutlineColorLens
              className='colorPaneBtn'
              onClick={() => toggleColorPane((state) => !state)}
            />
            <MdDeleteForever
              className='deleteBtn'
              size={'1.3em'}
              onClick={() => handleDeleteNote(id)}
            />
          </div>
        </div>
        {colorPane && <ColorPane {...{ ...toggleColorPane }} />}
      </div>
    </ColorChangeContext.Provider>
  );
}
