import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { ContextProps } from '../context/NotesContext';
import { MdSearch } from 'react-icons/md';

const Search = () => {
  const { setSearchText } = useContext(NotesContext) as ContextProps;

  function handleSearchText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <div className='search__container'>
      <div className='searchbar'>
        <MdSearch className='searchIcon' />
        <input
          className='search__input'
          type='text'
          placeholder='Search...'
          onChange={(e) => handleSearchText(e)}
        />
      </div>
    </div>
  );
};

export default Search;
