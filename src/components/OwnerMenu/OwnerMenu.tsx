import React, { SFC, useState } from 'react'
import * as R from 'ramda'
import OwnerMenuItem from './OwnerMenuItem'

import OwnerMenuContainer from './OwnerMenuContainer'
import OwnerMenuFilter from './OwnerMenuFilter'
import MenuItem from '../Menu/MenuItem'

type Props = {
  owners: Owner[]
}

const OwnerMenu: SFC<Props> = ({ owners }) => {
  const [filter, setFilter] = useState('')

  const filteredOwners = R.filter<Owner>(
    (owner) =>
      owner.name.toLowerCase().includes(filter.toLowerCase()) ||
      owner.title.toLowerCase().includes(filter.toLowerCase()),
    owners
  )

  return (
    <OwnerMenuContainer>
      <OwnerMenuFilter
        placeholder="Filter by name"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
      {filteredOwners.length === 0 ? (
        <MenuItem>No Results</MenuItem>
      ) : (
        R.map(
          (owner) => <OwnerMenuItem key={owner.name} {...owner} />,
          filteredOwners
        )
      )}
    </OwnerMenuContainer>
  )
}

export default OwnerMenu
