import React from 'react'
import Particles from '../components/Particles'
import ContactForm from '../components/ContactForm'
import { ContainerContact, SubtitleContact } from './ContactoStyled'

const Contacto = () => {
  return (
    <div style={{height: '72vh'}}>
    <ContainerContact>
    <SubtitleContact>Contacto</SubtitleContact>
    <ContactForm/>
    <Particles id="tsparticles"/>
    </ContainerContact>
    </div>
  )
}

export default Contacto