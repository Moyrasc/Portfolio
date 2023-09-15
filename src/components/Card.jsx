import React from 'react'
import { BtnContent, CardImg, Container, ContentCard, Description, H3 } from './CardStyled'
import { FooterLink } from './FooterStyled'
import { AiFillGithub} from 'react-icons/ai'
import { FaLaptopCode } from 'react-icons/fa'

const Card = () => {
  return (
    <Container>
        <ContentCard>
        <CardImg src='https://maycomtales.com/wp-content/uploads/2020/07/mockups_online_cabecera.jpg' alt='img-random'/>
        </ContentCard>
        <H3>Nombre Proyecto</H3>
        <Description>Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim leo in ultricies ultrices. Suspendisse odio est, tincidunt ac porta ac, mattis a sapien. Phasellus vulputate massa ut suscipit tincidunt. In porttitor enim in tristique aliquet. </Description>
        <BtnContent>
            <FooterLink href='' target='_blank'>
                <FaLaptopCode/>
            </FooterLink>
            <FooterLink href='' target='_blank'>
                <AiFillGithub />
            </FooterLink>
        </BtnContent>
    </Container>
  )
}

export default Card