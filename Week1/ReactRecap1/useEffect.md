use Effect is basically a side effect
use Effect works only componet mounting and unmounting
see example
*with out dependency
useEffect(()=>{
    //work for  on mounting
})
*with dependency
useEffect(()=>{
    //onmounting phase
},[when this depedency change])
*clean up
useEffect(()=>{
    //logic on mounting
   return ()=>{
//unmount phase
    }
},[dependancy])
***clean up work unmount phase and when the arrry of dependency change