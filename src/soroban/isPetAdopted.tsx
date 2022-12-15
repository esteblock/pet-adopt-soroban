import { SorobanContextType } from '@soroban-react/core';
import addresses from './addresses.json'
import {useContractValue, useContractValueProps} from '@soroban-react/contracts'
import BigNumber from 'bignumber.js'
import {bigNumberToI128} from '@soroban-react/utils'

interface IsPetAdoptedProps {
    id: number,
    sorobanContext: SorobanContextType
}


export function isPetAdopted ({id, sorobanContext}: IsPetAdoptedProps){
            let id_BN = new BigNumber(id)
            let id_scval = bigNumberToI128(id_BN.shiftedBy(0).decimalPlaces(0))
            let isAdopted = false
            try{
                isAdopted = useContractValue({
                    contractId: addresses.pet_adopt_id,
                    method: 'adopted',
                    params: [id_scval],
                    sorobanContext: sorobanContext})
            }
            catch (error){
                console.log("IsPetAdopted.tsx: error: ", error)

            }
                
        return isAdopted
    }


    
