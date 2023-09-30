import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Button,Text } from '@chakra-ui/react'
import { Navigate} from 'react-router-dom'

const Home = () => {
  const{logOut,isAuth,token}=useContext(AuthContext)
if(!isAuth){
  return <Navigate to="/login"/>
}
console.log(isAuth)
  return (
  <>
<Text color="green.600" fontSize={"80px"} >Home Page</Text>
<p color={"blue.400"}>User Is :{
  isAuth?"Login":"Logout"
} </p>
<Text color={"blue.400"}>Token:{token}</Text>
<Button isDisabled={!isAuth} bg={"green.400"} onClick={logOut}>Logout</Button>
  </>
  )
}

export default Home