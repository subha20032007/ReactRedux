import React, { useEffect, useReducer ,useState} from 'react'
import axios from "axios"
import ProductCard from '../Components/ProductCard'
import { Button, Grid, GridItem,Heading } from '@chakra-ui/react'
const initialState={
  data:[],
  isLoad:false,
  isErr:false,
  page:1
}
const reducerfn=(state,{type,payload})=>{
switch (type) {
  case "LOADING":
    return  {...state,isLoad:true}
case "ERR":
  return {...state,isErr:payload}
case "FETCH":
  return {...state,data:payload,isLoad:false}
  case "PREV":
    return {...state,page:state.page+payload}
    case "NEXT":
      return {...state,page:state.page+payload}
  default:
    return state
}
}
const Products = () => {
const [state,dispatch]=useReducer(reducerfn,initialState)
const {data,isErr,isLoad,page}=state
const limit=4
const [total,setTotal]=useState(0)
console.log(page)
    const getData=(page)=>{
  dispatch({type:"LOADING",payload:true})
        axios.get(`http://localhost:6767/products`,{
          params:{
            _page:page,
            _limit:limit
          }
        })
        .then((res)=>{
          setTotal(res.headers["x-total-count"])           
       return dispatch({type:"FETCH",payload:res.data})})
        .catch((err)=>dispatch({type:"ERR",payload:true}))
        dispatch({type:"LOADSUC",payload:false})
    }
    useEffect(()=>{
      getData(page)
    },[page])
    // console.log(isLoad)
    if(isLoad){
      return <h1>Loading.....</h1>
    }
    if(isErr){
      return <h1>Something Went Wrong.....</h1>
    }
  return (
    <>
    <Heading p="20px" color={"blue.500"}>Product</Heading>
  <Grid templateColumns="repeat(4,1fr)" gap={10}>
  {
      data?.map((el)=>(
        <GridItem >
    <ProductCard key={el.id}
    
    id={el.id}
    img={el.image}
    title={el.title}
    price={el.price}
    />
        </GridItem>


      ))
    }
  </Grid>
  <Button isDisabled={page===1} onClick={()=>dispatch({type:"PREV",payload:-1})}>PREV</Button>
  <Button>{page}</Button>
  <Button isDisabled={page===Math.ceil(total/limit)} onClick={()=>dispatch({type:"NEXT",payload:+1})}>Next</Button>
    </>
  )
}

export default Products