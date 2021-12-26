import React, { Component } from 'react';
import { useEffect } from 'react/cjs/react.development';
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import '../../assets/boxicons-2.0.7/css/boxicons.min.css'
import '../../assets/css/grid.css'
import '../../assets/css/index.css'
import Layout from './Layout/Layout';
const Dashboard = () => {
    const history = useHistory()
    const [quote, setQuote] = useState('');
    async function populateQuote() {
        await fetch('http://localhost:1337/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => setQuote(data.quote))

    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                history.replace('/login')

            } else {
                populateQuote()
            }
        }
    }, [])
    return (
        <Layout username={quote} />


    )
}

export default Dashboard;