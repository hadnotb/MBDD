import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import Input from './Input'
import { useEffect } from 'react'
import { useNavigationType } from 'react-router-dom'
import { useToken } from '../hooks/useToken'
import { useError } from '../hooks/useError'
import { MyContext } from '../store/AppContext'
import { useContext } from 'react'

const Profil = () => {

//   const myuser = {
//     email: "toto@gmail.com",
//     password:"admin",
//     firstname: "michelooooo",
//     lastname: "Armand",
//     city: "Marseille",
//     postalCode: "13001"
// };

  // On récu^père le context
    const {handle,store,setStore} = useContext(MyContext)
    
  //  Hook Personnalisé useError
    const {myError, saveError}= useError(); 
    
  // Recupère le profil grace au token
    const getProfil = () =>{

        
        Axios
        .get("https://api-ri7.herokuapp.com/api/users/profile",
        {
            headers :{
                Authorization : `Bearer ${sessionStorage.getItem("tok")}`}
        }
        )
        .then(resp => setStore({...store, user: resp.data}))
        .catch(error => saveError(error.response.data.error))
        
    }
      useEffect(() => {
        getProfil();
      },[]);

   
    const updateProfil = (e) => {
      e.preventDefault()
        
            Axios
            .put("https://api-ri7.herokuapp.com/api/users/profile",
            
              store.user,
            
            {
                headers :{
                    Authorization : `Bearer ${sessionStorage.getItem("tok")}`},
            }
            )
            .then(resp => console.log(resp))
            .catch(error =>  console.log(error))
    }

    // const handleUser = (e) => {
    //   const key = e.target.name;
    //   const value = e.target.value;
    //   setUser({...user, [`${key}`] : value});
    // }
    

  return (
    <div className='Form-container'>
      <button onClick={() => console.log(store.user)}>console</button>
        <form onSubmit={updateProfil} className="Signup-form Form" method="POST">
            <fieldset class="Form-fieldset">
                
                <div className="Form-field">
                    <Input label={"firstname:"} type={"text"} name={"firstname"} value={store.user.firstname} onChange={(e) => handle(e)}/>
                </div>
                <div className="Form-field">
                    <Input label={"lastname:"} type={"text"} name={"lastname"} value={store.user.lastname} onChange={(e) => handle(e)}/>
                </div>
                <div className="Form-field">
                    <Input label={"city:"} type={"text"} name={"city"} value={store.user.city} onChange={(e) => handle(e)}/>
                </div>
                <div className="Form-field">
                    <Input label={"postalCode:"} type={"text"} name={"postalCode"} value={store.user.postalCode} onChange={(e) => handle(e)}/>
                </div>
                <div className="Form-submit">
                    <Input type={"submit"} value={"Modifier"}/>
                </div>
            </fieldset>
        </form>
    </div>

    

  )
}

export default Profil