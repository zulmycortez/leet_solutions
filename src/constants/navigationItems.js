import TwoSum from "../problems/TwoSum"
import AddTwoNumbers from "../problems/AddTwoNumbers"
import RemoveElement from "../problems/RemoveElement"
import FourSum from "../problems/FourSum"
import RemoveDuplicates from "../problems/RemoveDuplicates"
import IsStringUnique from "../problems/IsStringUnique"
import CheckPermutation from "../problems/CheckPermutation"
import UrlGenerator from "../problems/UrlGenerator"
import PalindromePermutation from "../problems/PalindromePermutation"
import OneAway from "../problems/OneAway"
import StringCompression from "../problems/StringCompression"
import MergeSortedList from "../problems/MergeSortedLists"
import MaxSubArray from "../problems/MaxSubArray"

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
  {
    label: 'Is String Unique',
    key: 'isStringUnique',
    link: '/is-string-unique',
    component: <IsStringUnique />
  },
  {
    label: 'Check Permutation',
    key: 'checkPermutation',
    link: '/check-permutation',
    component: <CheckPermutation />
  },
  {
    label: 'Url Generator',
    key: 'urlGenerator',
    link: '/url-generator',
    component: <UrlGenerator />
  },
  {
    label: 'Palindrome Permutation',
    key: 'palindromePermutation',
    link: '/palindrome-permutation',
    component: <PalindromePermutation />
  },
  {
    label: 'OneAway',
    key: 'oneAway',
    link: '/one-away',
    component: <OneAway />
  },
  {
    label: 'StringCompression',
    key: 'stringCompression',
    link: '/string-compression',
    component: <StringCompression />
  },
  {
    label: 'Merge Sorted List',
    key: 'mergeSortedList',
    link: '/merge-sorted-list',
    component: <MergeSortedList />
  },
  {
    label: 'Max SubArray',
    key: 'maxSubArray',
    link: '/max-sub-array',
    component: <MaxSubArray />
  },
]

export { navigationItems }