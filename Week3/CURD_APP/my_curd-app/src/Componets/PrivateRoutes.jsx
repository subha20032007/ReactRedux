import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoutes=({children})=>{
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
   const location=useLocation()

    return isAuth?children:<Navigate state={location.pathname} to={"/login"}/>
}