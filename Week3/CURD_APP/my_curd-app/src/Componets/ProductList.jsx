import React, { useEffect } from 'react'
import { getProduct } from '../redux/ProductReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import styled from 'styled-components'



const ProductList = () => {
const products=useSelector((store)=>store.productReducer.products)
console.log(products)
const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getProduct)
        },[])
  return (
    <DIV>
        {
            products.length>0&&products.map((el)=>(
               <ProductCard key={el.id} {...el} />
            ))
        }
    </DIV>
  )
}

export default ProductList;
const DIV=styled.div`
border:1px solid red;
display:grid;
width:80%;
margin:auto;
grid-template-columns:auto auto auto auto;
grid-gap: 30px;
padding: 30px;
`