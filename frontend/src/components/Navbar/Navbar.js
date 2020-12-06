import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">All appliances</NavLink>
      <NavLink to="/create">Add a new appliance</NavLink>
    </div>
  )
}
