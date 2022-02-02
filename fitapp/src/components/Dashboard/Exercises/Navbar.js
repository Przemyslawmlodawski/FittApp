import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import { Nav, NavLink, NavMenu, Bars, NavBtnLink } from './Popup/NavbarElements'
import { IconContext } from 'react-icons';
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)


    const showSidebar = () => setSidebar(!sidebar)
    return (
        <Nav>
            <NavLink to='/'><i class="fas fa-dumbbell"></i></NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/home" activeStyle> Home Workout</NavLink>
                <NavLink to="/outside" activeStyle> Home Workout</NavLink>
                <NavLink to="/ss" activeStyle> Home Workout</NavLink>
                <NavLink to="/aaa" activeStyle> Home Workout</NavLink>
                <NavLink to="/sss" activeStyle> Home Workout</NavLink>
            </NavMenu>
        </Nav>

    );
};

export default Navbar;