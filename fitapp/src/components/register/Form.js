import React, { useCallback } from 'react'
import FormSignup from './FormSignup'
import { useState } from 'react'
import FormSuccess from './FormSuccess'
import image from '../../images/img-2.svg'
import './Form.css';

const Form = () => {
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
                {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
            </div>



        </>
    )
}

export default Form
