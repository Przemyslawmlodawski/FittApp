import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'
import { Link } from 'react-router-dom'

const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} noValidate>
                <h1>Utwórz konto</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        username
                    </label>
                    <input
                        id="username"
                        type="text" className="form-input" name="username"
                        placeholder="wprowadz nazwe"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        password
                    </label>
                    <input id="password" type="password" className="form-input" name="password"
                        placeholder="wprowadz swoje haslo"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}

                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Potwierdz haslo
                    </label>
                    <input id="password2" type="password" className="form-input" name="password2"
                        placeholder="potwierdz haslo"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        email
                    </label>
                    <input id="email" type="email" className="form-input" name="email"
                        placeholder="wprowadz swoj email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}

                </div>
                <button className="form-input-btn" type="submit">Zarejestruj się !</button><br />
                <span className="form-input-login">Masz juz konto?<Link to="log-in"> Zaloguj się! </Link> </span>
            </form>
        </div >
    )
}

export default FormSignup
