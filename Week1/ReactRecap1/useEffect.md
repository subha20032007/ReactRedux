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

### React Router Dom 
1. install react router dom
2. import BrowserRoute And provide to App 
3. create Routes and Route and create path and element
4. Link to="/filepath" 
5. if user redirect to single page simple link "/page/:id"
6. access id=useParams()
7. id now is a object ={id:1} access id.id
8. <Navigate to="/path"> and use Navigate redirect to path page
9. Navigate=useNavigate() it navigate to path by Navigate("/path")
