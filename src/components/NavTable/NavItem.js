import React from 'react'
import camelCaseToTitle from '../../helper/camelCaseToTitle'
import NavItemStyle from './NavItemStyle'
import ButtonDropDown from '../ButtonDropdown/ButtonDropdown'

const NavItem = ({ pattern, items }) => {
  // items: key, link, label

  const navItem = items.filter((item) => {
    return item.pattern === pattern;
  })

  return (
    <NavItemStyle className={`${pattern}`}>
      <ButtonDropDown
        text={camelCaseToTitle(pattern)}
        h3
        items={navItem}
      />
    </NavItemStyle>
  )
}

export default NavItem