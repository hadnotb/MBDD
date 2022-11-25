import React from 'react'
import searchIcon from '../img/magnifier.png'
import { Link } from 'react-router-dom';
import { API_KEY } from './List';



const SearchBar = () => {

  let q ="Titanic";
  const URL = "https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&language=fr-FR&page=1&include_adult=false&query="+q



  return (
    <div className='SearchBar'>
        <form className='SearchBar-form'>
            
            <input type="text" className='SearchBar-input' name='Sub'  placeholder='Rechercher....' />
            <input type="submit" className='SearchBar-sub' value={""} />
            
                
        </form>
    </div>
  )
}

export default SearchBar