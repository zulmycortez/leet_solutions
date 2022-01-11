import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const SquaringASortedArray = () => {
  // solution 1
  // T: O(n x logn)
  // S: O(, x logn)
  // const squaringASortedArray = (arr) => {
  //   // [-2, -1, 0, 2, 3]
  //   // [4, 1, 0, 4, 9]
  //   // [0, 1, 4, 4, 9]
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i] * arr[i]);
  //   }
  //   return result.sort();
  // }

  
  // solution 2
  // T: O(n)
  // S: O(n)
  const squaringASortedArray = (arr) => {
    const length = arr.length;
    let squares = Array(length).fill(0);
    let highestSquareIdx = length - 1;
    let left = 0;
    let right = length - 1;

    while (left <= right) {
      let leftSquare = arr[left] * arr[left];
      let rightSquare = arr[right] * arr[right];
      if (leftSquare > rightSquare) {
        squares[highestSquareIdx] = leftSquare;
        left += 1;
      } else {
        squares[highestSquareIdx] = rightSquare;
        right -= 1;
      }
      highestSquareIdx -= 1;
    }
    return squares;
}
  
    

  return (
    <PageTemplate
      problem={problemTexts.squaringASortedArray}
      input={'[-2, -1, 0, 2, 3]'}
      result={JSON.stringify(squaringASortedArray([-2, -1, 0, 2, 3]))}
    />
  )
}

export default SquaringASortedArray