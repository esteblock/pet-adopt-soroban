import * as React from 'react';
import { useSorobanReact } from '@soroban-react/core';
import { constants } from 'fs/promises';

export interface IsPetAdoptedProps {
    id: number,
}


export function IsPetAdopted ({id}: IsPetAdoptedProps){

    const sorobanContext = useSorobanReact()
    const isAdopted = (id: number): boolean => {
        
        // useContractValue(Constants.CrowdfundId, 'deadline')
        console.log(id)
        console.log(sorobanContext)
        if(id % 2 == 0) {
            return true
        }
        else{
            return false
        }
    }

    return (
    
    <>Adopted: {isAdopted(id) ? "Yes 🥰!" : "Not yet 😥" }</>
  );
}