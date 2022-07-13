import React from 'react'
import './Login.scss'
import { useDispatch } from 'react-redux'
import { loginCustomer } from '../../redux/actions/user'

const Login = () => {

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(loginCustomer({
            email: e.target[0].value,
            base_url: 'http://localhost:3000/userprofile/'
        }))
    }

    return (
        <div className='login-wrapper'>
            <form onSubmit={(e) => { submitForm(e) }} >
                <input type="email" placeholder='email' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login