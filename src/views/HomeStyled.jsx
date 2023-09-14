import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;

`
const Title = styled.h1`
color:var(--white);
font-family: var(--title);
text-align: center;
font-size:6rem;
font-weight:900;

`
const SubTitle = styled.h2`
color:var(--white);
font-family: var(--subTitle);
text-align:center ;
font-size:4rem;
margin-top: 0;
`
export {
    Container,
    Title,
    SubTitle
}