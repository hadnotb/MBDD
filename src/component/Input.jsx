import React from 'react'

const Input = (props) => {
  return (
    <>
        <label className='Form-field-lib' htmlFor="">{props.label}</label>
        <input 
            className='Form-field-input'
            type={props.type ? props.type : 'text'}
            name={props.name} 
            value={props.value} 
            onChange={props.onChange} 
        />
    </>
    
  )
}

export default Input