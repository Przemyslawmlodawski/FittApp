import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Routes from './Routes'
import './layout.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { MainH1 } from '../../MainSection/MainSectionElements'
const Layout = (props) => {
    const username = props.username;
    return (


        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props} />
                    <div className='layout__content'>
                        <h1>Witaj, {username}</h1>
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
