import React from 'react'
import Particles from '../components/Particles.jsx';
import { Container, SubTitle, Title } from './HomeStyled.jsx';

const Home = () => {
  return (
    <Container>
      <div>
    <Title>Noe Sola</Title>
    <SubTitle>Desarrolladora Web</SubTitle>
    <Particles id="tsparticles"/>
    </div>
    </Container>
    
  )
}

export default Home