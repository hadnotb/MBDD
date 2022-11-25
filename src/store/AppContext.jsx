import { createHashHistory } from "@remix-run/router";
import{ createContext } from "react";
import { useState } from "react";

export const MyContext = createContext(null);



export const AppContext = ({children}) => {

    let isAuth = false;
    if(sessionStorage.getItem("tok")){
        isAuth = true;
    }
    
    const [store,setStore] = useState({
        
        isUserAuth : isAuth,
        theme: 'light',
        user:{
            email:"",
            password:"",
            firstname:"",
            lastname:"",
            biography:"",
            postalCode:"",
            city:"",
            birthdate:"",
            avatar:""
        }
    });
    
   const handle = (e) =>{
    
        const key = e.target.name;
        const value = e.target.value;
        
        setStore({
            ...store, user: {
                ...store.user, [`${key}`] : value
            }
        })
   }
   
    return(
        <MyContext.Provider value={{store,setStore,handle}}>
            {children}
        </MyContext.Provider>
    )
}