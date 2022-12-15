import * as React from 'react';
import { useSorobanReact } from '@soroban-react/core';
import addresses from './addresses.json'
import {useContractValue, useContractValueProps} from './useContractValue'


interface IsPetAdoptedProps {
    id: number,
}


export function IsPetAdopted ({id}: IsPetAdoptedProps){

    console.log(addresses.pet_adopt_id)
    const sorobanContext = useSorobanReact()
    const useIsAdopted = (id: number): boolean => {
        
        // useContractValue(Constants.CrowdfundId, 'deadline')
       

            console.log(useContractValue({
                            contractId: addresses.pet_adopt_id,
                            method: 'adopted',
                            sorobanContext: sorobanContext}))
       

       

        console.log(sorobanContext)
        if(id % 2 == 0) {
            return true
        }
        else{
            return false
        }
    }

    let is
    try{

        const is = useIsAdopted(id) 
    }
    catch(error){
        console.log("error: ", error)
    }

    return (
    
    <>Adopted: {is ? "Yes 🥰!" : "Not yet 😥" }</>
  );
}