import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Routes from './Routes'
import './layout.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from '../Nav/Nav'
const Layout = (props) => {
    const username = props.username;



    return (


        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout `}>
                    <Sidebar {...props} />
                    <div className='layout__content'>
                        <Nav name={username} />
                        <div className='layout__content-main'>
                            <Routes />
                        </div>
                    </div>
                </div>
            )}></Route>
        </BrowserRouter>
    )
}

export default Layout
