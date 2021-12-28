import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const RemoveElement = () => {

  // solution 1:
  // const removeElement = (nums, value) => {
  //   let newArray = []
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== value) {
  //       newArray.push(nums[i]);
  //     }
  //   }
  //   return newArray
  // }

  // solution 2:
  const removeElement = (nums, value) => {
    let i = 0;
    let length = nums.length;

    while (i < length) {
      if (nums[i] === value) {
        nums.splice(i, 1)
      }
      i++;
    }

    return nums;
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