import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const AddTwoNumbers = () => {

  // solution 1
  // const addTwoNumbers = (l1, l2) => {
  //   let l1reverseSum = []
  //   let l2reverseSum = []
  //   let final = []
  //   for (let i = l1.length - 1; i >= 0; i--) {
  //     l1reverseSum.push(l1[i])
  //   }
  //   for (let j = l2.length - 1; j >= 0; j--) {
  //     l2reverseSum.push(l2[j])
  //   }

  //   const sumOfReversedList = parseInt(l1reverseSum.join('')) + parseInt(l2reverseSum.join(''))
  //   const sumOfReversedListToString = sumOfReversedList.toString()

  //   for (let k = sumOfReversedListToString.length - 1; k >= 0; k--) {
  //     final.push(parseInt(sumOfReversedListToString[k]))
  //   }
  //   return final
  // }

  // solution 2
  const addTwoNumbers = (l1, l2) => {
    let firstPointer = l1.length - 1;
    let secondPointer = l2.length - 1;
    let firstSum = '';
    let secondSum = '';
    let finalSum = 0;

    while (0 <= firstPointer) {
      firstSum += l1[firstPointer];
      firstPointer--;
    }

    while (0 <= secondPointer) {
      secondSum += l2[secondPointer];
      secondPointer--;
    }
    
    finalSum = parseInt(firstSum) + parseInt(secondSum);
    finalSum = Array.from(String(finalSum), Number);

    return finalSum
  }

  return (
    <PageTemplate
      problem={problemTexts.addTwoNumbers}
      input={'l1 = [2,4,3], l2 = [5,6,4]'}
      result={JSON.stringify(addTwoNumbers([2,4,3], [5,6,4]))}
    />
  )
}

export default AddTwoNumbers