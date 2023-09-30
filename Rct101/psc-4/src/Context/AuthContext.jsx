import React, { createContext, useState } from 'react'

export const AuthContext=createContext()
export const AuthContextProvider = ({children}) => {
    const [isAuth,setAuth]=useState(false)
    const [token,setToken]=useState("")
const Login=(Authtoken)=>{
    setAuth(true)
    setToken(Authtoken)
}
const logOut=()=>{
    setAuth(false)
}
  return (
    <AuthContext.Provider value={{isAuth,token,Login,logOut}}> 
{children}
    </AuthContext.Provider>
  )
}
