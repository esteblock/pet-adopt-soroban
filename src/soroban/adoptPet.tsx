import { SorobanContextType } from "@soroban-react/core"
interface adoptPetProps {
    id: number,
    sorobanContext: SorobanContextType
}


export function adoptPet ({id, sorobanContext}: adoptPetProps){
    console.log("Pressing adopt button for id :", id)
   
}