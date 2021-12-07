import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const RemoveDuplicates = () => {

  const removeDuplicates = (arr) => {
    let duplicatesRemoved = []

    arr.forEach((n) => {
      if (!duplicatesRemoved.includes(n)) {
        duplicatesRemoved.push(n)
      }
    })
    return duplicatesRemoved;
  }

  return (
    <PageTemplate
      problem={problemTexts.addTwoNumbers}
      input={'input: [2,2,3]'}
      result={JSON.stringify(removeDuplicates([2,2,3,5,3]))}
    />
  )
}

export default RemoveDuplicates