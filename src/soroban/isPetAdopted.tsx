import { SorobanContextType } from '@soroban-react/core';
import addresses from './addresses.json'
import {useContractValue} from '@soroban-react/contracts'
import BigNumber from 'bignumber.js'
import {numberToU32, scvalToBool} from '@soroban-react/utils'

interface IsPetAdoptedProps {
    id: number,
    sorobanContext: SorobanContextType
}


export function isPetAdopted ({id, sorobanContext}: IsPetAdoptedProps){
//            let id_BN = BigNumber(id)
            let id_scval = numberToU32(id)
            let isAdopted_scval
            let isAdopted 
            try{
                isAdopted_scval = useContractValue({
                    contractId: addresses.pet_adopt_id,
                    method: 'adopted',
                    params: [id_scval],
                    sorobanContext: sorobanContext}).result
                isAdopted = scvalToBool(isAdopted_scval)
                console.log("pet id: ", id, " is adopted", isAdopted)

            }
            catch{}  
        return isAdopted
    }


    
