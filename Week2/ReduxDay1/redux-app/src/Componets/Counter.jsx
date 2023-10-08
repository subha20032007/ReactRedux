
import { store } from "../Redux/store"
import { decAction, incAction } from "../Redux/action"
import { useState } from "react"


//12
export const Counter=()=>{
const [count,setCount]=useState(0)
    const {getState,dispatch,subscribe}=store
subscribe(()=>{
    setCount((prev)=>prev+1)
})

    const handelAdd=()=>{
       dispatch(incAction(3))
       console.log("call +")
    }
    const handelDec=()=>{
     dispatch(decAction())
     console.log("call -")
    }
    return (
        <>
        <h1>Count :{getState().count}</h1>
<button onClick={handelAdd}>Inc+
</button>
<button onClick={handelDec}>Dec-
</button>
        </>
    )
}