import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'
export const API_KEY = "a923034b9746fd0d5b1385823b08eb8c"
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"
    


const List = () => {

    const [data, setList] = useState([])
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"


    const URL = 'https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY+'&language=en-US&page=1';
    

    
    const getPosts = () => {
        Axios
        .get(URL)
        .then(res => setList(res.data.results))
        .catch(err => console.log("error =>", err))
    };

    
    useEffect(() => {
        getPosts();
    },[]);

    return (
        <div>
            <h2>Liste de film : </h2>
            <div className='movieContainer'>
                {
                    data.map(
                        (movie,index) => <MovieCard

                            key={index}
                            img={BASE_IMG_URL+movie.poster_path}
                            title={movie.title}
                            idMovie={movie.id}
                            url={`/list/${movie.id}`}

                        />
                    )
                    
                }
                
            </div>

        </div>
    )
}

export default List