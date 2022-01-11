import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const MaxSubArrayK = () => {

  const maxSubArray = (arr, k) => {
    let localMax = 0
    let globalMax = 0;
    let windowStart = 0

    for (let i = 0; i < arr.length; i++) {
      localMax += arr[i];

      if (i >= k - 1) {
        globalMax = Math.max(globalMax, localMax);
        localMax -= arr[windowStart];
        windowStart += 1
      }
    }
    return globalMax
  }

  return (
    <PageTemplate
      problem={problemTexts.maxSubarry}
      input={'[-2,1,-3,4,-1,2,1,-5,4]'}
      result={JSON.stringify(maxSubArray([-2,1,-3,4,-1,2,1,-5,4], 3))}
    />
  )
}

export default MaxSubArrayK