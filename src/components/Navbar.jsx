import React, { useState } from 'react'
import { MobileIcon, NavContainer, NavContentLink, NavbarLink, NavbarLinkContainer } from './NavbarStyled'
import logo from '../assets/logoNav.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
const [hamburgerOpen, setHamburgerOpen] = useState(false);
const toggleHamburger = () => {
  setHamburgerOpen(!hamburgerOpen)
}
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
              <MobileIcon onClick={toggleHamburger}>
                <GiHamburgerMenu/>
            </MobileIcon>  
        </NavbarLinkContainer> 
      </NavContainer>
  )
}

export default Navbar