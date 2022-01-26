import React, { Component } from 'react'
import image from '../../images/img-3.svg'
import image2 from '../../images/img-2.svg'
const FormSuccess = () => {
    return (
        <div className="form-container">
            <span className="close-btn"><a href="/#" className="close">x</a></span>
            <div className="form-content-left"><img src={image2} alt="" className="form-img" /></div>

            <div className="form-content-right">
                <div className="form-success">
                    Rejestracja przebiegła pomyślnie!
                </div>
                <img src={image} alt="success-image" className="form-img-2" />
            </div>
        </div>
    )
}

export default FormSuccess;