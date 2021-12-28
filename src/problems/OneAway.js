import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const OneAway = () => {
  // solution 1:
  // const oneAway = (str1, str2) => {
  //   let same = [];

  //   [...str1].forEach((str1char) => {
  //     [...str2].forEach((str2char) => {
  //       if (str1char === str2char) {
  //         same.push(str1char);
  //       }
  //       return same;
  //     })
  //   })

  //   if (same.length - [...str1].length === 1 || -1) {
  //     return true;
  //   }

  //   if (same.length - [...str2].length === 1 || -1) {
  //     return true;
  //   }
  //   return false;
  // }

  // solution 2:
  const oneAway = (str1, str2) => {
    let set = new Set();
    let i = 0;
    let j = 0;

    while (i < str1.length) {
      set.add([...str1][i]);
      i++;
    }

    while (j < str2.length) {
      if (set.has([...str2][j])) {
        set.delete([...str2][j]);
      } else {
        set.add([...str2][j])
      }
      
      j++;
    }
    
    return set.size === 1 || set.size === 0;
  }


  return (
    <PageTemplate
      problem={problemTexts.addTwoNumbers}
      input={'zulmy, zulmy1'}
      result={JSON.stringify(oneAway('zulmy', 'zulmy1'))}
    />
  )
}

export default OneAway