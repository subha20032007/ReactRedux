import { useState } from "react"

export const Counter=({initCount})=>{
const [count,setCount]=useState(initCount)

    return(
     <>
        <h2 data-testid = "counter-header">Counter</h2>
        <h3 data-testid = "count">{count}</h3>
        <button data-testid = "add-btn" onClick={()=>setCount(count+1)}>+</button>
        <button data-testid = "subtract-btn" onClick={()=>setCount(count-1)}>-</button>
       <button data-testid = "double-btn" onClick={()=>setCount(count*2)}>Double</button>
        </>
    )
}


// - create a counter component that will take the initial value as `0` as a prop, and have an increment, decrement and double button
//   - increment button should have
//     - text content as `+` and data-testid = `add-btn`
//   - decrement button should have
//     - text content as `-` and data-testid = `subtract-btn`
// - on clicking the increment or decrement button the value should increase or decrease by `1`
// - create another button with text `Double` and data-testid = `double-btn`
//   - on clicking the button the value of the counter should be multiplied by 2
// - the value of counter should be displayed in `h3` tag with data-testid = `count`
// - The component should have a heading in `h2` tag with text as `Counter` and data-testid = `counter-header`