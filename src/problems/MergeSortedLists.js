import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const MergeSortedList = () => {
  // solution 1:
  // const mergeSortedList = (l1, l2) => {
  //   return l1.concat(l2).sort();
  // };

  // solution 2:
  const mergeSortedList = (a, b) => {
    let result = [];
      while(a.length || b.length) {
        if(typeof a[0] === 'undefined') {
          result.push(b[0]);
          b.splice(0,1);
        } else if(a[0] > b[0]){
          result.push(b[0]);
          b.splice(0,1);
        } else {
          result.push(a[0]);
          a.splice(0,1);
        }
    }
    return result;
  };

  return (
    <PageTemplate
      problem={problemTexts.mergeTwoSortedArrays}
      input={'[2, 1], [1, 2]'}
      result={JSON.stringify(mergeSortedList([1, 3], [1, 2]))}
    />
  )
}

export default MergeSortedList