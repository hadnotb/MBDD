import React from 'react'
import video from '../img/v1.mp4';
import List from './List';
const Home = () => {
  return (
   
    <div>
        <video className='bg-video' autoPlay loop muted id="background-video" >
            <source src={video} type="video/mp4"/>
        </video>
    </div>

  )
}

export default Home