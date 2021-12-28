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
  const removeDuplicates = (arr) => {
    let set = new Set();
    arr.forEach((num) => set.add(num));

    return Array.from(set);
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