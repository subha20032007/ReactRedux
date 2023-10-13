import axios from "axios"
import { useState } from "react"
import { todoPostSuccessAction } from "../redux/action"
import { useDispatch } from "react-redux"

export const TodoInput=()=>{
const [title,setTitle]=useState("")
const dispatch=useDispatch()
const postTodo=()=>{
    
    let newTodo={
        title,
        status:false
    }
    axios.post(`http://localhost:8080/todos`,newTodo)
    .then((res)=>{
 //console.log(res.data)
 dispatch(todoPostSuccessAction(res.data))
 
})
    .catch((err)=>{
        console.log(err)
    })
}
const handelChange=(e)=>{
setTitle(e.target.value)
}
const handelClick=()=>{
postTodo()
setTitle("")
}
return(
    <>
 <input value={title} onChange={handelChange}/>
 <button onClick={handelClick}>ADD</button>
    </>
   
)
}