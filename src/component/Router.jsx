import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import List from './List';
import MovieDetail from './MovieDetail';
import Register from './Register';
import Login from './Login';
import Input from './Input';
import Profil from './Profil';
import Home from './Home';
import video from "../img/video.mp4";
import { useToken } from '../hooks/useToken';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import { useContext } from 'react';
import { MyContext } from '../store/AppContext';
import CountRed from './CountRed';
import { useEffect } from 'react';
import ExUseRef from './ExUseRef';

export const MyRoutes = {
    LIST: '/list',
    HOME: '/',
    LOGIN:'/login',
    PROFIL:'/profil',
};


const AuthRoutes = () => {

  const navigate = useNavigate();
  const {store,setStore} = useContext(MyContext);


  
  return (
    store.isUserAuth? 
      <Outlet />
      :
      <Navigate to={MyRoutes.LOGIN}/>
  )
    
  
}



  
const Router = () => {

  

  return (
    <BrowserRouter>

      <AppContext>
      
        <Header />
        <div className='Layout-b'>
          <Routes>
            {/* ROUTES PUBLIC */}
            <Route path='/reduc' element={<CountRed/>}></Route>
            <Route path='/exUseRef' element={<ExUseRef/>}></Route>
              
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
            {/* ROUTES PRIVEE */}
            <Route element={<AuthRoutes/>}>
              <Route path='/list/:idMovie' element={<MovieDetail/>}></Route>
              <Route path={MyRoutes.HOME} element={<Home/>} />
              <Route path={MyRoutes.LIST} element={<List/>} />
              <Route path='/profil' element={<Profil/>}></Route>
            </Route>
          </Routes>
        </div>

      </AppContext>
        
        
    </BrowserRouter>
  )
}

export default Router