import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const MedianTwoSorted = () => {
  const medianTwoSorted = (a1, a2) => {
    let merged = a1.concat(a2).sort()
    let median = 0;
    // median: "middle" number in the array
    // if array is [x1, x2, x3] then x2
    // if array is [x1, x2, x3, x4] then x2.5

    if (merged.length % 2 === 0) {
      let middle = Math.floor(merged.length / 2);
      median = (merged[middle-1] + merged[middle]) / 2;      
    } else {
      let middle = Math.ceil(merged.length / 2) - 1;
      median = merged[middle];
    }

    return median;
  }

  return (
    <PageTemplate
      problem={problemTexts.medianTwoSorted}
      input={'[1, 3, 4, 5, 6, 7], [2]'}
      result={JSON.stringify(medianTwoSorted([1, 3, 4, 5, 6, 7], [2]))}
    />
  )
}

export default MedianTwoSorted