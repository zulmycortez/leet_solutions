import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const StringCompression = () => {
  const stringCompression = (string) => {
    let i = 0;
    let stringArray = [...string];
    let compressed = [];
    while (i < stringArray.length) {
      if (stringArray[i] !== stringArray[i-1]) {
        compressed.push(stringArray[i]);
      }
      i++;
    }
    return compressed.join('')
  };

  return (
    <PageTemplate
      problem={problemTexts.stringCompression}
      input={'aaabccaaaaaa'}
      result={JSON.stringify(stringCompression('aaabccaaaaaa'))}
    />
  )
}

export default StringCompression