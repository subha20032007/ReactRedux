import { DELETE_TODO_SUCCESS, EDIT_TODO_SUCCESS, GET_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_FAILUER } from "./actionType"

export const getAction=(payload)=>{
    return{type:GET_TODO_SUCCESS,payload}
}
export const requestAction=(payload)=>{
    return{type:TODO_FAILUER,payload}
}
export const failureAction=(payload)=>{
    return{type:TODO_FAILUER,payload}
}
export const toggleAction=(payload)=>{
    return{type:TOGGLE_TODO_SUCCESS,payload}
}
export const deleteAction=(payload)=>{
    return{type:DELETE_TODO_SUCCESS,payload}
}
export const postAction=(payload)=>{
    return{type:POST_TODO_SUCCESS,payload}
}


// export const GET_TODO_SUCCESS="GET_TODO_SUCCESS"
// export const TODO_REQUEST="TODO_REQUEST"
// export const TODO_FAILUER="TODO_FAILUER"
// export const POST_TODO_SUCCESS="POST_TODO_SUCCESS"
// export const DELETE_TODO_SUCCESS="DELETE_TODO_SUCCESS"
// export const EDIT_TODO_SUCCESS="EDIT_TODO_SUCCESS"