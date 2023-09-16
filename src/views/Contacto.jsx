import React from 'react'
import Particles from '../components/Particles'
import ContactForm from '../components/ContactForm'
import { ContainerContact, SubtitleContact } from './ContactoStyled'
import { Logo3 } from './HomeStyled'
import moonReverse from '../assets/moonGoldReverse.png'

const Contacto = () => {
  return (
    <>
    <ContainerContact>
    <SubtitleContact>Contacto</SubtitleContact>
    <ContactForm/>
    <Particles id="tsparticles"/>
    </ContainerContact>
    <Logo3>
      <img src={moonReverse} alt='moon'/>
    </Logo3>
    </>
  )
}

export default Contacto