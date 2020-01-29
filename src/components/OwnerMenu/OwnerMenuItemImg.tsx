import React, { SFC } from 'react'

type Props = {
  img: string
}

const OwnerMenuItemImg: SFC<Props> = ({ img }) => (
  <img src={img} alt={img}></img>
)

export default OwnerMenuItemImg
