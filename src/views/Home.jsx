import React from 'react'
import Particles from '../components/Particles.jsx';
import { Container, Logo, Logo2, Section, SubTitle, Title } from './HomeStyled.jsx';
import SobreMi from './SobreMi.jsx';
import Proyectos from './Proyectos.jsx';
import moon from '../assets/moonGold.png'
import moonReverse from '../assets/moonGoldReverse.png'
import Contacto from './Contacto.jsx';


const Home = () => {
  return (
    <Container>
      <Section>
        <Title>Noe Sola</Title>
        <SubTitle>Desarrolladora Web</SubTitle>
      </Section>
      <Logo>
        <img src={moon} alt='moon'/>
      </Logo>
      <Section>
        <SobreMi/>
      </Section>
      <Logo2>
        <img src={moonReverse} alt='moon'/>
      </Logo2>
      <Section>
        <Proyectos/>
      </Section>
      <Logo>
        <img src={moon} alt='moon'/>
      </Logo>
      <Section>
        <Contacto/>
      </Section>
    <Particles id="tsparticles"/>
    
    </Container>
    
  )
}

export default Home