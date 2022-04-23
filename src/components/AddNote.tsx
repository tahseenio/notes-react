import React, { useState } from 'react';

interface Props {
  handleAddNote: Function;
}

const AddNote = ({ handleAddNote }: Props) => {
  const [noteText, setNoteText] = useState<string>('');
  const charLimit = 200;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = (): void => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className='note note--new'>
      <textarea
        className='note__textarea'
        cols={10}
        rows={8}
        placeholder='Type to add a note...'
        maxLength={200}
        onChange={(e) => handleChange(e)}
        value={noteText}
      ></textarea>
      <div className='note__footer'>
        <p>{charLimit - noteText.length} remaining</p>
        <button className='note__saveBtn' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
