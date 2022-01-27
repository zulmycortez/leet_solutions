import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const MaxSubArray = () => {
  // solution 1:
  // T: O(n)
  // S: O(n)
  const maxSubArray = (arr) => {
    let localMax = 0
    let globalMax = arr[0];

    arr.forEach((num) => {
      localMax = Math.max(num, localMax + num)
      globalMax = Math.max(globalMax, localMax)
    })
    return globalMax
  }

  return (
    <PageTemplate
      problem={problemTexts.maxSubarry}
      input={'[-2,1,-3,4,-1,2,1,-5,4]'}
      result={JSON.stringify(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))}
    />
  )
}

export default MaxSubArray