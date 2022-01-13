import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const ThreeSum = () => {

  const twoSum = (left, nums, target, result) => {
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[left] + nums[right];
      if (currentSum === target) {
        result.push([(-target), nums[left], nums[right]]);
        left += 1;
        right -= 1;
        while (left < right && nums[left] === nums[left - 1]) left += 1; // avoid duplicates on the left
        while (left < right && nums[right] === nums[right + 1]) right -= 1; // avoid duplicates on the right
      } else if (currentSum > target) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }

  // T: O(nlogn + n^2  ~~ n^2)
  // S: O(n)
  const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // skip the same element to avoid triplet duplicate
      twoSum(i + 1, nums, -nums[i], result);
    }
    return result;
  }

  return (
    <PageTemplate
      problem={problemTexts.threeSum}
      input={'[-3,0,1,2,-1,1,-2]'}
      result={JSON.stringify(threeSum([-1,0,1,2,-1,-4]))}
    />
  )
}

export default ThreeSum