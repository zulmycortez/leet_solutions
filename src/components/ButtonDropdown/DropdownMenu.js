import { Link } from 'react-router-dom' 
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const DropdownMenu = ({ items }) => {
  const navigate = useNavigate()

  const onItemClick = url => {
    navigate(url)
  }

  return (
    <div className="__dropdown-menu">
      {items.map((item) => {
        const { key, label, link } = item;
        return (
          <Button
            key={key}
            onClick={() => { onItemClick(link) }}
          >
              {label}
          </Button>
        );
      })}
    </div>
  )
}

export default DropdownMenu
