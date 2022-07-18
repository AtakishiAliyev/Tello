import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRouter = () => {
    const isLogin = localStorage.getItem('customerID')

    return (
        <>
            {
                !isLogin
                    ? (
                        <Outlet />
                    )
                    : <Navigate to="/userprofile/" />
            }
        </>
    )
}

export default AuthRouter