import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const MergeSortedList = () => {
  // solution 1:
  // const mergeSortedList = (l1, l2) => {
  //   return l1.concat(l2).sort();
  // };

  // solution 2:
  const mergeSortedList = (l1, l2) => {
    let i = 0;
    let j = 0;
    let merged = [];
    while (i + j < l1.length + l2.length) {
      if (l1[i] < l2[j]) {
        merged.push(l1[i]);
      } else {
        merged.push(l2[j])
      }
      i++;
      j++;
      console.log('i', i)
    }
    console.log(merged)
  };

  return (
    <PageTemplate
      problem={problemTexts.mergeTwoSortedArrays}
      input={'[2, 1], [1, 2]'}
      result={JSON.stringify(mergeSortedList([2, 1], [1, 2]))}
    />
  )
}

export default MergeSortedList