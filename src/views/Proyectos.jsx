import React from 'react'
import Particles from '../components/Particles'
import { ContainerProyecto, Content } from './ProyectosStyled'
import { SubTitle } from './SobremiStyled'
import Card from '../components/Card'

const Proyectos = () => {
  return (
    <>
    
    <ContainerProyecto>
    <SubTitle>Mis Proyectos</SubTitle>
    <Content>
    <Card/>
    </Content>
    </ContainerProyecto>
    <Particles id="tsparticles"/>
    </>
  )
}

export default Proyectos