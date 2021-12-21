import React from 'react'

function LoginSuccess({ username, logout }) {
    return (

        <div className="form-content-right">



            <div className="welcome"><h2>Witaj, <span>{username}</span></h2>
                <button onClick={logout}>Wyloguj</button>
            </div>
        </div>
    )


}

export default LoginSuccess
