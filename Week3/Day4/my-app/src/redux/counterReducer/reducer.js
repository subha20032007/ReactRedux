import { INC } from "./actionType";

const inititalState={
    isload:false,
    isErr:false,
    count:0
}

const reducer=(state=inititalState,{type,payload})=>{
    switch(type){
     case INC:
       return {...state,count:state.count+payload}
      case INC:
      return {...state,count:state.count-payload}
        default:
            state;

    }
}