import React from 'react'
import { ContainerFooter, FooterContLink, FooterLink, FooterLinkContainer } from './FooterStyled'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
    <ContainerFooter>
        <FooterLinkContainer>
            <p> <span style={{color:"#bead8e",fontWeight:"bold"}}>&copy; {currentYear}</span> Noe Sola.</p>
        <FooterContLink>
            <FooterLink href='https://www.linkedin.com/in/noe-sola/' target='_blank'>
                <AiFillLinkedin />
            </FooterLink>
            <FooterLink href='https://github.com/Moyrasc' target='_blank'>
                <AiFillGithub />
            </FooterLink>
        </FooterContLink>
        </FooterLinkContainer>
    </ContainerFooter>
)
}

export default Footer