import React from 'react'
import {Route, Routes, Navigate } from 'react-router-dom'
import Links from './pages/links'
import Create from './pages/create';
import Details from './pages/details';
import Auth from './pages/auth';

function Routing(props) {
  const {isAuth} = props
  if(isAuth){
    return(
      <Routes >
        <Route path='/links' element={<Links />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/*' element={<Navigate replace to='/create'/>}/>
      </Routes>
    )
  }
  return(
    <Routes>
      <Route path='/' element={<Auth />}/>
      <Route path='/*' element={<Navigate replace to='/'/>}/>
    </Routes>
  )
}


export default Routing