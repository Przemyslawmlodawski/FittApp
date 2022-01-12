import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Routes from './Routes'
import './layout.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../../redux/actions/ThemeAction'
import Nav from '../Nav/Nav'
const Layout = (props) => {
    const username = props.username;
    const ThemeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
    return (


        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${ThemeReducer.mode} ${ThemeReducer.color}`}>
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
