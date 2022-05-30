import React, { useState } from 'react'
import '../register/Form.css';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../utils/notification/Notification'
import { dispatchLogin } from '../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
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
    const responseFacebook = async (response) => {
        try {
            const { accessToken, userID } = response
            const res = await axios.post('/user/facebook_login', { accessToken, userID })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/dashboard')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }



    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', { tokenId: response.tokenId })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/dashboard')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }
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
            history.push('/dashboard')
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
                        Adres mail
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
                        Hasło
                    </label>
                    <input id="password" type="password" className="form-input" name="password"
                        placeholder="Wprowadz swoje haslo"
                        value={password}
                        onChange={handleChangeInput}
                    />
                    {/* {errors.password && <p>{errors.password}</p>} */}

                </div>
                <button className="form-input-btn" type="submit">Zaloguj się!</button><br />
                <Link className='form-input-login' to="/forgot_password">Zapomniałeś hasła?</Link>
                <span className="form-input-login">Nie masz jeszcze konta?<Link to="/sign-up"> Zarejestruj się</Link> </span>
                <div className="form-input-login">
                    Or Login with
                </div>
                <div className="social">
                    <GoogleLogin
                        clientId="565255714838-jf44mb1md16ouvh77b3qsqs12ok9aklu.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className='form-input-btn'
                    />
                    <br />
                    <FacebookLogin
                        appId="625593141859499"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass='form-input-btn'
                    />
                </div>
            </form>


        </div >

    )
}

export default LoginForm
