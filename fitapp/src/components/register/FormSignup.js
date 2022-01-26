import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { isEmail, isEmpty, isLength, isMatch } from '../utils/Validation/Validation'
import { showErrMsg, showSuccessMsg } from '../utils/notification/Notification'
import axios from 'axios'
const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: '',
}

const FormSignup = () => {
    const [user, setUser] = useState(initialState);
    const { name, email, password, cf_password, err, success } = user
    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setUser({ ...user, [name]: value, err: '', success: '' })

    }
    const handleSubmit = async e => {
        e.preventDefault();
        if (isEmpty(name) || isEmpty(password))
            return setUser({ ...user, err: "Wypełnij wszystkie pola", success: '' })
        if (!isEmail(email))
            return setUser({ ...user, err: "Niepoprawny adres email", success: '' })
        if (isLength(password))
            return setUser({ ...user, err: "Hasło musi posiadać 6 znaków", success: '' })
        if (!isMatch(password, cf_password))
            return setUser({ ...user, err: "Hasła muszą być taki same", success: '' })
        try {

            const res = await axios.post('/user/register', {
                name, email, password
            })

            setUser({ ...user, err: '', success: 'Success Register' })
        } catch (error) {
            error.response.data.msg && setUser({ ...user, err: error.response.data.msg, success: '' })
        }
    }

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} noValidate>
                <h1>Utwórz konto</h1>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Nazwa Użytkownika
                    </label>
                    <input
                        id="Name"
                        type="text" className="form-input" name="name"
                        placeholder="Wprowadź nazwę użytkownika"
                        value={name}
                        onChange={handleChangeInput}
                    />

                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id="email" type="email" className="form-input" name="email"
                        placeholder="wprowadz swoj email"
                        value={email}
                        onChange={handleChangeInput}
                    />


                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Wprowadź hasło
                    </label>
                    <input id="password" type="password" className="form-input" name="password"
                        placeholder="wprowadz swoje haslo"
                        value={password}
                        onChange={handleChangeInput}
                    />


                </div>
                <div className="form-inputs">
                    <label htmlFor="cf_password" className="form-label">
                        Potwierdz haslo
                    </label>
                    <input id="cf_password" type="password" className="form-input" name="cf_password"
                        placeholder="Potwierdz haslo"
                        value={cf_password}
                        onChange={handleChangeInput}
                    />

                </div>

                <button className="form-input-btn" type="submit">Zarejestruj się !</button><br />
                <span className="form-input-login">Masz juz konto?<Link to="/login"> Zaloguj się! </Link> </span>
            </form>


        </div >
    )
}

export default FormSignup
