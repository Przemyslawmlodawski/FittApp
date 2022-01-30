import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
import { isLength, isMatch } from '../../utils/Validation/Validation'
import image2 from '../../../images/img-2.svg'
const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

const ResetPassword = () => {
    const [data, setData] = useState(initialState)
    const { token } = useParams()
    const { password, cf_password, err, success } = data
    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const resetPasword = async () => {
        if (isLength(password))
            return setData({ ...data, err: 'Password must be at least 6 characters', success: '' })
        if (!isMatch(password, cf_password))
            return setData({ ...data, err: "Password did not match", success: '' })

        try {
            const res = await axios.post('/user/reset', { password }, {
                headers: { Authorization: token }
            })
            return setData({ ...data, err: '', success: res.data.msg })
        } catch (error) {
            error.response.data.msg && setData({ ...data, err: error.resposne.data.msg, success: '' })
        }
    }
    return (

        <div className="form-container">
            <span className="close-btn"><a href="/#" className="close">x</a></span>
            <div className="form-content-left"><img src={image2} alt="" className="form-img" /></div>

            <div className="form-content-right">
                <div className="form">
                    <h1>Reset Your Password</h1>
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}
                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label">Enter Your new password</label>
                        <input type="password" name="password" id="password" value={password} onChange={handleChangeInput} className='form-input' />

                    </div>
                    <div className="form-inputs">
                        <label htmlFor="cf_password" className="form-label">Confirm Your new password</label>
                        <input type="password" name="cf_password" id="cf_password" value={cf_password} onChange={handleChangeInput} className='form-input' />

                    </div>
                    <button className='form-input-btn' onClick={resetPasword} >Reset your password</button>
                </div>


            </div>
        </div>


    )

        ;
};

export default ResetPassword;
