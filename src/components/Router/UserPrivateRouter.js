import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserPrivateRouter = () => {
    const isLogin = localStorage.getItem('customerID')

    return (
        <>
            {
                isLogin && isLogin !== null
                    ? (
                        <Outlet />
                    )
                    : <Navigate to="/" />
            }
        </>
    )
}

export default UserPrivateRouter