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
import PopulatingPointersInNode from "../problems/PopulatingPointersInNode"
import AreBinaryTreesIdentical from "../problems/AreBinaryTreesIdentical"
import MedianTwoSorted from "../problems/MedianTwoSorted"
import LongestPalindromicSubstring from "../problems/LongestPalindromicSubstring"
import LongestSubstringNoRepeating from "../problems/LongestSubstringNoRepeating"
import ReverseInteger from "../problems/ReverseInteger"
import ZigzagConversion from "../problems/ZigzagConversion"
import IsArray1Array2Equal from "../problems/IsArray1Array2Equal"
import Permutations from "../problems/Permutations"
import GenerateParentheses from "../problems/GenerateParentheses"
import ThreeSum from "../problems/ThreeSum"
import Atoi from "../problems/Atoi"
import MaxSubArrayK from "../problems/MaxSubArrayK"
import CyclicSort from "../problems/CyclicSort"
import FindMissingNumber from "../problems/FindMissingNumber"
import SmallestSubarrayGreatestSum from "../problems/SmallestSubarrayGreatestSum"
import SquaringASortedArray from "../problems/SquaringASortedArray"
import LongestSubstringMaxKDistinct from "../problems/LongestSubstringMaxKDistinct"
import FruitIntoBasket from "../problems/FruitIntoBasket"
import LongestSubstringWithDistinct from "../problems/LongestSubstringWithDistinct"

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
  {
    label: 'Populating Pointers In Node',
    key: 'populatingPointersInNode',
    link: '/populating-pointers-in-node',
    component: <PopulatingPointersInNode />
  },
  {
    label: 'Are Binary Trees Identical',
    key: 'areBinaryTreesIdentical',
    link: '/are-binary-trees-identical',
    component: <AreBinaryTreesIdentical />
  },
  {
    label: 'Median Two Sorted',
    key: 'medianTwoSorted',
    link: '/median-two-sorted',
    component: <MedianTwoSorted />
  },
  {
    label: 'Longest Palindromic Substring',
    key: 'longestPalindromicSubstring',
    link: '/longest-palindromic-substring',
    component: <LongestPalindromicSubstring />
  },
  {
    label: 'Longest Substring No Repeating',
    key: 'longestSubstringNoRepeating',
    link: '/longest-substring-no-repeating',
    component: <LongestSubstringNoRepeating />
  },
  {
    label: 'Reverse Integer',
    key: 'reverseInteger',
    link: '/reverse-integer',
    component: <ReverseInteger />
  },
  {
    label: 'Zigzag Conversion',
    key: 'zigzagConversion',
    link: '/zigzag-conversion',
    component: <ZigzagConversion />
  },
  {
    label: 'Is Array1 Array2 Equal',
    key: 'isArray1Array2Equal',
    link: '/is-array1-array2-equal',
    component: <IsArray1Array2Equal />
  },
  {
    label: 'Permutations',
    key: 'permutations',
    link: '/permutations',
    component: <Permutations />
  },
  {
    label: 'Generate Perentheses',
    key: 'generatePerentheses',
    link: '/generate-perentheses',
    component: <GenerateParentheses />
  },
  {
    label: 'Three Sum',
    key: 'threeSum',
    link: '/three-sum',
    component: <ThreeSum />
  },
  {
    label: 'Atoi',
    key: 'atoi',
    link: '/atoi',
    component: <Atoi />
  },
  {
    label: 'Max SubArray K',
    key: 'maxSubArrayK',
    link: '/max-sub-array-k',
    component: <MaxSubArrayK />
  },
  {
    label: 'Cyclic Sort',
    key: 'cyclicSort',
    link: '/cyclic-sort',
    component: <CyclicSort />
  },
  {
    label: 'Find Missing Number',
    key: 'findMissingNumber',
    link: '/find-missing-number',
    component: <FindMissingNumber />
  },
  {
    label: 'Smallest Subarray Greatest Sum',
    key: 'smallestSubarrayGreatestSum',
    link: '/smallest-subarray-greatest-sum',
    component: <SmallestSubarrayGreatestSum />
  },
  {
    label: 'Squaring A Sorted Array',
    key: 'squaringASortedArray',
    link: '/squaring-a-sorted-array',
    component: <SquaringASortedArray />
  },
  {
    label: 'Longest Substring Max K Distinct',
    key: 'longestSubstringMaxKDistinct',
    link: '/longest-substring-max-k-distinct',
    component: <LongestSubstringMaxKDistinct />
  },
  {
    label: 'Fruit Into Basket',
    key: 'fruitIntoBasket',
    link: '/fruit-into-basket',
    component: <FruitIntoBasket />
  },
  {
    label: 'Longest Substring With Distinct Characters',
    key: 'longestSubstringWithDistinct',
    link: '/longest-substring-with-distinct',
    component: <LongestSubstringWithDistinct />
  }
]

export { navigationItems }