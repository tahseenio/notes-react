import React from 'react';
import { IndividualColor } from './ui/IndividualColor';

export const ColorPane = () => {
  return (
    <ul className='color-pane--wrapper'>
      <IndividualColor color={'#ff6d5b'} />
      <IndividualColor color={'#e6b905'} />
      <IndividualColor color={'#6fd262'} />
      <IndividualColor color={'#ea86c2'} />
      <IndividualColor color={'#c78eff'} />
      <IndividualColor color={'#5ac0e7'} />
      <IndividualColor color={'#aaaaaa'} />
    </ul>
  );
};
