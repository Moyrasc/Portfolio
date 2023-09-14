import styled from "styled-components"

const ContainerSobre = styled.div`
display: flex;
flex-direction: column;
height: 81.5vh;
align-items: center;
justify-content: center;
`
const SubTitle = styled.h2`
color:var(--gold);
font-family: var(--subTitle);
text-align:center ;
font-size:4rem;
margin-top: 0;

@media screen and (max-width:576px){
font-size:2rem;
}
`
const MainContent = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:100%;
`
const Img = styled.div`
padding:0 3rem;
& img {
    border-radius:60%
}
`
const TextContent = styled.div`
padding: 0 2rem;
width:50%;
& p{
    color:var(--white)
}

`
export {
    ContainerSobre,
    SubTitle,
    MainContent,
    Img,
    TextContent
}