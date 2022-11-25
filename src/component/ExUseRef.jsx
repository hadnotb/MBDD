// import React from 'react'
// import { useRef,useState,useEffect } from 'react';


// const ExUseRef = () => {

//     const timer = useRef(null);
//     const [likes, setLikes] = useState(0)
    
//     const increment =()=>{
//         setLikes(likes+1);
//     }
//     let isMouseDown = false

//     const mouseDown = () =>{
//       isMouseDown = true;
//     }
    
//     const mouseUp = () =>{
//       isMouseDown = false
//     }

//     useEffect(()=>{

//       if(isMouseDown){
//         increment();
//         console.log('useEffect')
//       }

//     })
  

    

//   return (
//     <div>
//         <button onClick={() => console.log(isMouseDown)}>cons</button>
//         <h3 ref={focusPoint}>{likes}</h3>
//         <button onClick={increment} >+</button>
//         <button onMouseDown={mouseDown} >persist</button>
     
//     </div>
//   )
// }

// export default ExUseRef

