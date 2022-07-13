import React from 'react'
import './Signup.scss'
import { createCustomer } from '../../redux/actions/user'
import { useDispatch } from 'react-redux'

const SignUp = () => {
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault()
        const formValues = {}

        for (let i = 0; i < 4; i++) {
            formValues[e.target[i].name] = e.target[i].value
        }

        dispatch(createCustomer(formValues))
    }

    return (
        <div className='signup-wrapper'>
            <form onSubmit={(e) => { submitForm(e) }}>
                <input type="text" placeholder='firstname' name='firstname' />
                <input type="text" placeholder='lastname' name='lastname' />
                <input type="email" placeholder='email' name='email' />
                <input type="text" placeholder='phone' name='phone' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp