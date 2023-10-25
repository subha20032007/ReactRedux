import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes";

let initialState={
    isLoad:false,
    isErr:false,
    products:[]
}
export const reducer=(state=initialState,{type,payload})=>{

    switch(type){
    case PRODUCT_REQUEST:
        return {...state,isLoad:true}
    case PRODUCT_FAILURE:
    return  {...state,isErr:true}
    case GET_PRODUCT_SUCCESS:
        return {...state,isLoad:false,products:payload}
    case POST_PRODUCT_SUCCESS:
        return {...state,isLoad:false,products:[...state.products,payload]}
    default:
        return state
    }

}