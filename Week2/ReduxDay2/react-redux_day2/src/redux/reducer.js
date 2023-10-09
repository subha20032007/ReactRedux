import { ADD, REDUCE } from "./actionType"

export const reducer=(state,{type,payload})=>{

switch(type){
    case ADD:
    return {...state,count:state.count+payload}
    case REDUCE :
   return {...state,count:state.count-payload} 
    default:
        return state
}
}