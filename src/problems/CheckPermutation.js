import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const CheckPermutation = () => {
  // solution 1:
  // const checkPermutation = (str1, str2) => {
  //   if (str1.length !== str2.length) {
  //     return false;
  //   }

  //   const str1sorted = [...str1].sort();
  //   const str2sorted = [...str2].sort();

  //   return str1sorted.toString === str2sorted.toString;
  // }

  // solution 2:
  const checkPermutation = (str1, str2) => {
    let ht = new Set();

    for (let i = 0; i < str1.length; i++) {
      ht.add(str1[i]);
      for (let j = 0; j < str2.length; j++) {
        if (ht.has(str2[j])) {
          ht.delete(str2[j]);
        }
      }
    }
    
    if (str2.length % 2 === 0 || ht.size === 0) {
      return true;
    }
    return false;
  }

  return (
    <PageTemplate
      problem={problemTexts.checkPermutation}
      input={'hih, ihh'}
      result={JSON.stringify(checkPermutation('hih', 'ihh'))}
    />
  )
}

export default CheckPermutation