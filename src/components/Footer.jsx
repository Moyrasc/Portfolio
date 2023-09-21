import React from 'react'
import { ContainerFooter, FooterLinkContainer } from './FooterStyled'


const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
    <ContainerFooter>
        <FooterLinkContainer>
            <p> <span style={{color:"#bead8e",fontWeight:"bold"}}>&copy; {currentYear}</span> Noe Sola.</p>
        </FooterLinkContainer>
    </ContainerFooter>
)
}

export default Footer