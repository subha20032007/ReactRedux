import { GET_TODO_FAILUER, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_SUCCESS } from "./actionType"

export const loadAction=()=>{
   return {type:GET_TODO_REQUEST}
}
export const errAction=()=>{
    return  {type:GET_TODO_FAILUER}
}
export const getAction=(payload)=>{
    console.log("g")
    return  {type:GET_TODO_SUCCESS,payload}
}
export const postAction=(payload)=>{
    console.log("p")
    return{type:POST_TODO_SUCCESS,payload}
}