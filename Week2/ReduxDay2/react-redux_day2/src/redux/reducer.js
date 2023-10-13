import { ADD, GET_TODO_FAILUER, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILUER,POST_TODO_SUCCESS,REDUCE } from "./actionType"

export const reducer=(state,{type,payload})=>{

switch(type){
    case ADD:
    return {...state,count:state.count+payload}
    case REDUCE :
    return {...state,count:state.count-payload} 
    case GET_TODO_FAILUER:
    return {...state,isErr:true}
    case GET_TODO_REQUEST:
    return {...state,isLoad:true}
    case GET_TODO_SUCCESS:
    return {...state,todos:payload,isLoad:false}
    case POST_TODO_FAILUER:
    return  {...state,isLoad:false,isErr:true}
    case POST_TODO_SUCCESS:
    return  {...state,isLoad:false,todos:[...state.todos,payload]}
    default:
        return state
}
}
// const initialState={
//     count:0,
//     todos:[],
//     isLoad:false,
//     isErr:false
// }12