import React, { useEffect } from 'react'
import './Signup.scss'
import { createCustomer } from '../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'

const SignUp = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state)


    const submitForm = (e) => {
        e.preventDefault()
        const formValues = {}

        for (let i = 0; i < 4; i++) {
            formValues[e.target[i].name] = e.target[i].value
        }

        dispatch(createCustomer(formValues))
    }

    useEffect(() => {
        async function users() {
            const url = new URL(
                "https://api.chec.io/v1/customers"
            );

            let headers = {
                "X-Authorization": "sk_43790e4ac2a0fa20c262e5f327a452b6084617465172f",
                "Accept": "application/json",
                "Content-Type": "application/json",
            };

            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then(response => response.json())
                .then(json => console.log(json));
        }
        users()

    }, [])

    console.log(user)

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