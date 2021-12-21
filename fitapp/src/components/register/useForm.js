import { useState, useEffect, useCallback } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setErrors(validate(values))
    //     setIsSubmit(true);

    // }
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...values,


            }),
        })
        const data = await response.json()
        console.log(data);

        setErrors(validate(values))
        setIsSubmit(true);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callback();
        }
    }, [errors, isSubmit, callback])
    return { handleChange, values, handleSubmit, errors }
}
export default useForm;