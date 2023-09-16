import styled from "styled-components"

const ContainerProyecto = styled.div`

`
const Content = styled.div`
display: grid;
gap: 1rem;
grid-auto-flow:dense;
// grid-template-columns: repeat(auto-fill, minmax(22rem,1fr))

@media screen and (min-width:375px){
    grid-template-columns: repeat(auto-fill, minmax(12rem,1fr));
}
@media screen and (min-width:480px){
    grid-template-columns: repeat(auto-fill, minmax(15rem,1fr));
}
@media screen and (min-width:576px){
    grid-template-columns: repeat(auto-fill, minmax(20rem,1fr));
}
@media screen and (min-width:1024px){
    grid-template-columns: repeat(auto-fill, minmax(25rem,1fr));
}
@media screen and (min-width:1280px){
    grid-template-columns: repeat(auto-fill, minmax(35rem,1fr));
}
`

export {
    ContainerProyecto,
    Content
}