import React from 'react';
import Grid from '@mui/material/Grid';
import {DogComponent, DogComponentProps} from './DogComponent'

let pets = require('../pets.json');

export default function DogGrid() {


//   <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//   {Array.from(Array(6)).map((_, index) => (
//     <Grid item xs={2} sm={4} md={4} key={index}>
//       <Item>xs=2</Item>
//     </Grid>
//   ))}
// </Grid>

  return (
  <Grid container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 10 }}>

    {pets &&
      pets.map(
        ({id, ...dogProps}: DogComponentProps) =>
          <DogComponent id={id} {...dogProps}/>
      )
    }
  </Grid>           
  )
}