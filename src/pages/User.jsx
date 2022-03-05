import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const User = () => {
  return (
    <div>
        <Link to="/about/user/carts">Carts</Link> <br />
        <Link to="/about/user/phones">Phones</Link>
        <h1>User in About</h1>
        <Outlet/>
        </div>
  )
}
