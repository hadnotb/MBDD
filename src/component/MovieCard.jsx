import React from 'react'
import { Link } from 'react-router-dom'
import MovieDetail from './MovieDetail'

const MovieCard = (props) => {

  const displayDetail = () => {
    
  }

  return (
      <Link to={props.url}>
        <div className='movieCard'>
          <img className='movieThumbnail' src={props.img} alt="" />
          <h3 className='movieTitle'>{props.title}</h3>
        </div>
        
      </Link>
        
    
    
  )
}

export default MovieCard