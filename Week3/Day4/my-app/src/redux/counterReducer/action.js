import { DEC, INC } from "./actionType"


export const incAction=(payload)=>{
    return {type:INC,payload}
}

export const decAction=(payload)=>{
    return {type:DEC,payload}
}
export const handelAdd=(dispatch)=>(val)=>{
  dispatch(incAction(val))
}
export const handelReduce=(dispatch)=>(val)=>{
    dispatch(decAction(val))
  }