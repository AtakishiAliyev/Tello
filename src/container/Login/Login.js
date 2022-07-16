import React, { useEffect } from 'react'
import './Login.scss'
import { useDispatch } from 'react-redux'
import { loginCustomer } from '../../redux/actions/user'
import login from '../../images/login.png'
import { Link } from 'react-router-dom'

const Login = () => {

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(loginCustomer({
            email: e.target[0].value,
            base_url: 'http://localhost:3000/userprofile/'
        }))
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

    return (
        <div className='login-wrapper'>
            <div className='container'>
                <div className='signup-content'>
                    <div className='form-wrapper'>
                        <h3>Daxil ol</h3>
                        <div className='social-media'>
                            <div className='item'>
                                <div className='image'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.1667 2.91667C14.1667 2.68667 13.9792 2.5 13.75 2.5H11.6667C9.365 2.5 7.5 4.17917 7.5 6.25V8.5H5.41667C5.18667 8.5 5 8.68667 5 8.91667V11.0833C5 11.3133 5.18667 11.5 5.41667 11.5H7.5V17.0833C7.5 17.3133 7.68667 17.5 7.91667 17.5H10.4167C10.6458 17.5 10.8333 17.3133 10.8333 17.0833V11.5H13.0158C13.2033 11.5 13.3675 11.375 13.4183 11.195L14.0192 9.02833C14.0933 8.76333 13.8933 8.5 13.6183 8.5H10.8333V6.25C10.8333 5.83583 11.2058 5.5 11.6667 5.5H13.75C13.9792 5.5 14.1667 5.31333 14.1667 5.08333V2.91667Z" fill="white" />
                                    </svg>
                                </div>
                                <span>Facebook ilə</span>
                            </div>
                            <div className='item'>
                                <div className='image'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.1667 2.91667C14.1667 2.68667 13.9792 2.5 13.75 2.5H11.6667C9.365 2.5 7.5 4.17917 7.5 6.25V8.5H5.41667C5.18667 8.5 5 8.68667 5 8.91667V11.0833C5 11.3133 5.18667 11.5 5.41667 11.5H7.5V17.0833C7.5 17.3133 7.68667 17.5 7.91667 17.5H10.4167C10.6458 17.5 10.8333 17.3133 10.8333 17.0833V11.5H13.0158C13.2033 11.5 13.3675 11.375 13.4183 11.195L14.0192 9.02833C14.0933 8.76333 13.8933 8.5 13.6183 8.5H10.8333V6.25C10.8333 5.83583 11.2058 5.5 11.6667 5.5H13.75C13.9792 5.5 14.1667 5.31333 14.1667 5.08333V2.91667Z" fill="white" />
                                    </svg>
                                </div>
                                <span>Google ilə</span>
                            </div>
                        </div>
                        <p>və ya</p>
                        <form onSubmit={(e) => { submitForm(e) }}>
                            <div className='input-group'>
                                <label>E-mail </label>
                                <input type="email" placeholder='nümunə@gmail.com' />
                            </div>
                            <button className='main-btn login_btn'>Daxil ol</button>
                        </form>
                    </div>
                    <div className='image-wrapper'>
                        <div className='image'>
                            <img src={login} alt="signup" />
                        </div>
                        <p>Hesabınız yoxdur?<Link to='/signup'>Qeydiyyatdan keçin</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login