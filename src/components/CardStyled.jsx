import styled from "styled-components";

const Container = styled.div`
background-color: rgba(0,0,0, .5);
border-radius:10px;
width: auto;
border: solid 2px #988257;

`
const CardImg = styled.img`
width:100%;
object-fit: cover;
height:300px;


`
const ContentCard = styled.div`
    display: flex;
    justify-content: center;
    padding:2rem;
    
`

const H3 = styled.h3`
color: white;
text-align: center;
padding:1rem;
`
const Description = styled.p`
color: white;
padding:1rem;
text-align: center;
`

const BtnContent = styled.div`
display: flex;
justify-content: space-around;
padding-bottom:1rem;

`
const SvgLink = styled.a`
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
        height:40px;
        width:40px;
        // margin: 0 2rem;
        
    }
`

export{
    Container,
    CardImg,
    H3,
    Description,
    BtnContent,
    ContentCard,
    SvgLink
    
}