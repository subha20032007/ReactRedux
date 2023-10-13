import { useState } from "react"
import { TodoInput } from "./TodoInput"
import axios from "axios"
import {  todoRequestAction,todoFailuerAction, todoSuccessAction,  } from "../redux/action"
import { useDispatch, useSelector } from "react-redux"
export const TodoList=()=>{
const todos=useSelector((state)=>state.todos)
const dispatch=useDispatch()
console.log(todos)
    const getTodo=()=>{
        dispatch(todoRequestAction())
        axios.get(`http://localhost:8080/todos`).then((res)=>{
     //   console.log(res.data)
       dispatch( todoSuccessAction(res.data))
    }).catch((err)=>{
          dispatch(todoFailuerAction())
        })
    }
    useState(()=>{
getTodo()
    },[])
    return(
        <>
<h1>ADD TODO</h1>
<TodoInput/>
{
todos?.map((el)=>(
<div key={el.id}>{el.title}-{el.status?"True":"False"}
<button onClick={dispatch}>Toggle</button>
</div>
))
}
        </>
    )
}