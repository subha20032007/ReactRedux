import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
const links=[
{path:"/",element:"Home"},
{path:"/about",element:"About"},
{path:"/contact",element:"Contact"},
{path:"/login",element:"Login"},
{path:"/register",element:"Register"},
{path:"/products",element:"Products"}
]
const Navbar = () => {
  return (
    <>
   <Flex align={"center"} justifyContent={"space-around"} boxShadow="md">
      {
        links.map((el)=>
      <Text p="20px" size="xl" fontWeight="bold"> <NavLink style={({isActive})=> {return isActive?{color:"red"}:{color:"teal"}} } key={el.path} to={el.path}>{el.element}</NavLink></Text>
        )
      }
    </Flex>
    </>
  )
}

export default Navbar