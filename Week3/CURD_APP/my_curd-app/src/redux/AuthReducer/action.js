import axios from "axios"
import { LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const userLogin=(authData)=>(dispatch)=>{
    dispatch(requestAction())
   return axios.post(`https://reqres.in/api/login`,authData)
    .then((res)=>{
        dispatch(successAction(res.data.token))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(failuerAction(err))
    })
}
export const requestAction=()=>{
   return {type:LOGIN_REQUEST}
}
export const failuerAction=(payload)=>{
    return {type:LOGIN_FAILUER,payload}
}
export const successAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}