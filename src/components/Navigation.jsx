import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/authContext'

export default function Navigation() {
  const auth = useContext(AuthContext)
  return (
    <nav>
      <div className="nav-wrapper purple darken-4" style={{padding: '0 1.5rem'}}>
        <NavLink to="/create" className="brand-logo">Minimize Link</NavLink>
        <ul id="nav-mobile" className="right hide-off-med-and-down">
          <li><NavLink to="/create">Create</NavLink></li>
          <li><NavLink to="/links">Links</NavLink></li>
          <li><button className='btn-small waves-effect waves-light red darken-4' onClick={auth.logOut} >Logout</button></li>
        </ul>
      </div>
    </nav>
  )
}
