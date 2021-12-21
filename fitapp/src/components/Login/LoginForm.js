import React, { useState } from 'react'
import '../register/Form.css';
import { Link } from 'react-router-dom'
import LoginSuccess from './LoginSuccess';
import image from '../../images/img-3.svg'
function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" })
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...details,


            }),
        })
        const data = await response.json()
        if (data.user) {

            window.location.href = '/LoginSuccess'
        } else {
            alert('Niepoprawna nazwa użytkownika bądź hasło')
        }
        console.log(data)


    }
    return (

        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit} >
                <h1>Zaloguj się !</h1>

                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        username
                    </label>
                    <input
                        id="username"
                        type="text" className="form-input" name="username"
                        placeholder="wprowadz nazwe"
                        value={details.username}
                        onChange={e => setDetails({ ...details, username: e.target.value })}
                    />
                    {/* {errors.username && <p>{errors.username}</p>} */}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        password
                    </label>
                    <input id="password" type="password" className="form-input" name="password"
                        placeholder="wprowadz swoje haslo"
                        value={details.password}
                        onChange={e => setDetails({ ...details, password: e.target.value })}
                    />
                    {/* {errors.password && <p>{errors.password}</p>} */}

                </div>
                <button className="form-input-btn" type="submit">Zaloguj się!</button><br />
                <span className="form-input-login">Nie masz jeszcze konta?<Link to="/sign-up"> Zarejestruj się</Link> </span>
            </form>
        </div >

    )
}

export default LoginForm
