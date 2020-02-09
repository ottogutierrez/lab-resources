import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ()=>{
  return(
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/checkin">Check in</Link>
      </li>
      <li>
        <Link to="/checkout">Check out</Link>
      </li>
    </ul>
  )
}

export default NavBar