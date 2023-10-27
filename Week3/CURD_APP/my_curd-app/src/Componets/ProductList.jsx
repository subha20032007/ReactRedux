import React, { useEffect } from 'react'
import { getProduct } from '../redux/ProductReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import { useLocation, useSearchParams } from 'react-router-dom'



const ProductList = () => {
const products=useSelector((store)=>store.productReducer.products)
const dispatch=useDispatch()
const location=useLocation()
const [searchParams]=useSearchParams()
console.log(searchParams.getAll('category'))


const obj={
  params:{
    gender:searchParams.getAll('category')
  }
}
    useEffect(()=>{
       dispatch(getProduct(obj))
        },[location.search])

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
margin:auto;
grid-template-columns:auto auto auto auto;
grid-gap: 30px;
padding: 30px;
`