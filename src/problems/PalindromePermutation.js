import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const PalindromePermutation = () => {

  // solution 1:
  const palindromePermutation = (str) => {
    let string = str.toLowerCase().replaceAll(' ', '');
    const set = new Map();

    [...string].forEach((char) => {
      if (set.has(char)) {
        set.delete(char);
      } else {
        set.set(char, true)
      }
    })

    if (str.length % 2 === 0 && set.size === 0 || set.size === 1) {
      return true;
    }
    return false;
  }

  return (
    <PageTemplate
      problem={problemTexts.palindromePermutation}
      input={'htt'}
      result={JSON.stringify(palindromePermutation('htt'))}
    />
  )
}

export default PalindromePermutation