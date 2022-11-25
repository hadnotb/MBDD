import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Input from './Input';
import { Redirect } from 'react-router-dom';



const Register = () => {

    const myUser = {
        email: "",
        password:"",
        firstname: "",
        lastname: "",
        city: "",
        postalCode: "",
        age:""
    };

    


    const [user, setUser] = useState(myUser);

    const handleUser = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setUser({...user, [`${key}`] : value});
    }

    const register = (event) =>{
        event.preventDefault();
        
        Axios
        .post("https://api-ri7.herokuapp.com/api/users/register",
        user
        )
        .then(resp => console.log(resp))
        .catch(error => err=> console.log(error))
   
    }



  return (

    <div className='Form-container'>
        <form onSubmit={register} className="Signup-form Form" method="POST">
            <fieldset class="Form-fieldset">
                
                <div className="Form-field">
                    <Input label={"email"} type={"text"} name={"email"} value={user.email} onChange={handleUser}/>
                </div>
                <div className="Form-field">
                    <Input label={"password"} type={"password"} name={"password"} value={user.password} onChange={handleUser}/>
                </div>
                <div className="Form-field">
                    <Input label={"firstname:"} type={"text"} name={"firstname"} value={user.firstname} onChange={handleUser}/>
                </div>
                <div className="Form-field">
                    <Input label={"lastname:"} type={"text"} name={"lastname"} value={user.lastname} onChange={handleUser}/>
                </div>
                <div className="Form-field">
                    <Input label={"city:"} type={"text"} name={"city"} value={user.city} onChange={handleUser}/>
                </div>
                <div className="Form-field">
                    <Input label={"postalCode:"} type={"text"} name={"postalCode"} value={user.postalCode} onChange={handleUser}/>
                </div>
                <div className="Form-submit ">
                    <Input type={"submit"} value={"Valider"}/>
                </div>
            </fieldset>
        </form>
    </div>
   
    
    
   

    
    
  )
}

export default Register