import React from 'react'
import NavTableStyle from './NavTableStyle'
import patterns from '../../constants/patterns'
import NavItem from './NavItem'
import Divider from '../Divider/Divider'

// Navtable will be the left side table of contents.
// The hierarchy will be:
// 1. Pattern
//   a. Problem Name

const NavTable = ({ items }) => {
  // items: key, link, label

  return (
    <NavTableStyle>
      <NavItem items={items} pattern={patterns.about} />
      <Divider />
      <NavItem items={items} pattern={patterns.slidingWindow} />
      <Divider />
      <NavItem items={items} pattern={patterns.cyclicSort} />
      <Divider />
      <NavItem items={items} pattern={patterns.twoPointers} />
      <Divider />
      <NavItem items={items} pattern={patterns.hashMap} />
      <Divider />
      <div className="count">
        # of problems: {items.length}
      </div>
    </NavTableStyle>
  )
}

export default NavTable