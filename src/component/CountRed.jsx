import React from 'react'
import { useReducer } from 'react';


const initialState = {count :0}
function reducer(state,action){
    switch(action.type){
        case 'increment' :
            return {count: state.count + 1};
        case 'decrement' :
            return {count: state.count - 1};
        case 'toDec' :
          return {count: state.count + 0.5};
        case 'square' :
            return {count: state.count * state.count};
        case 'reset' :
            return {count: state.count =0};
        case 'round' :
            return {count: Math.ceil(state.count)};
        default :
            throw new Error();
    }
  }
   


const CountRed = () => {

  const[state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h2>Count : {state.count}</h2>
        
     
      <button onClick={()=>dispatch({type: 'increment'})}>+</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
      <button onClick={()=>dispatch({type: 'square'})}>2</button>
      <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
      <button onClick={()=>dispatch({type: 'round'})}>round</button>
      <button onClick={()=>dispatch({type: 'toDec'})}>toDec</button>
           
    </div>
  )
}

export default CountRed