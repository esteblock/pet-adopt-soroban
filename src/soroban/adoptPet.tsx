import { SorobanContextType } from "@soroban-react/core"
import {useSendTransaction, contractTransaction} from './useSendTransaction'
import * as SorobanClient from 'soroban-client'
import addresses from './addresses.json'


interface adoptPetProps {
    id: number,
    sorobanContext: SorobanContextType
}


export async function adoptPet ({id, sorobanContext}: adoptPetProps){
    const { sendTransaction } = useSendTransaction()
    const { activeChain, server, address } = sorobanContext
    
    

    if (!activeChain || ! address || !server) {
        console.log("No active chain")
        return
    }
    else{
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

   
}