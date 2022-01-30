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


const Dashboard = () => {
    const history = useHistory()
    const [quote, setQuote] = useState('');

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if (token) {
    //         const user = jwt.decode(token)
    //         console.log(user)
    //         if (!user) {
    //             console.log(user)
    //             localStorage.removeItem('token')
    //             history.replace('/login')
    //             window.location = '/login'

    //         } else {

    //         }
    //     }
    // }, [])

    return (

        <Layout username={quote} />


    )
}

export default Dashboard;