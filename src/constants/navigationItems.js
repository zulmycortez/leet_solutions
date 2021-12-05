import TwoSum from "../problems/TwoSum"
import AddTwoNumbers from "../problems/AddTwoNumbers"

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
]

export { navigationItems }