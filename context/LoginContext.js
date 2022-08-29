import React, {createContext, useContext, useState, useEffect} from "react";
import { useRouter } from "next/router";

const Context = createContext();

export const LoginContext = ({children}) => {
    const router = useRouter();
    const [loginStatus, setLoginStatus] = useState(false)
    
    useEffect(()=>{
        if(localStorage.getItem('signin_token')){
          setLoginStatus(true)
        }
    },[router.query])

    const handleLogout = ()=> {
        localStorage.removeItem('signin_token')
        setLoginStatus(false)
        router.push('/')
    }

return(
    <Context.Provider value={{loginStatus, handleLogout}}>
        {children}
    </Context.Provider>
)
}
export const useLoginContext = () => useContext(Context)