import React from 'react';
interface Props {
  setSearchText?: any;
}

export default function Search({ setSearchText }: Props) {
  function handleSearchText(e: any) {
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
}
