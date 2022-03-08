import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const Settings = () => {
    return (
        <div className='bg-rose-300 rounded-md'>
            <h1>Settings</h1>
            <ul>
                <li>
                    <Link to="users">Users</Link>
                </li>
                <li>
                    <Link to="profile">Profile</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}   
