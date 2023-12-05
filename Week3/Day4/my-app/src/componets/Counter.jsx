import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { handelAdd, handelReduce } from '../redux/counterReducer/action'
export const Counter = () => {
    const dispatch=useDispatch()
    const count = useSelector((state)=>state)
    console.log(count)
  return (
    <div>
        <h1>Counter</h1>
        <h3>Count is:{}</h3>
        <button onClick={()=>{dispatch(handelAdd(1))}}>ADD
            </button>
            <button onClick={()=>{dispatch(handelReduce(2))}}>REDUCE
            </button>
    </div>
  )
}


