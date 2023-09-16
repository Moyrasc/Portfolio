import React from 'react'
import Particles from '../components/Particles'
import ContactForm from '../components/ContactForm'
import { ContainerContact, SubtitleContact } from './ContactoStyled'

const Contacto = () => {
  return (
    <>
    <ContainerContact>
    <SubtitleContact>Contacto</SubtitleContact>
    <ContactForm/>
    <Particles id="tsparticles"/>
    </ContainerContact>
    </>
  )
}

export default Contacto