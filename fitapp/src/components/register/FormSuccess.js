import React, { Component } from 'react'
import image from '../../images/img-3.svg'
const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">
                Rejestracja przebiegła pomyślnie!
            </div>
            <img src={image} alt="success-image" className="form-img-2" />
        </div>
    )
}

export default FormSuccess;