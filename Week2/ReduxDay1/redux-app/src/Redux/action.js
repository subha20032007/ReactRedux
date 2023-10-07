import { DEC, INC } from "./actionType"

export const incAction=(payload)=>{

    return{type:INC,payload}
}
export const decAction=()=>{

    return{type:DEC,payload:1}
}