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

  const [colorPane, toggleColorPane] = useState<boolean>(false);

  const [focus, setFocus] = useState<boolean>(false);

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
          onFocus={() => setFocus((state) => !state)}
          onBlur={() => setFocus((state) => !state)}
        ></textarea>
        {focus ? (
          <div className='date--wrapper'>Last Modified: {date}</div>
        ) : (
          <div className='date--wrapper'> </div>
        )}
        <div className='note__footer'>
          <div className='buttons--wrapper'>
            <div
              className='editBtn--wrapper'
              onClick={() => toggleColorPane((state) => !state)}
            >
              <MdOutlineColorLens className='colorPaneBtn' />
              Edit Color
            </div>
            <div
              className='deleteBtn--wrapper'
              onClick={() => handleDeleteNote(id)}
            >
              <MdDeleteForever className='deleteBtn' size={'1.3em'} />
              Delete Note
            </div>
          </div>
        </div>

        {colorPane && <ColorPane {...{ ...toggleColorPane }} />}
      </div>
    </ColorChangeContext.Provider>
  );
}
