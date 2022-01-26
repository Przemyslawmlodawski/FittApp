import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NavbarContainer, NavLogo, Nav, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from "./NavBarElements";
import { FaBars } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop()
  }


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>

          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              FitApp  <i class="fas fa-running"></i>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  activeClass='active'
                >About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="news" smooth={true} duration={500} spy={true} exact='true' offset={-80}>News</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="exercises" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Exercises</NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnLink to="/login">Zaloguj się!</NavBtnLink>
              </NavBtn>
            </NavMenu>

            {/* {button && (
            <Link to="/sign-up" className="btn-mobile"> <Button buttonStyle="btn--outline">Zarejestruj się!</Button></Link>
          )}
          {button && (
            <Link to="/log-in" className="btn-mobile"> <Button buttonStyle="btn--outline">Zaloguj się!</Button></Link>
          )} */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
