import { useEffect, useState } from "react";

const useOnlineStatus = () => {
const [isUserOnline,setisUserOnline]=useState(false)

useEffect(()=>{
   let handelOnline=()=>{
    setisUserOnline(true)
   }
   let handelOffline=()=>{
    setisUserOnline(false)
   }
   window.addEventListener("online",handelOnline)
   window.addEventListener("offline",handelOffline)

   return()=>{
    window.removeEventListener("online",handelOnline)
    window.removeEventListener("offline",handelOffline)
}
},[])

return isUserOnline
};

export default useOnlineStatus;
