import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const IsStringUnique = () => {

  // solution 1:
  // const isStringUnique = (str) => {
  //   let uniqueArray = [];
  //   let strArray = [...str.toLowerCase()];

  //   strArray.forEach(string => {
  //     if (!uniqueArray.includes(string)) {
  //       uniqueArray.push(string);
  //     }
  //     return uniqueArray;
  //   })
  //   return strArray.length === uniqueArray.length;
  // }

  // solution 2:
  const isStringUnique = (str) => {
    let set = new Set();
    let i = 0;
    let stringArray = [...str];

    while (i < stringArray.length) {
      if (set.has(stringArray[i])) {
        set.delete(stringArray[i])
      }
      set.add(stringArray[i])
      i++;
    }

    return set.size === str.length;
  }

  
  return (
    <PageTemplate
      problem={problemTexts.addTwoNumbers}
      input={'Zulmy'}
      result={JSON.stringify(isStringUnique('Zulmy'))}
    />
  )
}

export default IsStringUnique