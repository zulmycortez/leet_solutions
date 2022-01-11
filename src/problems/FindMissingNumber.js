import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const FindMissingNumber = () => {
  // T: O(n)
  // S: O(1)

  const findMissingNumber = (arr) => {
    let length = arr.length;
    let i = 0;
    let missing = 0;

    while (i < length) {
      let j = arr[i];
      if (arr[i] !== arr[j] && arr[i] < length) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        i++;
      }
    }

    for (i = 0; i < length; i++) {
      if (arr[i] !== i) {
        missing = i;
      }
    }

    return missing;
  }

  return (
    <PageTemplate
      problem={problemTexts.findMissingNumber}
      input={'[4, 0, 3, 1]'}
      result={JSON.stringify(findMissingNumber([4, 0, 3, 1]))}
    />
  )
}

export default FindMissingNumber