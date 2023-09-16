import styled from "styled-components";

const ContainerContact = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const ContainerLabel =styled.div`
display: flex;
flex-direction: column;
width:300px;
`
const Input = styled.input`
padding:0.8rem;
border-radius:5px;
outline:none;
`
const Form = styled.form`
width:100%;

`
const FormContact = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Textarea = styled.textarea`
border-radius:5px;
outline:none;
padding: 10px;
`
const SubtitleContact = styled.h2`
color:var(--gold);
font-family:var(--subTitle);
font-size: 4rem;
padding-bottom:3rem;
`
const Label = styled.label`
color:var(--gold);
margin:10px;
font-size: 20px;

`
const Btn = styled.button`
background-color:var(--gold);
color:var(--white);
border: none;
margin-top:1.5rem;
border-radius: 5px;
width: 300px;
padding: 0.5rem;
cursor: pointer;
font-size: 20px;
&:hover{
    background-color: var(--darkGold);
}
`
export{
    ContainerContact,
    ContainerLabel,
    Input,
    Form,
    FormContact,
    Textarea,
    SubtitleContact,
    Label,
    Btn
}