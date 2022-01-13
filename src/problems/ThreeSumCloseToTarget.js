import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const ThreeSumCloseToTarget = () => {
  // T: O(nlogn + n^2  ~~ n^2)
  // S: O(n)
  const threeSumCloseToTarget = (arr, targetSum) => {
    arr.sort((a, b) => a - b);
    let smallestDifference = Infinity;
  
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1;
      let right = arr.length - 1;
  
      while (left < right) {
        const targetDifference = targetSum - arr[i] - arr[left] - arr[right];
        if (targetDifference === 0) {
          return targetSum;
        }
        
        let isTargetLessThanMin = Math.abs(targetDifference) < Math.abs(smallestDifference);
        let isTargetEqualToMin = Math.abs(targetDifference) === Math.abs(smallestDifference);
        let isTargetGreaterThanMin = (targetDifference) > (smallestDifference);
  
        if (isTargetLessThanMin || (isTargetEqualToMin && isTargetGreaterThanMin)) {
          smallestDifference = targetDifference;
        }
        if (targetDifference > 0) {
          left += 1;
        } else {
          right -= 1;
        }
      }
    }
    return targetSum - smallestDifference;
  };

  return (
    <PageTemplate
      problem={problemTexts.threeSumCloseToTarget}
      input={'arr: [-2,0,1,2], k = 2'}
      result={JSON.stringify(threeSumCloseToTarget([-2,0,1,2], 2))}
    />
  )
}

export default ThreeSumCloseToTarget