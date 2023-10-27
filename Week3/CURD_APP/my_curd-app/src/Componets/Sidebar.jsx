import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
export const Sidebar=()=> {
    const [searchParams,setSearchParams]=useSearchParams()
    const initialCategory=searchParams.getAll('category')
const [category,setCategory]=useState(initialCategory||[])


    const handelChange=(e)=>{
        let newCategory=[...category]
     const value=e.target.value
     if(newCategory.includes(value)){
newCategory=newCategory.filter((el)=>el!==value)
     }else{
newCategory.push(value)
     }
     setCategory(newCategory)
    }
    useEffect(()=>{
       
        setSearchParams({category})
    },[category])
  return (
    <div>
        <h1>Filter by</h1>
        <div>
        <label>Men</label>
        <input value="male" onChange={handelChange} type="checkbox" checked={category.includes("male")}  /></div>
        <div>
        <label>Women</label>
        <input value="female" onChange={handelChange} type="checkbox" checked={category.includes("female")}   /></div>
        <div>
        <label>Kids</label>
        <input value="kids" onChange={handelChange} type="checkbox" checked={category.includes("kids")}   /></div>
    </div>
  )
}

