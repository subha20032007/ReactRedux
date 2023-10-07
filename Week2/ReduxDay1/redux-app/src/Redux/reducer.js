import { DEC, INC } from "./actionType";


export const reducer=(state,{type,payload})=>{
    // console.log(type,payload,state)
    switch(type){
       case INC:
        return {...state,count:state.count+payload}
        case DEC:
            return {...state,count:state.count-payload}
        default :
        return state;
    }
}