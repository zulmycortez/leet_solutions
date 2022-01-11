import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const LongestPalindromicSubstring = () => {
  // runtime complexity of O(n)
  // memory complexity of O(n)
  const longestPalindromicSubstring = (str) => {
    let map = new Map();
    let palindrome = '';
    let arr = [...str];

    arr.forEach((letter) => {
      if (map.has(letter)) {
        palindrome += letter;
        map.delete(letter);
      } else {
        map.set(letter, true);
      }
    })

    if (arr.length === 1) {
      palindrome = arr[0]
    };
    if (str.length > palindrome.length && map.size > 0) {
      palindrome += [...palindrome][0];
    }

    if (palindrome === '') {
      return 'No Palindrome found.';
    } else {
      return palindrome;
    }
  }

  return (
    <PageTemplate
      problem={problemTexts.maxSubarry}
      input={'tacocato'}
      result={JSON.stringify(longestPalindromicSubstring('tacocat'))}
    />
  )
}

export default LongestPalindromicSubstring