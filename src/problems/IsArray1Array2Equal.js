import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const IsArray1Array2Equal = () => {

  // sort() using insertion sort which has time complexity of a constant
  // Time complexity = O(1)
  // Memory complexity = O(n) or O(1)?
  const isArray1Array2Equal = (a1, a2) => {
    let a1Sorted = a1.sort();
    let a2Sorted = a2.sort();

    return JSON.stringify(a1Sorted) === JSON.stringify(a2Sorted)
  }

  return (
    <PageTemplate
      problem={problemTexts.isArray1Array2Equal}
      input={'[1, 2, 3, 4], [1, 4, 3, 2]'}
      result={JSON.stringify(isArray1Array2Equal([1, 2, 3, 4], [1, 4, 3, 2]))}
    />
  )
}

export default IsArray1Array2Equal