import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { showSuccessMsg, showErrMsg } from '../../utils/notification/Notification'
import FormSuccess from '../../register/FormSuccess';
import '../../register/Form.css'
const ActivationEmail = () => {
    const { activation_token } = useParams()

    const [err, setErr] = useState()
    const [success, setSuccess] = useState()

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/user/activation', { activation_token })

                    setSuccess(res.data.msg)


                } catch (error) {
                    error.response.data.msg && setErr(error.response.data.msg)

                }
            }
            activationEmail();
        }
    }, [activation_token])
    console.log(success)
    return (<div className='active_page'>
        {/* {err && showErrMsg(err)} */}
        {success && <FormSuccess />}
    </div>);
};

export default ActivationEmail;
