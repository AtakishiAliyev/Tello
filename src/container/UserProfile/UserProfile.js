import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.scss'
import { getCustomerData, updateCustomer } from '../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import loading from '../../images/mini_loading.svg'

const UserProfile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state)
    const id = localStorage.getItem('customerID')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty }
    } = useForm()

    useEffect(() => {
        if (id !== null) {
            dispatch(getCustomerData())
        }
    }, [id, dispatch])

    function logoutCustomer() {
        localStorage.removeItem('customerID')
    }

    useEffect(() => {
        reset(user?.user);
    }, [reset, user]);

    return (
        <div className='user_details_body'>
            <div className='container'>
                <div className='user_details_wrapper'>
                    <div className='user_profile'>
                        <h3>Profilim</h3>
                        <ul>
                            <li>
                                <Link to='/userprofile'>Şəxsi məlumatlar</Link>
                            </li>
                            <li>
                                <Link to='/login' onClick={() => { logoutCustomer() }} >Çıxış</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='user_details'>
                        <h3>Şəxsi məlumatlar</h3>
                        {
                            !user.loading
                                ? <form onSubmit={handleSubmit((data) => {
                                    isDirty && dispatch(updateCustomer(data))
                                })}>
                                    <div className='input-group'>
                                        <label>Ad </label>
                                        <input {...register("firstname", { required: "Adınız qeyd edin" })} type="text" placeholder='Adınızı daxil edin' name='firstname' />
                                        {errors.firstname && <span className='alert-message'>{errors.firstname.message}</span>}
                                    </div>
                                    <div className='input-group'>
                                        <label>Soyad</label>
                                        <input {...register("lastname", { required: "Soyadinizi qeyd edin" })} type="text" placeholder='Soyadınızı daxil edin' name='lastname' />
                                        {errors.lastname && <span className='alert-message'>{errors.lastname.message}</span>}
                                    </div>
                                    <div className='input-group'>
                                        <label>E-mail</label>
                                        <input {...register("email", {
                                            required: "Emailinizi qeyd edin",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Email düzgün qeyd olunmayıb"
                                            }
                                        })} type="email" placeholder='nümunə@gmail.com' name='email' />
                                        {errors.email && <span className='alert-message'>{errors.email.message}</span>}
                                    </div>
                                    <div className='input-group'>
                                        <label>Mobil nömrə</label>
                                        <InputMask
                                            mask="999 999 99 99"
                                            maskChar={null}
                                            placeholder="050 000 00 00"
                                            {...register("phone", { required: "Nömrənizi qeyd edin" })}
                                        ></InputMask>
                                        {errors.phone && <span className='alert-message'>{errors.phone.message}</span>}
                                    </div>
                                    <button className={`main-btn ${!isDirty ? 'btn-disabled' : ''}`}>Məlumatları yenilə</button>
                                </form>
                                : <div className='user-datas-loading'>
                                    <img src={loading} alt="loading" />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile