import React from 'react'
import { Link } from 'react-router-dom' 
import NavTableStyle from './NavTableStyle'
import patterns from '../../constants/patterns'
import H5 from '../H5/H5'

const NavItem = ({ pattern, items }) => {
  // items: key, link, label

  const navItem = items.filter((item) => {
    return item.pattern === pattern;
  })

  return (
    <div className={`${pattern}`}>
      <H5>{pattern}</H5>
      {navItem.map((item) => {
        const { key, label, link } = item;
        return (
          <Link key={key} to={link}>{label}</Link>
        );
      })}
    </div>
  )
}

export default NavItem