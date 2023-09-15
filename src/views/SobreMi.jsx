import React from 'react'
// import Particles from '../components/Particles'
import { ContainerSobre, Img, MainContent, SubTitle, TextContent } from './SobremiStyled'

const SobreMi = () => {
  return (
    <ContainerSobre>
    <SubTitle>REINVENTÁNDOME</SubTitle>
    <MainContent>
      <Img>
        <img src='https://picsum.photos/250/250?random=1' alt=''/>
      </Img>
      <TextContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu orci at dui lacinia gravida. Donec commodo dolor sed enim maximus lacinia. Mauris feugiat elit vitae ultrices placerat. Donec efficitur justo nec erat gravida pharetra. Maecenas diam nibh, tristique vel molestie in, tincidunt vitae ligula. Pellentesque id tellus id dolor ornare vehicula. Nam magna purus, tempus ac est sit amet, interdum convallis mauris. Aenean sodales quis leo non viverra. Ut urna magna, porttitor id ultrices pulvinar, lacinia sit amet eros. Duis at dictum nisl, sed molestie quam. Praesent eu nibh consectetur, blandit sapien fringilla, sollicitudin nisl. Vestibulum congue lacus ipsum. Proin ultrices tincidunt ultricies.</p>
      </TextContent>
    </MainContent>
    {/* <Particles id="tsparticles"/> */}
    </ContainerSobre>
  )
}

export default SobreMi