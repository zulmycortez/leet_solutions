import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const LongestSubstringNoRepeating = () => {
  const longestSubstringNoRepeating = (str) => {
    let windowStart = 0;
    let maxLength = 0;
    let map = {}
  
  
    for (let i = 0; i < str.length; i++) {
      let right = str[i];
  
      if (right in map) {
        windowStart = Math.max(windowStart, map[right] + 1);
      }
      
      map[right] = i;
      maxLength = Math.max(maxLength, i - windowStart + 1);
  
    }
    return maxLength;
  }

  return (
    <PageTemplate
      problem={problemTexts.longestSubstringNoRepeating}
      input={'abcabcbb'}
      result={JSON.stringify(longestSubstringNoRepeating('zulmy'))}
    />
  )
}

export default LongestSubstringNoRepeating