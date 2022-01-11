import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const ThreeSum = () => {

  const twoSum = (j, target, nums) => {
    let k = nums.length - 1;
    let result = [];

    while (j < k) {
      let left = nums[j];
      let right = nums[k];

      if (left + right > target) {
        k--;
      } else if (left + right < target) {
        j++;
      } else {
        result.push([(target * -1), left, right]);
        while (j < k && nums[j] === nums[j+1]) j++;
        while (j < k && nums[k] === nums[k+1]) k--;
        j++;
        k--;
      }
    }
    return result;
  }


  const threeSum = (nums) => {
    // global result
    nums.sort((a, b) => a - b)
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) continue;

      let sumToZero = nums[i] * -1
      let subResult = twoSum(i + 1, sumToZero, nums);
      result.push(...subResult)
    }
    return result;
  }

  // const threeSum = (nums) => {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       for (let k = i + 2; k < nums.length; k++) {
  //         if (nums[i] + nums[j] + nums[k]=== 0) {
  //           return [i, j, k]
  //         }
  //       }

  //     }
  //   }
  // }

  return (
    <PageTemplate
      problem={problemTexts.threeSum}
      input={'[-1,0,1,2,-1,-4]'}
      result={JSON.stringify(threeSum([-1,0,1,2,-1,-4]))}
    />
  )
}

export default ThreeSum