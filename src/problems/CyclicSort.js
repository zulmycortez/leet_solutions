import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const CyclicSort = () => {
  // T: O(n)
  // S: O(1)
  const cyclicSort = (arr) => {
    let length = arr.length;
    let i = 0;

    while (i < length) {
      let j = arr[i] - 1;

      if (arr[i] !== arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        i++;
      }
    }
    return arr;
  }

  return (
    <PageTemplate
      problem={problemTexts.checkPermutation}
      input={'[2, 6, 4, 3, 1, 5]'}
      result={JSON.stringify(cyclicSort([2, 6, 4, 3, 1, 5]))}
    />
  )
}

export default CyclicSort