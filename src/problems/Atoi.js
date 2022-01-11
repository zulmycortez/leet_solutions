import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const Atoi = () => {

  // no leading zeros
  // if '-' then negative
  // 'my 909' => 0
  // '909 my' => 909

  const atoi = (s) => {
    let result = [];
    let isNeg = false;
    let i = 0;

    while (i < s.length) {

      if (s[i] === ' ') i++;
      if (s[i] === '-') {
        isNeg = true;
        i++;
      }
      if (s[i].match(/[a-z]/i) && result.length < 1) {
        return 0;
      }
      if (Number.isInteger(parseInt(s[i]))) {
        result.push(parseInt(s[i]));
      }
      i++;
    }
    result = parseInt(result.join(''));
    result = isNeg ? result * -1 : result;

    return result;
};

  return (
    <PageTemplate
      problem={problemTexts.atoi}
      input={'-00031'}
      result={JSON.stringify(atoi("  m 909"))}
    />
  )
}

export default Atoi