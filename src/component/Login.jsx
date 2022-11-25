import React, { useEffect } from 'react';
import Input from './Input';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import { useContext } from 'react';
import { MyContext } from '../store/AppContext';
import { useReducer } from 'react';

const Login = () => {

    const {store, setStore} = useContext(MyContext)
    const navigate = useNavigate();
    

    const [user, setUser] = useState("");



    const handleUser = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        
        setStore({
            ...store, user: {
                ...store.user, [`${key}`] : value
            }
        })
        
    }


    const login = (e) => {
        e.preventDefault();
        Axios
            .post("https://api-ri7.herokuapp.com/api/users/login",
            store.user
            )
            .then(resp =>  {
                console.log(resp.data);
                sessionStorage.setItem("tok", resp.data.token)
                setStore({...store, isUserAuth : true})
            })
            .catch(error => console.log(error))
        
    }

    


    useEffect(() =>{
        
        if (store.isUserAuth){
            navigate('/list')
        }
        
    },[store.isUserAuth] )




  return (
    <>
    
        <div className='Form-container'>
            <form onSubmit={login} className="Signup-form Form" method="POST">
                <div className="Form-field">
                    <Input label={"email"} type={"email"} name={"email"} value={store.email} onChange={handleUser}/>
                </div>
                <div className="Form-field">
                    <Input label={"password"} type={"password"} name={"password"} value={store.password} onChange={handleUser}/>
                </div>
                <div className="Form-submit">
                    <Input type={"submit"} value={"Valider"}/>
                </div>
            </form>

            
    
        </div>
    </>
    
   

  )
}

export default Login