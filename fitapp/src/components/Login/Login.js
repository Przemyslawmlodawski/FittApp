import React, { useCallback } from 'react'

import { useState } from 'react'
import LoginForm from './LoginForm'
import image from '../../images/img-2.svg'
import '../register/Form.css';
import LoginSuccess from './LoginSuccess'

const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitForm = () => {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn"><a href="/#" className="close">x</a></span>
                <div className="form-content-left"><img src={image} alt="" className="form-img" />
                </div>
                {!isSubmitted ? <LoginForm submitForm={submitForm} /> : <LoginSuccess />}
            </div>



        </>
    )
}

export default Login