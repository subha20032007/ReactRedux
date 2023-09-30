import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import LoginPage from '../Pages/Login'
import Products from '../Pages/Products'
import Register from '../Pages/Register'
import SingleProducts from '../Pages/SingleProducts'
import NotFound from '../Pages/NotFound'
import { PrivateRoute } from './PrivateRoute'
const AllRoutes = () => {
  return (
<>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/login' element={<LoginPage/>}></Route>
<Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/products/:id' element={<PrivateRoute><SingleProducts/></PrivateRoute>}></Route>
<Route path='*' element={<NotFound/>}></Route>
</Routes>
</>
  )
}

export default AllRoutes