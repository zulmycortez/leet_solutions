import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const LongestSubstringMaxKDistinct = () => {
  // T: O(n)
  // S: O(n)
  const longestSubstringMaxKDistinct = (str, k) => {
    let windowStart = 0;
    let maxLength = 0;
    let charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let i = 0; i < str.length; i++) {
    const rightChar = str[i];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  return maxLength;
}

  return (
    <PageTemplate
      problem={problemTexts.longestSubstringMaxKDistinct}
      input={'string: araaci, k = 2'}
      result={JSON.stringify(longestSubstringMaxKDistinct('araaci', 2))}
    />
  )
}

export default LongestSubstringMaxKDistinct