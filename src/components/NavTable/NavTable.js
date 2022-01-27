import React, { useState } from 'react'
import NavTableStyle from './NavTableStyle'
import patterns from '../../constants/patterns'
import NavItem from './NavItem'
import Divider from '../Divider/Divider'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'

// Navtable will be the left side table of contents.
// The hierarchy will be:
// 1. Pattern
//   a. Problem Name

const NavTable = ({ items }) => {
  const [openAll, setOpenAll] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  
  const onCheckboxChange = () => {
    setOpenAll(!openAll);
  }

  const onSearchChange = e => {
    setSearchValue(e.target.value);
  }

  const searchedItems = (items) => {
    return items.filter((item) => item.label.includes(searchValue));
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
      <div className="__search-input">
        <Input
          name="searchValue"
          onChange={onSearchChange}
          placeholder="Search Problem"
        />
      </div>
      <NavItem menuOn={openAll} items={searchedItems(items)} pattern={patterns.about} />
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