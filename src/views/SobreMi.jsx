import React from 'react'
import Particles from '../components/Particles'
import { ContainerSobre, Img, MainContent, SubTitle, TextContent } from './SobremiStyled'
import { Btn } from './ContactoStyled'
import { Link } from 'react-router-dom'
import CV from '../assets/CV.pdf'
import foto from '../assets/perfil.png'
import { ContLink, SvgLink } from './HomeStyled'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


const SobreMi = () => {
  return (
    <ContainerSobre>
    <SubTitle>Reinventándome</SubTitle>
    <MainContent>
      <Img>
        <img src={foto} alt=''/>
      </Img>
      <TextContent>
        <p>Mi historia es un viaje de transformación desde una carrera en enfermería hacia el desarrollo de software.</p><br/>
        <p>Como enfermera, mi trabajo se centraba en cuidar a las personas y brindarles atención médica de calidad en momentos críticos. A lo largo de los años, aprendí la importancia de la empatía, la paciencia y la resolución de problemas. Estas habilidades han demostrado ser invaluables en mi transición a la programación.</p><br/>
        <p>La programación para mí es como un rompecabezas interminable. Me encanta enfrentarme a desafíos complejos y encontrar soluciones creativas a problemas. Mi curiosidad me impulsa a aprender constantemente y a explorar nuevas tecnologías.</p>
      </TextContent>
      <Link to={CV} download="CV-Noemi-Sola" target='_blank' rel='noreferrer'><Btn> Descargar CV</Btn></Link>
              <ContLink>
            <SvgLink href='https://www.linkedin.com/in/noe-sola/' target='_blank'>
                <AiFillLinkedin />
            </SvgLink>
            <SvgLink href='https://github.com/Moyrasc' target='_blank'>
                <AiFillGithub />
            </SvgLink>
        </ContLink>
    </MainContent>
    <Particles id="tsparticles"/>
    </ContainerSobre>
  )
}

export default SobreMi