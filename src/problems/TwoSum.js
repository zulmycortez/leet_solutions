import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const TwoSum = () => {

  const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
  }

  return (
    <PageTemplate
      problem={problemTexts.twoSum}
      input={'nums: [3,2,4] target: 6'}
      result={JSON.stringify(twoSum([3,2,4], 6))}
    />
  )
}

export default TwoSum