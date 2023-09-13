import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
    width: 100%;
    height: 150px;
    background-color: #0a0b0d;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    -moz-box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.43);
    justify-content: space-evenly;
    opacity:0.65
    
`
const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;`

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
display:flex`
const BtnLink = styled.button`
cursor:pointer;
border-radius:10px;
width: 150px;
height: 50px;
background-color:#db1b43;
border:none;
color:white;
`
const BtnLogin = styled(BtnLink)`
background-color: #0c2846
`

export {
  NavContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavContentLink,
  BtnLink,
  BtnLogin

}