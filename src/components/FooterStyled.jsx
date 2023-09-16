// import { Link } from 'react-router-dom'
import styled from "styled-components";

const ContainerFooter = styled.div`
    width: 100%;
    background-color: rgba(10,11,13, .65);
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    -moz-box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    justify-content: flex-end;
    padding:2rem;
    
    & p{
        font-size:1.2rem;
        color:var(--white);
        padding-left:1rem;
    }
`
const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const FooterContLink = styled.div`
display:flex;
`
const FooterLink = styled.a`
color: white;
font-size: 1.3rem;
font-weight: bold;
display: flex;
align-items: center;
justify-content:center ;
text-decoration: none;
margin: 10px;
cursor: pointer;
    svg{
        fill: #bead8e;
        height:30px;
        width:30px;
        
    }
`
export{
    ContainerFooter,
    FooterLinkContainer,
    FooterContLink,
    FooterLink
}