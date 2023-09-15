import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
    width: 100%;
    height: 120px;
    background-color: #0a0b0d;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    -moz-box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    justify-content: space-evenly;
    opacity:0.65;
    
`
const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

const NavbarLink = styled(Link)`
color: white;
font-size: 1.3rem;
font-weight: bold;
display: flex;
padding-right: 2rem;
align-items: center;
justify-content:center ;
text-decoration: none;
margin: 10px;
cursor: pointer;
&:hover,
&:focus{
    color: #bdac8d;
}
& img {
    width: 150px;
    height: 150px;
    
    
}

`
const NavContentLink = styled.div`
display:flex;

// @media screen and (max-width:768px){
//     position:absolute;
//     top:-200px;
//     left:0;
//     width:100%;
//     height:90vh;
//     justify-content: center;
//     flex-direction:column;
//     align-items:center;
//     transition: 0.5s all ease;
// }


`
const MobileIcon = styled.div`
display: none;


@media screen and (max-width:768px){
    display:flex;
    padding-right: 1rem;
    svg{
        fill: #bdac8d;
        height:40px;
        width:40px
    }
    
}

`
export {
  NavContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavContentLink,
  MobileIcon

}