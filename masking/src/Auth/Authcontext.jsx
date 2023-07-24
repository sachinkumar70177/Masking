import {createContext} from "react";
import {useState} from "react"
export const Authcontext=createContext();

const Authcontextprovider=({children})=>{
    const [isAuth,setisauth]=useState(false)
    const handlelogout=()=>{
setisauth(false)
    }
   const mail={mail:""}
return<Authcontext.Provider value={{isAuth,setisauth,mail,handlelogout}}>
    {children}
</Authcontext.Provider>
}
export default Authcontextprovider