import React from 'react'
import { SorobanContextType } from "@soroban-react/core"
import Button from '@mui/material/Button';
import {useSendTransaction, contractTransaction} from '../soroban/useSendTransaction'
import * as SorobanClient from 'soroban-client'
import addresses from '../soroban/addresses.json'


interface AdoptPetButtonProps {
    id: number,
    sorobanContext: SorobanContextType
}


export function AdoptPetButton ({id, sorobanContext}: AdoptPetButtonProps){
    const { sendTransaction } = useSendTransaction()
    const { activeChain, server, address } = sorobanContext
    
    
    const handleAdopt = async (): Promise<void> => {
        if (!activeChain || ! address || !server) {
            console.log("No active chain")
            return
        }
        else{
            try{
            let { sequence } = await server.getAccount(address)
            let source = new SorobanClient.Account(address, sequence)
    
            const transaction = contractTransaction({
                networkPassphrase: activeChain.networkPassphrase,
                source: source,
                contractId: addresses.pet_adopt_id,
                method: 'adopt'})

                const result = await sendTransaction(transaction)
                console.log("adoptPet.tsx:sendTransaction:result: ", result)
            }
            catch(error){
                console.log("Error while sending the transaction: ", error)

            }
        }

    }


    return(
        <Button
            size="small"
            variant="contained"
            onClick={handleAdopt}>
              Adopt it now! ❤️
          </Button>

    )
}