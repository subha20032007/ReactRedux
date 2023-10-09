import { useDispatch, useSelector } from "react-redux"
import { addAction, reduceAction } from "../redux/action"

export const Counter=()=>{

    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()
    console.log(count)
    const handelAdd=()=>{
      dispatch(addAction(1))
    }
    const handelReduce=()=>{
     dispatch(reduceAction(1))
    }
    return(
        <>
<h1>Count:{count}</h1>
<button onClick={handelAdd}>Inc +</button>
<button onClick={handelReduce}>Dec -</button>
        </>
    )
}