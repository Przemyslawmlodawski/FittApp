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