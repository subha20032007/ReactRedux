import { useState } from "react"
import axios from "axios"
import {useDispatch} from "react-redux"
import { errAction, loadAction, postAction } from "../redux/action"
export const AddTodo=()=>{
const [title,setTitle]=useState("")
const dispatch=useDispatch()

const handelCLick=()=>{
 
   let payload={
    title,
    status:false
   }
   dispatch(loadAction())
   axios.post(`http://localhost:8080/todos`,payload)
   .then((res)=>{
  dispatch(postAction(res.data))
   }).catch((err)=>{
    dispatch(errAction())
    console.log(err)
   })
   setTitle("")
}

    return(
        <>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button onClick={handelCLick}>ADD</button>
        </>
    )
}