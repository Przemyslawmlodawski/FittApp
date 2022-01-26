import React, { useState } from 'react'
import '../register/Form.css';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../utils/notification/Notification'
import { dispatchLogin } from '../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import Nav from '../navBar/Navbar'
const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}
function LoginForm() {
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    const { email, password, err, success } = user

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setUser({ ...user, [name]: value, err: '', success: '' })

    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/user/login', { email, password })
            setUser({ ...user, err: '', success: res.data.message })

            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            // history.push('/dashboard')
        } catch (error) {
            console.log(err)
            error.response.data.message && setUser({ ...user, err: error.response.data.message, success: '' })
        }
    }

    return (

        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} >
                <h1>Zaloguj się !</h1>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Email Adress
                    </label>
                    <input
                        id="username"
                        type="text" className="form-input" name="email"
                        placeholder="Wprowadź swój adres email"
                        value={email}
                        onChange={handleChangeInput}
                    />
                    {/* {errors.username && <p>{errors.username}</p>} */}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        password
                    </label>
                    <input id="password" type="password" className="form-input" name="password"
                        placeholder="Wprowadz swoje haslo"
                        value={password}
                        onChange={handleChangeInput}
                    />
                    {/* {errors.password && <p>{errors.password}</p>} */}

                </div>
                <button className="form-input-btn" type="submit">Zaloguj się!</button><br />
                <Link to="/forgot_password">Zapomniałeś hasła?</Link>
                <span className="form-input-login">Nie masz jeszcze konta?<Link to="/sign-up"> Zarejestruj się</Link> </span>
            </form>
        </div >

    )
}

export default LoginForm
