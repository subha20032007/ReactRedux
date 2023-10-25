import React, { useState } from 'react'
import styled from "styled-components"
import { postProducts } from '../redux/ProductReducer/action'
import { useDispatch } from 'react-redux'

const initialState={
    name:"",
    image:"",
    brand:"",
    price:"",
   category:"",
   gender:""
   }
export const Admin = () => {
    const [products,setProducts]=useState(initialState)
    const dispatch=useDispatch()
 const handelChange=(e)=>{
let {name,value}=e.target
 setProducts((prev)=>{
    return{...prev,[name]:name==="price"?+value:value}
 })
 }
 const handelSubmit=(e)=>{
e.preventDefault() 
dispatch(postProducts(products))
console.log(products)
setProducts(initialState)
 }
//  console.log(products)
    return (
   <>
<DIV>
    <h1>Add Products</h1>
<form onSubmit={handelSubmit}>

<input onChange={handelChange} name="name" value={products.name} type="text" placeholder='Enter Product Name' />

<input  onChange={handelChange} name="image" value={products.image} type="url"  placeholder='Enter Image Url' />

<input  onChange={handelChange} name="brand" value={products.brand} type="text" placeholder='Enter Brand Name' />

<input  onChange={handelChange} name="price" value={products.price} type="number" placeholder='Enter Product Price' />

<select  onChange={handelChange} name="category" value={products.category}>
    <option value="">Select Category</option>
    <option value="top-wear">Top Wear</option>
    <option value="bottom-wear">Bottom Wear</option>
    <option value="shoes">Shoes</option>
</select>

<select  onChange={handelChange} name="gender" value={products.gender}>
    <option value="">Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
</select>
<button type='submit'>Add Product</button>
</form>
</DIV>
   </>
  )
}
const DIV=styled.div`
    width: 400px;
   margin:auto ;
   border:1px solid  #12ca12;
   padding: 40px;
   form{
    gap:20px;
    display:flex;
    flex-direction: column;
   }
   input{
    height:40px;
    border:1px solid  #12ca12;
   }

  select{
    height:40px;
    border:1px solid  #12ca12;
   }
  button{
    height:35px;
    color:white;
    background-color: #12ca12;
    border:0px
   }
`