import React, { useState } from 'react'
import { MobileIcon, NavContainer, NavContentLink, NavbarLink, NavbarLinkContainer } from './NavbarStyled'
import logo from '../assets/logoNav.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <NavContainer>
        <NavbarLinkContainer>
          <NavbarLink to='/'>
            <img src={logo} alt='logo-home' />
          </NavbarLink>
          <MobileIcon onClick={toggleMenu}>
                <GiHamburgerMenu/>
            </MobileIcon> 
              <NavContentLink isOpen={menuOpen}>
                <NavbarLink to='/sobre-mi'>Sobre mí</NavbarLink>
                <NavbarLink to='/proyectos'>Proyectos</NavbarLink>
                <NavbarLink to='/contacto'>Contacto</NavbarLink>               
              </NavContentLink>
        </NavbarLinkContainer> 
      </NavContainer>
  )
}

export default Navbar