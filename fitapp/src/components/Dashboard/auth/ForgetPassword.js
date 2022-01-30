import React, { useState } from 'react';
import axios from 'axios'
import { isEmail } from '../../utils/Validation/Validation'
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification'
// import '../auth/auth.css'
import image2 from '../../../images/img-2.svg'
import '../../register/Form.css'
const initialState = {
    email: '',
    err: '',
    success: '',
}
const ForgetPassword = () => {
    const [data, setData] = useState(initialState)

    const { email, err, success } = data


    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }
    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'Invalid email', success: '' })
        try {
            const res = await axios.post('/user/forgot', { email })
            return setData({ ...data, err: '', success: res.data.msg })
        } catch (error) {
            error.response.data.msg && setData({ ...data, err: error.response.data.msg, success: '' })
        }
    }

    return (
        <div className="form-container">
            <span className="close-btn"><a href="/#" className="close">x</a></span>
            <div className="form-content-left"><img src={image2} alt="" className="form-img" /></div>

            <div className="form-content-right">
                <div className="form">
                    <h1>Forgot Your Password?</h1>
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">Enter Your email adress</label>
                        <input type="text" name="email" id="email" value={email} onChange={handleChangeInput} className='form-input' />

                    </div>
                    <button className='form-input-btn' onClick={forgotPassword}>Verify your email</button>
                </div>


            </div>
        </div>



    );
};

export default ForgetPassword;
