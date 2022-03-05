import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div>
        <Link to="/about/profile/future">My Future</Link> <br />
        <Link to="/about/profile/history">My History</Link>
        <h1>Profile in About</h1>
        <Outlet/>
        </div>
  )
}
