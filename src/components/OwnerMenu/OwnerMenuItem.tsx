import React, { SFC } from 'react'
import MenuItem from '../Menu/MenuItem'
import styled from '../../styled'
import OwnerMenuItemImg from './OwnerMenuItemImg'

const Name = styled.div({
  marginLeft: 11
})

const Title = styled.div(({ theme }) => ({
  marginLeft: 8,
  fontSize: theme.fontSizes.md,
  color: theme.colors.tx3
}))

// FIXME: use babel-plugin-emotion
// const Container = styled(MenuItem)(({ theme }) => ({
//   display: 'flex',
//   ':hover': {
//     [Name]: {
//       color: theme.colors.white
//     },
//     [Title]: {
//       color: theme.colors.bg1
//     }
//   }
// }))

const Container = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  ':hover': {
    'div:first-child': {
      color: theme.colors.white
    },
    'div:last-child': {
      color: theme.colors.bg1
    }
  }
}))

const OwnerMenuItem: SFC<Owner> = ({ img, name, title }) => (
  <Container>
    <OwnerMenuItemImg img={img}></OwnerMenuItemImg>
    <Name>{name}</Name>
    <Title>{title}</Title>
  </Container>
)

export default OwnerMenuItem
