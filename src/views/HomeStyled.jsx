import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
`
const Section = styled.section`
padding: 2rem ;
& hr {
    opacity:0;
}
`
const Title = styled.h1`
color:var(--white);
font-family: var(--title);
text-align: center;
font-size:6rem;
font-weight:900;
padding-top:5rem;

@keyframes fadeIn {
    from {
        opacity: 0;
        }
    to {
        opacity: 2;
        }
    }
opacity: 0;
        animation-name: fadeIn;
        animation-duration: 3s;
        animation-fill-mode: forwards;

@media screen and (max-width:576px){
font-size:3rem;
}

`
const SubTitle = styled.h2`
color:var(--white);
font-family: var(--subTitle);
text-align:center ;
font-size:4rem;
padding-bottom:5rem;
margin-top: 0;

@media screen and (max-width:576px){
font-size:2rem;
}
`
const Logo = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 5rem;
& img {
    width: 275px;
    height: 275px;
    opacity: 0.5;
}
@media screen and (max-width:576px){
padding: 1rem 5rem;
& img {
    width: 200px;
    height: 200px;
    opacity: 0.5;
}
}
`
const Logo2 = styled.div`
display: flex;
flex-direction: column;
padding: 0rem 5rem;
align-items: flex-end;
& img {
    width: 275px;
    height: 275px;
    opacity: 0.5;
}
@media screen and (max-width:576px){
    padding: 1rem 6rem;
& img {
    width: 200px;
    height: 200px;
    opacity: 0.5;
}
}

`
const Logo3 = styled.div`
display: flex;
flex-direction: column;
padding: 0rem 5rem;
align-items: flex-end;
& img {
    width: 275px;
    height: 275px;
    opacity: 0.5;
}
@media screen and (max-width:576px){
    padding: 1rem 4rem;
& img {
    width: 200px;
    height: 200px;
    opacity: 0.5;
}
}

`
export {
    Container,
    Title,
    SubTitle,
    Section,
    Logo,
    Logo2,
    Logo3
}