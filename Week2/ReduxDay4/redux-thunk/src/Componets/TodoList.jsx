import { useEffect } from "react"
import { AddTodo } from "./AddTodo"
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import { errAction, getAction, loadAction } from "../redux/action"
export const TodoList=()=>{
const todos=useSelector((state)=>state.todos)

console.log(todos)
    const dispatch=useDispatch()
     const getData=()=>{
        dispatch(loadAction())
        axios.get(`http://localhost:8080/todos`)
        .then((res)=>{
            dispatch(getAction(res.data))
        }).catch((err)=>{
            console.log(err)
            dispatch(errAction())
        })
    }
    useEffect(()=>{
       getData()
    })
    return(
        <>
        {
           
           <>
            <h1>ADD TODO</h1>
            <AddTodo/>
             {
                todos.map((el)=>(
                    <div>{el.title}-{el.status?"Complete":"Not Complete"}</div>
                ))
            }
            </> 
}

        </>
    )
}
//12345