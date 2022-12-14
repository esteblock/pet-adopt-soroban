// import React from 'react'
// import { useContractValue } from '@soroban-react/contracts'
// import { truncate } from 'fs'

export function isPetAdopted(petId: number): boolean {
    console.log(petId)
    if(petId % 2 == 0) {
        return true
    }
    else{
        return false
    }
}