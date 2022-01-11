import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const ZigzagConversion = () => {
  // time complexity of n x 1 = O(n)
  // space complexity of O(n)

  const zigzagConversion = (s, numRows) => {
    if (numRows === 1 || s.length < numRows) {
      return s;
    }
    let rows = [];
    let currentRow = 0;
    let reverse = false;
    let result = "";
  
    for (let i = 0; i < numRows; i++) {
      rows[i] = [];
    }
  
    for (let i = 0; i < s.length; i++) {
      rows[currentRow].push(s[i]);
      console.log(currentRow)
      console.log(s[i])
      console.log(reverse)
      if (reverse === false) {
        currentRow++;
      } else {
        currentRow--;
      }
  
      if (currentRow === numRows - 1 || currentRow === 0) {
        reverse = !reverse;
      }
    }
  
    console.log('rows', rows)
    rows.forEach((row) => {
      result += row.join("");
    });
  
    return result;
  }

  return (
    <PageTemplate
      problem={problemTexts.zigzagConversion}
      input={'str: PAYPALISHIRING, n = 3'}
      result={JSON.stringify(zigzagConversion('PAYPALISHIRING', 3))}
    />
  )
}

export default ZigzagConversion