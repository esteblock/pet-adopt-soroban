import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { isPetAdopted } from '../soroban/isPetAdopted';
import {adoptPet} from '../soroban/adoptPet'
import { useSorobanReact } from '@soroban-react/core';

export interface DogComponentProps {
    id: number,
    name: string,
    picture: string,
    age: number,
    breed: string,
    location: string
}


export function DogComponent (
    {name, age, breed, id, location, picture}:
        DogComponentProps){

    const sorobanContext = useSorobanReact()

    return (
    
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="socttish-terrier"
        height="345"
        image={picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography>Age: {age}</Typography>
          <Typography>Breed: {breed}</Typography>
          <Typography>Location: {location}</Typography>
          <Typography> Adopted: {
          isPetAdopted({id: id, sorobanContext: sorobanContext})  ? "Yes 🥰!" : "Not yet 😥" 
          } </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={()=>{ 
          adoptPet({
            id: id,
            sorobanContext: sorobanContext
          })}}>
            Adopt it now! ❤️
        </Button>
      </CardActions>
    </Card>
  );
}