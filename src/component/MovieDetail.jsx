import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { API_KEY } from './List';
import Axios from 'axios';


const MovieDetail = () => {
    

    let params = useParams();

    const [movieDetail, setMovieDetail] = useState([]);
    const URL = `https://api.themoviedb.org/3/movie/${params.idMovie}?api_key=${API_KEY}`;
    
    
    
    
    const getMovieDetail = () => {
        Axios
        .get(URL)
        .then(res => setMovieDetail(res))
        .catch(err => console.log("error =>", err))
    };

    
    useEffect(() => {
        getMovieDetail();
    },[]);

  return (
    <div>
        <h1>Details : </h1>
    </div> 
  )
}

export default MovieDetail