import styled from "styled-components";

const Container = styled.div`
background-color: rgba(0,0,0, .5);
border-radius:10px;
width: auto;
border: solid 2px #988257;

`
const CardImg = styled.img`

width:500px;
height:300px;


`
const ContentCard = styled.div`
    display: flex;
    justify-content: center;
    padding-top:2rem;
    
`

const H3 = styled.h3`
color: white;
text-align: center;
padding:1rem;
`
const Description = styled.p`
color: white;
padding:1rem;
`

const BtnContent = styled.div`
display: flex;
justify-content: space-around;
padding-bottom:1rem;

`

export{
    Container,
    CardImg,
    H3,
    Description,
    BtnContent,
    ContentCard
    
}