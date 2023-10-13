import { ADD, GET_TODO_FAILUER, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILUER, POST_TODO_SUCCESS, REDUCE } from "./actionType"

export const addAction=(payload)=>{
return {
    type:ADD,
    payload
}
}
export const reduceAction=(payload)=>{
    return {
        type:REDUCE,
        payload
    }
}
// GET_TODO_REQUEST="GET_TODO_REQUEST"
// export const GET_TODO_FAILUER="GET_TODO_FAILUER"
// export const GET_TODO_SUCCESS="GET_TODO_SUCCESS"

export const todoRequestAction=()=>{
return{type:GET_TODO_REQUEST}
}
export const todoFailuerAction=()=>{
    return{type:GET_TODO_FAILUER}
}
export const todoSuccessAction=(payload)=>{
 
    return{type:GET_TODO_SUCCESS,payload}
}
export const todoPostFailuerAction=()=>{
    return{type:POST_TODO_FAILUER}
}
export const todoPostSuccessAction=(payload)=>{
    console.log("As*****",payload)
    return{type:POST_TODO_SUCCESS,payload}
}