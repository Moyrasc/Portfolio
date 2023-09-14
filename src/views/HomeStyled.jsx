import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
height: 65vh;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
color:var(--white);
font-family: var(--title);
text-align: center;
font-size:6rem;
font-weight:900;

@media screen and (max-width:576px){
font-size:3rem;
}

`
const SubTitle = styled.h2`
color:var(--white);
font-family: var(--subTitle);
text-align:center ;
font-size:4rem;
margin-top: 0;

@media screen and (max-width:576px){
font-size:2rem;
}
`
export {
    Container,
    Title,
    SubTitle
}