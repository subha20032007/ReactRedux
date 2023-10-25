import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import { Home } from './Home'
import { Admin } from './Admin'
import {Login} from './Login'
import { PrivateRoutes } from '../Componets/PrivateRoutes'

const AllRoutes = () => {
  return (
    
        <Routes>
            <Route path="/" element={
           <Home/>
           }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/add_products" element={<PrivateRoutes><Admin/></PrivateRoutes>}/>
        </Routes>
  
  )
}

export default AllRoutes