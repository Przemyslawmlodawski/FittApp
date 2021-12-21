import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper, SidebarBtnWrap, SidebarRoute } from './SidebarElement'
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='disccover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='news' onClick={toggle}>
                        News
                    </SidebarLink>
                    <SidebarLink to='exercises' onClick={toggle}>
                        Exercises
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/log-in" onClick={toggle}>Zaloguj się!</SidebarRoute>
                    <SidebarRoute to="/sign-up" onClick={toggle}>Zarejestruj sie!</SidebarRoute>
                </SidebarBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
