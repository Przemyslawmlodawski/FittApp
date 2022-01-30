import React from 'react'
import './Nav.css'
import Dropdown from '../Dropdown/Dropdown'
import notifications from '../../../assets/JsonData/notification.json'
import { Link } from 'react-router-dom'
import user_image from '../../../assets/images/tuat.png'
import { useSelector } from 'react-redux'
import user_menu from '../../../assets/JsonData/user_menus.json'
import axios from 'axios'

const handleLogout = async () => {
    try {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = '/'
    } catch (error) {
        window.location.href = '/'
        console.log(error)
    }
}

const renderUserMenu = (item, index) => {
    if (item.content === "Logout") {
        return (<Link to='/' key={index} onClick={handleLogout}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>)
    } else {
        return (<Link to='/' key={index}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>)
    }



}



const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)
const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const Nav = (props) => {
    const auth = useSelector(state => state.authReducer)


    const { user, isLogged } = auth
    const curr_user = {
        display_name: user.name,
        image: user.avatar
    }
    console.log(user.name)
    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type="text" placeholder='Wyszukaj' />
                <i className='bx bx-search'></i>
            </div>
            <div className='topnav__right'>
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>

            </div>

        </div>
    )
}

export default Nav
