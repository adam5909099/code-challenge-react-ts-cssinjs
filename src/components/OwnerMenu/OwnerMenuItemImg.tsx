import React, { SFC } from 'react'

import styled from '../../styled'
import Logo from '../../assets/logo.png'
import Eclipse from '../../assets/eclipse.png'

type Props = {
  img: string
  alt: string
}

const Container = styled.div({
  position: 'relative',
  width: 35,

  'img:first-child': {
    position: 'absolute',
    left: -2,
    top: -2
  },

  'img:nth-child(2)': {
    position: 'absolute'
  },

  'img:last-child': {
    position: 'absolute',
    left: 12
  }
})

const OwnerMenuItemImg: SFC<Props> = ({ img, alt }) => (
  <Container>
    <img src={Eclipse} alt="eclpise"></img>
    <img src={Logo} alt="logo"></img>
    <img src={img} alt={alt}></img>
  </Container>
)

export default OwnerMenuItemImg
