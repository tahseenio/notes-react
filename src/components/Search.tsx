import React from 'react';
interface Props {
  setSearchText: Function;
}

export default function Search({ setSearchText }: Props) {
  function handleSearchText(e: React.ChangeEvent) {
    const target = e.target as HTMLTextAreaElement;
    setSearchText(target.value);
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
