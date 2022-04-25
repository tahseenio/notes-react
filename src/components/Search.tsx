import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { ContextProps } from '../context/NotesContext';

const Search = () => {
  const { setSearchText } = useContext(NotesContext) as ContextProps;

  function handleSearchText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <div className='search__container'>
      <div className='searchbar'>
        <input
          className='search__input'
          type='text'
          placeholder='search...'
          onChange={(e) => handleSearchText(e)}
        />
      </div>
    </div>
  );
};

export default Search;
