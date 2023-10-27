import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"
import axios from "axios"
export const postProducts=(products)=>(dispatch)=>{
dispatch(requestAction())
    axios.post(`http://localhost:8080/products`,products)
    .then((res)=>{
dispatch(postSuccessAction(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(failuerAction())
    })
}
export const getProduct=(paramsObj)=>(dispatch)=>{
    dispatch(requestAction())
    axios.get(`http://localhost:8080/products`,paramsObj)
    .then((res)=>{
        dispatch(getSuccessAction(res.data))
        // console.log(res)
    }).catch((err)=>{
        dispatch(postSuccessAction())
console.log(err)
    })
}
export const requestAction=()=>{
    return{type:PRODUCT_REQUEST}
}
export const failuerAction=()=>{
    return{type:PRODUCT_FAILURE}
}
export const getSuccessAction=(payload)=>{
    return{type:GET_PRODUCT_SUCCESS,payload}
}
export const postSuccessAction=(payload)=>{
    return{type:POST_PRODUCT_SUCCESS,payload}
}