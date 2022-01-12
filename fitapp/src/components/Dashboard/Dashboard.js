import React, { Component } from 'react';
import { useEffect } from 'react/cjs/react.development';
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import '../../assets/boxicons-2.0.7/css/boxicons.min.css'
import '../../assets/css/grid.css'
import '../../assets/css/index.css'
import '../../assets/css/theme.css'
import Layout from './Layout/Layout';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducers';

const store = createStore(rootReducer)
const Dashboard = () => {
    const history = useHistory()
    const [quote, setQuote] = useState('');
    async function populateQuote() {
        await fetch('http://localhost:1337/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {
                if (data.status == 'ok') {
                    console.log(data)
                    setQuote(data.quote)
                }
                else {
                    window.location = '/log-in'
                }
            })

    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            console.log(user)
            if (!user) {
                console.log(user)
                localStorage.removeItem('token')
                history.replace('/login')
                window.location = '/login'

            } else {
                populateQuote()
            }
        }
    }, [])

    return (
        <Provider store={store}>
            <Layout username={quote} />
        </Provider>

    )
}

export default Dashboard;