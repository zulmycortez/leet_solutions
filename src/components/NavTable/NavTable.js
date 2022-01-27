import React, { useState } from 'react'
import NavTableStyle from './NavTableStyle'
import patterns from '../../constants/patterns'
import NavItem from './NavItem'
import Divider from '../Divider/Divider'
import Checkbox from '../Checkbox/Checkbox'

// Navtable will be the left side table of contents.
// The hierarchy will be:
// 1. Pattern
//   a. Problem Name

const NavTable = ({ items }) => {
  const [openAll, setOpenAll] = useState(false)

  const onCheckboxChange = () => {
    setOpenAll(!openAll);
  }

  return (
    <NavTableStyle>
      <div className="__checkbox-open-all">
        <Checkbox
          value={openAll}
          onChange={onCheckboxChange}
          label="Open all problems?"
        />
      </div>
      <NavItem menuOn={openAll} items={items} pattern={patterns.about} />
      <Divider />
      <NavItem menuOn={openAll} items={items} pattern={patterns.slidingWindow} />
      <Divider />
      <NavItem menuOn={openAll} items={items} pattern={patterns.cyclicSort} />
      <Divider />
      <NavItem menuOn={openAll} items={items} pattern={patterns.twoPointers} />
      <Divider />
      <NavItem menuOn={openAll} items={items} pattern={patterns.hashMap} />
      <Divider />
      <div className="count">
        # of problems: {items.length}
      </div>
    </NavTableStyle>
  )
}

export default NavTable