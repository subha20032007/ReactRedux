import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/AuthReducer/action'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

const initialState={
    email:"",
    password:""
}

export const Login = () => {
const [authData,setAuthData]=useState(initialState)
const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
const err=useSelector((store)=>store.AuthReducer.isErr)
// console.log(err)
const dispatch=useDispatch()
const navigate=useNavigate()
const location=useLocation()
// console.log("--->",location)
// console.log(isAuth)
const handelClick=()=>{
dispatch(userLogin(authData)).then(()=>{
navigate(location.state)
})
setAuthData(initialState)
}
    return (
    <DIV isAuth={isAuth} 
    err={err}
    >
        <h1>LOGIN</h1>
        <h3>{isAuth&&!err?"Login Successfull!":"Login Your Account"}</h3>
        <input value={authData.email} onChange={(e)=>{setAuthData({...authData,email:e.target.value})}} type="email" />
        <input value={authData.password} onChange={(e)=>{setAuthData({...authData,password:e.target.value})}}  type="password" />
        <button onClick={handelClick}>Login</button>
        <p>
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
</p>
    </DIV>
  )
}
const DIV=styled.div`
height:350px;
width:200px;
margin:auto;
margin-top: 30px;
border:1px solid violet;
padding:3%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
gap:20px;
input{
height:60px;
border:${({err})=>(err?"1px solid red":"2px solid violet")};

}
button{
border:0px;
color:white;
background-color:violet;
}
h3{
    color:${({isAuth})=>(isAuth?"green":"red")}
}
`