import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const RemoveElement = () => {

  const removeElement = (nums, value) => {
    let newArray = []
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== value) {
        newArray.push(nums[i]);
      }
    }
    return newArray
  }

  return (
    <PageTemplate
      problem={problemTexts.removeElement}
      input={'nums = [3,2,2,3], val = 3'}
      result={JSON.stringify(removeElement([3,2,2,3], 3))}
    />
  )
}

export default RemoveElement