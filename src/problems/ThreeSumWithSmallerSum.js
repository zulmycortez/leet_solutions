import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const ThreeSumWithSmallerSum = () => {
  // T: O(nlogn + n^2  ~~ n^2)
  // S: O(n)

  const searchTwoSum = (arr, targetSum, first) => {
    let left = first + 1;
    let right = arr.length - 1;
    let count = 0;

    while (left < right) {
      if (arr[left] + arr[right] < targetSum) {
        count += right - left;
        left += 1;
      } else {
        right -= 1;
      }
    }
    return count;
  }

  const threeSumWithSmallerSum = (arr, target) => {
    arr.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
      count += searchTwoSum(arr, target - arr[i], i);
    }

    return count;
  };
 // [- 1, 0, 3], [-1, 0, 2]
  return (
    <PageTemplate
      problem={problemTexts.threeSumWithSmallerSum}
      input={'arr: [-1, 0, 2, 3], k = 3'}
      result={JSON.stringify(threeSumWithSmallerSum([-1, 0, 2, 3], 3))}
    />
  )
}

export default ThreeSumWithSmallerSum