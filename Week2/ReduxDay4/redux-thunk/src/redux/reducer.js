import { GET_TODO_FAILUER, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_SUCCESS } from "./actionType";
const initialState={
    todos:[],
    isLoad:false,
    isErr:true
}
export const reducer=(state=initialState,{type,payload})=>{

    switch(type){
        case GET_TODO_REQUEST:
            return {...initialState,isLoad:true}
        case GET_TODO_FAILUER:
            return {...initialState,isLoad:false,isErr:true}
        case GET_TODO_SUCCESS:
            return {...initialState,isLoad:false,todos:payload}
        case POST_TODO_SUCCESS:
            return {...initialState,isLoad:false,todos:[...state.todos,payload]}
        default:
            return payload;
    }
    
}

// export const GET_TODO_REQUEST='GET_TODO_REQUEST'
// export const GET_TODO_FAILUER='GET_TODO_FAILUER'
// export const GET_TODO_SUCCESS='GET_TODO_FAILUER'