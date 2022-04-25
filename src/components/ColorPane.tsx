import React from 'react'
import { IndividualColor } from './ui/IndividualColor'

export const ColorPane = () => {
  return (
    <ul className='color-pane--wrapper'>
      <IndividualColor color={'red'} />
      <IndividualColor color={'green'} />
      <IndividualColor color={'blue'} />
      <IndividualColor color={'orange'} />
      <IndividualColor color={'yellow'} />
      <IndividualColor color={'purple'} />
    </ul>
  )
}
