import * as React from 'react';
import { useSorobanReact } from '@soroban-react/core';
import addresses from './addresses.json'
import {useContractValue, useContractValueProps} from './useContractValue'
import * as SorobanClient from 'soroban-client';
let xdr = SorobanClient.xdr;
import BigNumber from 'bignumber.js'
import * as convert from '../utils/convert'
import {numberIdentifier} from './identifiers'


interface IsPetAdoptedProps {
    id: number,
}


export function IsPetAdopted ({id}: IsPetAdoptedProps){

    const sorobanContext = useSorobanReact()
    const useIsAdopted = (id: number): boolean => {
        
        // useContractValue(Constants.CrowdfundId, 'deadline')
       
//bigNumberToI128

        let id_BN = new BigNumber(id)
        let id_scval = convert.bigNumberToI128(id_BN.shiftedBy(0).decimalPlaces(0))

       
        let numId = numberIdentifier(Buffer.from('1', 'hex'))

            console.log(" is adopted ", id, " : ", useContractValue({
                            contractId: addresses.pet_adopt_id,
                            method: 'adopted',
                            params: [id_scval],
                            sorobanContext: sorobanContext}))
       

       

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