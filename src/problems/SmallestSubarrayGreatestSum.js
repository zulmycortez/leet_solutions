import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const SmallestSubarrayGreatestSum = () => {
  // T: O(n)
  // S: O(1)
  const smallestSubarrayGreatestSum = (arr, k) => {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let i = 0; i < arr.length; i++) {
      windowSum += arr[i];

      while (windowSum >= k) {
        minLength = Math.min(minLength, i - windowStart + 1);
        windowSum -= arr[windowStart]
        windowStart += 1;
      }
    }

    return minLength
  }

  return (
    <PageTemplate
      problem={problemTexts.smallestSubarrayGreatestSum}
      input={'arr: [2, 1, 5, 2, 8], n: 7'}
      result={JSON.stringify(smallestSubarrayGreatestSum([2, 1, 5, 2, 8], 7))}
    />
  )
}

export default SmallestSubarrayGreatestSum