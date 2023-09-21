import React from 'react'
import { BtnContent, CardImg, Container, ContentCard, Description, H3, SvgLink } from './CardStyled'
import { AiFillGithub} from 'react-icons/ai'
import { FaLaptopCode } from 'react-icons/fa'
import proyectos from '../data/proyectos.json'

const Card = () => {
  return (
    <>
    {proyectos.map((proyecto)=> (
    <Container key={proyecto.id}> 
        <ContentCard>
        <CardImg src={proyecto.img} alt='img-random'/>
        </ContentCard>
        <H3>{proyecto.nombre}</H3>
        <Description>{proyecto.descripcion} </Description>
        <BtnContent>
            <SvgLink href={proyecto.despliegue} target='_blank'>
                <FaLaptopCode/>
            </SvgLink>
            <SvgLink href={proyecto.repositorio} target='_blank'>
                <AiFillGithub />
            </SvgLink>
        </BtnContent>
    </Container>
    ))}

    </>
  )
}

export default Card