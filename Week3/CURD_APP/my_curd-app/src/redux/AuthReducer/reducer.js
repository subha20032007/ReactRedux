import { LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const inititalState={
    isLoad:false,
    isErr:false,
    isAuth:false,
    errMsg:"",
    token:""
}

export const reducer=(state=inititalState,{type,payload})=>{
switch(type){
    case LOGIN_REQUEST:
        return {...state,isLoad:true}
    case LOGIN_FAILUER:
        return {...state,isLoad:false,isErr:true,errMsg:payload}
    case LOGIN_SUCCESS:
        return {...state,isLoad:false,isAuth:true,token:payload}
    default:
        return state
}
}