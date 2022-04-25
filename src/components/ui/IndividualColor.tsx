import React, { useContext } from 'react';
import { ContextProps, NotesContext } from '../../context/NotesContext';
import {
  ColorChangeContext,
  ColorChangeProps,
} from '../../context/ColorChangeContext';

export const IndividualColor = ({ color }: any) => {
  const { handleColorChange } = useContext(NotesContext) as ContextProps;
  const { toggleColorPane, id } = useContext(
    ColorChangeContext
  ) as ColorChangeProps;

  const handleClick = (): void => {
    toggleColorPane((state) => !state);
    handleColorChange(color, id);
  };

  return (
    <li
      className='color__background'
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></li>
  );
};
