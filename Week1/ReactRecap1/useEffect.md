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