import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const About = () => {
  return (
    <div>
       <Link to="/about/user">User</Link> <br />
       <Link to="/about/profile">Profile</Link>
       <h1>About</h1>
       <Outlet/>
        </div>
  )
}
