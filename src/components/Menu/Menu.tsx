import React, { SFC } from 'react'
import * as R from 'ramda'

import MenuContainer from './MenuContainer'
import MenuItem from './MenuItem'

type Props = {
  items: string[]
}

const Menu: SFC<Props> = ({ items }) => (
  <MenuContainer>
    {R.map(
      (item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ),
      items
    )}
  </MenuContainer>
)

export default Menu
