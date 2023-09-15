import React from 'react'
// import Particles from '../components/Particles'
import { ContainerProyecto, Content } from './ProyectosStyled'
import { SubTitle } from './SobremiStyled'
import Card from '../components/Card'

const Proyectos = () => {
  return (
    <ContainerProyecto>
    <SubTitle>Mis Proyectos</SubTitle>
    <Content>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </Content>
    {/* <Particles id="tsparticles"/> */}
    </ContainerProyecto>
    
  )
}

export default Proyectos