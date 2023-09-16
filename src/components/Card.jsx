import React from 'react'
import { BtnContent, CardImg, Container, ContentCard, Description, H3 } from './CardStyled'
import { FooterLink } from './FooterStyled'
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
            <FooterLink href='' target='_blank'>
                <FaLaptopCode/>
            </FooterLink>
            <FooterLink href={proyecto.repositorio} target='_blank'>
                <AiFillGithub />
            </FooterLink>
        </BtnContent>
    </Container>
    ))}

    </>
  )
}

export default Card