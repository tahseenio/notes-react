import React, { useContext } from 'react';
import { ContextProps, NotesContext } from '../../context/NotesContext';
import {
  ColorChangeContext,
  ColorChangeProps,
} from '../../context/ColorChangeContext';

interface Props {
  color: string;
}

export const IndividualColor = ({ color }: Props) => {
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
