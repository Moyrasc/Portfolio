import React from 'react'
import { NavContainer, NavContentLink, NavbarLink, NavbarLinkContainer } from './NavbarStyled'
import logo from '../assets/logoNav.png'

const Navbar = () => {
  return (
    <NavContainer>
        <NavbarLinkContainer>
          <NavbarLink to='/'>
            <img src={logo} alt='logo-home' />
          </NavbarLink>         
              <NavContentLink>
                <NavbarLink to='/isobre-mi'>Sobre mí</NavbarLink>
                <NavbarLink to='/proyectos'>Proyectos</NavbarLink>
                <NavbarLink to='/contacto'>Contacto</NavbarLink>
                
              </NavContentLink>
        </NavbarLinkContainer>
      </NavContainer>
  )
}

export default Navbar