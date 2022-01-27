import ButtonDropdownStyle from './ButtonDropdownStyle'
import { useState, useEffect } from 'react'
import H3 from '../H3/H3'
import DropdownMenu from './DropdownMenu'

const Icon = ({ on }) => {
  return (
    <span className='icon'>{on ? '+' : '-'}</span>
  )
}

const divStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0
}

const ButtonDropdown = ({ text, items, on}) => {
  const [open, setOpen] = useState(false)

  const onToggle = () => setOpen(!open);

  useEffect(() => {
    on? setOpen(true) : setOpen(false);
  }, [on])

  return (
    <ButtonDropdownStyle>
      <div
        className="__dropdown-parent"
        onClick={onToggle}>
        <H3 style={divStyle} >
          {text} <Icon on={open} />
        </H3>
      </div>
      {open && (<DropdownMenu items={items} />)}
    </ButtonDropdownStyle>
  )
}

export default ButtonDropdown
