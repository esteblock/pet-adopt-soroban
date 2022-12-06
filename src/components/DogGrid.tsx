import React from 'react';
import {DogComponent, DogComponentProps} from './DogComponent'

let pets = require('../pets.json');

export default function DogGrid() {

  return (
  <div>
    {pets &&
      pets.map(
        ({id, ...dogProps}: DogComponentProps) =>
          <DogComponent id={id} {...dogProps}/>
      )
    }
  </div>           
  )
}