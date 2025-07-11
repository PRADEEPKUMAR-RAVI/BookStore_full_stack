import React from 'react'
import { NavLink } from 'react-router'
import './css/NavBar.css'

export default function NavBar() {

  return (
    <div className='bar'>
        <nav className='navigation'>
            <h2>Book Store</h2>
            <div className='navi-links'>
                <NavLink to={'/'} className={({isActive})=>isActive? "active-link": ""} >Home</NavLink>
                <NavLink to={'authors'} className={({isActive})=>isActive? "active-link": ""} >Authors</NavLink>
                <NavLink to={'users'} className={({isActive})=>isActive? "active-link": ""} >Users</NavLink>
                <NavLink to={'categories'} className={({isActive})=>isActive? "active-link": ""}>Categories</NavLink>
            </div>
        </nav>
    </div>
  )
}
