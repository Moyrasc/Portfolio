import styled from "styled-components"

const ContainerProyecto = styled.div`

`
const Content = styled.div`
display: grid;
gap: 1rem;
// grid-auto-rows: 38rem;
grid-template-columns: repeat(auto-fit, minmax(35rem,1fr));

`

export {
    ContainerProyecto,
    Content
}