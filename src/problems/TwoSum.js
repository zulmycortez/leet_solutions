import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const TwoSum = () => {

  // solution 1:
  // T: O(n^2 + n) == O(n^2)
  // S: O(n)

  // const twoSum = (nums, target) => {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j]
  //       }
  //     }
  //   }
  // }

  // solution 2:
  // const twoSum = (nums, target) => {
  //   let hash = {};

  //   nums.forEach((num, index) => {
  //     let value = num;
  //     hash[value] = index;
  //   })

  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = target - nums[i]
      
  //     if (hash[sum] && hash[sum] !== i) {
  //       return [i, hash[sum]]
  //     }
      
  //   }
  // }

  // solution 3:
  // const twoSum = (nums, target) => {
  //   let hash = new Map();

  //   nums.forEach((num, index) => {
  //     hash.set(num, index);
  //   })

  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = target - nums[i]

  //     if (hash.has(sum) && hash.get(sum) !== i) {
  //       return [i, hash.get(sum)]
  //     }
  //   }
  // }

  // T: O(n)
  // S: O(1)
  const twoSum = (arr, k) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      let currentSum = arr[left] + arr[right];

      if (currentSum === k) {
        return [left, right];
      } else if (currentSum > k) {
        left += 1;
      } else {
        right -=1;
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