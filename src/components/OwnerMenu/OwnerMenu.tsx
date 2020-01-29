import React, { SFC } from 'react'
import * as R from 'ramda'
import OwnerMenuItem from './OwnerMenuItem'

import OwnerMenuContainer from './OwnerMenuContainer'
import OwnerMenuFilter from './OwnerMenuFilter'

type Props = {
  owners: Owner[]
}

const OwnerMenu: SFC<Props> = ({ owners }) => (
  <OwnerMenuContainer>
    <OwnerMenuFilter placeholder="Filter by name" />
    {R.map(
      (owner) => (
        <OwnerMenuItem key={owner.name} {...owner} />
      ),
      owners
    )}
  </OwnerMenuContainer>
)

export default OwnerMenu
