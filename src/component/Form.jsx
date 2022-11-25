import React from 'react'

const Form = () => {
  return (
    <form  className="Signup-form Form" method="POST">
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
            <div className="Form-submit">
                <Input type={"submit"} value={"Valider"}/>
            </div>
        </fieldset>
    </form>
  )
}

export default Form