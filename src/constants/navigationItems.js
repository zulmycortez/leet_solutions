import TwoSum from "../problems/TwoSum"
import AddTwoNumbers from "../problems/AddTwoNumbers"
import RemoveElement from "../problems/RemoveElement"
import FourSum from "../problems/FourSum"
import RemoveDuplicates from "../problems/RemoveDuplicates"

const navigationItems = [
  {
    label: 'Home',
    key: 'home',
    link: '/'
  },
  {
    label: 'Two Sum',
    key: 'twoSum',
    link: '/two-sum',
    component: <TwoSum />
  },
  {
    label: 'Add Two Numbers',
    key: 'addTwoNumbers',
    link: '/add-two-numbers',
    component: <AddTwoNumbers />
  },
  {
    label: 'Remove Element',
    key: 'removeElement',
    link: '/remove-element',
    component: <RemoveElement />
  },
  {
    label: 'Four Sum',
    key: 'fourSum',
    link: '/four-sum',
    component: <FourSum />
  },
  {
    label: 'Remove Duplicates',
    key: 'removeDuplicates',
    link: '/remove-duplicates',
    component: <RemoveDuplicates />
  },
]

export { navigationItems }