import React from 'react'
import { useParams } from 'react-router-dom'
import { useReducer,useEffect } from 'react'
import axios from "axios"
import { Box, Center, Heading, Stack,Text,Image } from '@chakra-ui/react'
const initialState={
  data:{},
  isLoad:false,
  isErr:false,
}
const reducerfn=(state,{type,payload})=>{
switch (type) {
  case "LOADING":
    return  {...state,isLoad:true}
case "ERR":
  return {...state,isErr:payload}
case "FETCH":
  return {...state,data:payload,isLoad:false}
  default:
    return state
}
}
const SingleProducts = () => {
  const [state,dispatch]=useReducer(reducerfn,initialState)
  const proId=useParams()
  const id=proId.id;
  const {data,isErr,isLoad}=state
  console.log(id)
      const getData=(id)=>{
    dispatch({type:"LOADING",payload:true})
          axios.get(`http://localhost:6767/products/${id}`)
          .then((res)=>dispatch({type:"FETCH",payload:res.data}))
          .catch((err)=>dispatch({type:"ERR",payload:true}))
          dispatch({type:"LOADSUC",payload:false})
      }
      useEffect(()=>{
        getData(id)
      },[id])
      console.log(isLoad)
      if(isLoad){
        return <h1>Loading.....</h1>
      }
      if(isErr){
        return <h1>Something Went Wrong.....</h1>
      }
    return (
      <>
      <Heading p="20px" color={"blue.500"}>Product</Heading>

    {
      <Center>
    
     <Box m="20px" w="500px" h="700px" boxShadow="lg" rounded="md">
   
     <Center> <Image h="450px" w="450px" src={data.image}/> </Center>
         <Stack>
             <Text p="20px">{data.title}</Text>
             <Text>{data.price}</Text>
         </Stack>
     </Box>
   
 </Center>
      }
    
     
      </>
    )
}

export default SingleProducts