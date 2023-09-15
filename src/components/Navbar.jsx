import React from 'react'
import { MobileIcon, NavContainer, NavContentLink, NavbarLink, NavbarLinkContainer } from './NavbarStyled'
import logo from '../assets/logoNav.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

  return (
    <NavContainer>
        <NavbarLinkContainer>
          <NavbarLink to='/'>
            <img src={logo} alt='logo-home' />
          </NavbarLink>
              <NavContentLink >
                <NavbarLink to='/sobre-mi'>Sobre mí</NavbarLink>
                <NavbarLink to='/proyectos'>Proyectos</NavbarLink>
                <NavbarLink to='/contacto'>Contacto</NavbarLink>               
              </NavContentLink>
              <MobileIcon >
                <GiHamburgerMenu/>
            </MobileIcon>  
        </NavbarLinkContainer> 
      </NavContainer>
  )
}

export default Navbar