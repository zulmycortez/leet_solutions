import React from 'react'
import { Link } from 'react-router-dom' 
import NavTableStyle from './NavTableStyle'
import patterns from '../../constants/patterns'
import H5 from '../H5/H5'
import NavItem from './NavItem'
// Navtable will be the left side table of contents.
// The hierarchy will be:
// 1. Pattern
//   a. Problem Name
//      I. Solution 1
//     II. Solution 2

const NavTable = ({ items }) => {
  // items: key, link, label

  return (
    <NavTableStyle>
      <NavItem items={items} pattern={patterns.about} />
      <NavItem items={items} pattern={patterns.slidingWindow} />
      <NavItem items={items} pattern={patterns.cyclicSort} />
      <NavItem items={items} pattern={patterns.twoPointers} />
      <NavItem items={items} pattern={patterns.hashMap} />
      <div className="count">
        # of problems: {items.length}
      </div>
    </NavTableStyle>
  )
}

export default NavTable