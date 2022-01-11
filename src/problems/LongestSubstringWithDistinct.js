import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const LongestSubstringWithDistinct = () => {

  const longestSubstringWithDistinct = (arr) => {
    let missing = 0;

    return missing;
  }

  return (
    <PageTemplate
      problem={problemTexts.longestSubstringWithDistinct}
      input={'[4, 0, 3, 1]'}
      result={JSON.stringify(longestSubstringWithDistinct([4, 0, 3, 1]))}
    />
  )
}

export default LongestSubstringWithDistinct