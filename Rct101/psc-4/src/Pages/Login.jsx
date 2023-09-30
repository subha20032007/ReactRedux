import { Input,Button, Box,Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const [email,setEmail]=useState("")
  const [password,setPassWord]=useState("")
  const {isAuth,Login}=useContext(AuthContext)
  console.log(email)
  console.log(password)
  const handelLogin=(e)=>{
    e.preventDefault()
     axios({
      method:"post",
      url:"https://reqres.in/api/login",
     data:{
  email,
  password
      }
     }).then((res)=>{
    Login(res.data.token)
     setEmail("")
     setPassWord("")}
     )
     .catch((err)=>console.log(err))
 
    }
    if(isAuth){
    return  <Navigate to="/" />
    }
  return (
  <>
 
<Box  boxShadow="md" h="auto" w="25%" m="auto" mt="30px" padding="20px" >
  <Text  color="red.300" fontWeight={'bold'} >Enter Your Email</Text>
  <Input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
  <Text color="red.300" fontWeight={'bold'}>Enter Your Password </Text>
  <Input  onChange={(e)=>setPassWord(e.target.value)} placeholder='Enter PassWord'/>
  <Button m="20px" bg={"green.400"} onClick={handelLogin}>Login</Button>
</Box>
 <h1>"email": "eve.holt@reqres.in",
    "password": "cityslicka"</h1>
  </>
  )
}

export default LoginPage