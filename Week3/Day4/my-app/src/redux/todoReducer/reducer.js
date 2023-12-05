import { DELETE_TODO_SUCCESS, EDIT_TODO_SUCCESS, GET_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_FAILUER, TODO_REQUEST } from "./actionType";

const inititalState={
    isload:false,
    isErr:false,
    todos:[]
}
export const reducer=(state=inititalState,{type,payload})=>{
    switch(type){
    case GET_TODO_SUCCESS:
        return {...state,isload:false,todos:[...payload]}
    case TODO_REQUEST:
        return {...state,isload:true}
    case TODO_FAILUER:
        return {...state,isload:true}
        case POST_TODO_SUCCESS:
     return {...state,isload:false,todos:[...state.todos,payload]}
    case TOGGLE_TODO_SUCCESS:
    return {...state,isload:false,todos:todos.map((el)=>el.id===payload?{...el,status:!el.status}:{...el})}
    case DELETE_TODO_SUCCESS:
     return {...state,isload:false,todo:todos.filter((el)=>el.id!==payload)}
     default:
        state;
    }
}

// export const GET_TODO_SUCCESS="GET_TODO_SUCCESS"
// export const TODO_REQUEST="TODO_REQUEST"
// export const TODO_FAILUER="TODO_FAILUER"
// export const POST_TODO_SUCCESS="POST_TODO_SUCCESS"
// export const DELETE_TODO_SUCCESS="DELETE_TODO_SUCCESS"
// export const TOGGLE_TODO_SUCCESS="TOGGLE_TODO_SUCCESS"