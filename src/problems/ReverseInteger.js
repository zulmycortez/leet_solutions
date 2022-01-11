import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const ReverseInteger = () => {
  // time complexity of n x 1 = O(n)
  // space complexity of O(n)
  const reverseInteger = (num) => {
    // 1. Loop through the number as an array with each single digit represeting an item. (may require some array manipulation)
    // 2. Starting from the end of the list, insert each item as a string to new variable
    // 3. Consider case when the number starts with '-'
    let reversedInteger = '';
    let numAsString = num.toString();
    let numStringArray = [...numAsString];
    let i = numStringArray.length -1;

    if (!Number.isInteger(num)) {
      return 'Please type in an integer';
    }
    while (i >= 0) {
      reversedInteger += numStringArray[i];
      i--;
    }

    if (num < 0) {
      return parseInt(reversedInteger) * -1;
    } else {
      return parseInt(reversedInteger);
    }
  }

  return (
    <PageTemplate
      problem={problemTexts.reverseInteger}
      input={'-321'}
      result={JSON.stringify(reverseInteger(-321))}
    />
  )
}

export default ReverseInteger