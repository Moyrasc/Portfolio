import styled from "styled-components"

const ContainerSobre = styled.div`

`
const SubTitle = styled.h2`
color:var(--gold);
font-family: var(--subTitle);
text-align:center ;
font-size:4rem;
padding:2rem 0;

@media screen and (max-width:576px){
font-size:2rem;
}
`
const MainContent = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
width:100%;

`
const Img = styled.div`
padding:3rem;

& img {
    width: 250px;
    height: 250px;
    border-radius:60%;
    object-position: bottom;
    object-fit: cover;

}
@media screen and (max-width:576px){
    padding: 1rem 3rem;
& img {
    width: 200px;
    height: 200px;
};
}
`
const TextContent = styled.div`
padding: 2rem 3rem 2rem 5rem;
max-width: 600px;
display: flex;
flex-direction: column;

& p{
    color:var(--white);
    font-family:var(--subTitle);
    font-size:20px;
}
@media screen and (max-width:576px){
    padding: 3rem 0;
    width:auto;
}
`
export {
    ContainerSobre,
    SubTitle,
    MainContent,
    Img,
    TextContent
}