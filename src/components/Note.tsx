import { MdDeleteForever } from 'react-icons/md';
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
