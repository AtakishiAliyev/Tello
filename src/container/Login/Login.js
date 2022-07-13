import React from 'react'
import './Login.scss'

const Login = () => {
    return (
        <div className='login-wrapper'>
            <form>
                <input type="email" placeholder='email' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login