import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const RemoveDuplicates = () => {

  // solution 1:
  // const removeDuplicates = (arr) => {
  //   let duplicatesRemoved = []

  //   arr.forEach((n) => {
  //     if (!duplicatesRemoved.includes(n)) {
  //       duplicatesRemoved.push(n);
  //     }
  //   })
  //   return duplicatesRemoved;
  // }

  // solution 2:
  // const removeDuplicates = (arr) => {
  //   let set = new Set();
  //   arr.forEach((num) => set.add(num));

  //   return Array.from(set);
  // }

  // solution 3:
  // T: O(n)
  // S: O(1)
  const removeDuplicates = arr => {
    let nonDuplicate = 1;
    let i = 0;

    while (i < arr.length) {
      if (arr[nonDuplicate - 1] !== arr[i]) {
        arr[nonDuplicate] = arr[i];
        nonDuplicate += 1;
      }
      i++;
    }
    return arr
  }

  return (
    <PageTemplate
      problem={problemTexts.removeDuplicates}
      input={'[2,2,3,5,3]'}
      result={JSON.stringify(removeDuplicates([2,2,3,5,3]))}
    />
  )
}

export default RemoveDuplicates