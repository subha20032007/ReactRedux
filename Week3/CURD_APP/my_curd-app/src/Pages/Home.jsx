import React from 'react'
import ProductList from '../Componets/ProductList'
import { Sidebar } from '../Componets/Sidebar'
import styled from 'styled-components'

export const Home = () => {
  return (
    <DIV>
      <div className='sideBar'> <Sidebar/></div>
      <div className="productList">  <ProductList/></div>
      
       
    </DIV>
  )
}
const DIV=styled.div`
display: flex;
.sideBar{
width: 15%;
border: 1px solid gray;
padding: 30px;
}
.productList{
  width:85%;

}
`
