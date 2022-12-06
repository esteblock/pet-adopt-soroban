import React from 'react';
import internal from 'stream';

export interface DogComponentProps {
    id: number,
    name: string,
    picture: string,
    age: number,
    breed: string,
    location: string
}
export function DogComponent ({name, age, breed, id}: DogComponentProps){
    return(
        <div key={id}>
            id: {id}
            Name: {name}
            Age: {age}
            Breed: {breed}
        </div>
    )
}
