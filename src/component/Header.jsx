import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cinema from '../img/MBDD-w.svg'
import { MyContext } from '../store/AppContext'
import { useContext } from 'react'
import { MyRoutes } from './Router'
import searchIcon from '../img/magnifier.png'
import SearchBar from './SearchBar'


const Header = () => {


  const {store, setStore} = useContext(MyContext)
  const [searchOn, setSearchOn] = useState(false);

  const setSearch = () =>{
        if(searchOn ==false){
          setSearchOn(true);
          
        }
        if(searchOn == true){
          setSearchOn(false);
        }
  }

  

  return (
    
    <header className='siteHeader'>
      <div className='Layout-h'>
        <Link to={MyRoutes.HOME}>
            <img  src={cinema} alt="" className='siteHeader-logo'/>
        </Link>
        <div className="siteHeader-nav">
              <Link to={MyRoutes.LIST} className="Nav-link">Film</Link>
              {/* {searchOn ? 
                  <input type="search" /> : <></>
              }
              <Link onClick={setSearch} className="Nav-link"><img src={searchIcon} alt="" className='Icon'/></Link> */}
              <SearchBar/>
              
              {   
                  
                  store.isUserAuth ? 
                  <Link className="Nav-link" to={MyRoutes.PROFIL}>Profil</Link>
                  : 
                  <></>
              }

              
            
        </div>
      </div>
    </header>
  )
}

export default Header