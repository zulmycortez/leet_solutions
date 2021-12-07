import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const FourSum = () => {

  const fourSum = (nums, target) => {
    let quad = []
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let l = i + 2 ; l < nums.length; l++) {
          for (let k = i + 3; k < nums.length; k++) {
            if (nums[i] + nums[j] + nums[l] + nums[k] === target) {
              quad.push([nums[i], nums[j], nums[l], nums[k]])
            }
          }
        }
      }
    }
    return quad
  }

  console.log(fourSum([1,0,-1,0,-2,2], 0))
  return (
    <PageTemplate
      problem={problemTexts.twoSum}
      input={'nums: [3,2,4] target: 6'}
      result={JSON.stringify(fourSum([3,2,4], 6))}
    />
  )
}

export default FourSum