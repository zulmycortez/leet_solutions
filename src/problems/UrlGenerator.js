import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const UrlGenerator = () => {

  // solution #1

  // const urlGenerator = (str) => {
  //   let url = [];

  //   [...str].forEach((letter) => {
  //     if (letter === ' ') {
  //       return url.push('%20');
  //     }
  //     url.push(letter);
  //   })

  //   return url.join('');
  // }

  // solution #2

  // const urlGenerator = (str) => {
  //   return str.replaceAll(' ', '%20')
  // }

  // solution #3 

  const urlGenerator = (str) => {
    let i = 0;
    let stringArray = [...str];
    while (i < stringArray.length) {
      if (stringArray[i] === ' ') {
        stringArray[i] = '%20';
      }
      i++
    }

    return stringArray.join('')
  }

  return (
    <PageTemplate
      problem={problemTexts.urlGenerator}
      input={'H t'}
      result={JSON.stringify(urlGenerator('H t'))}
    />
  )
}

export default UrlGenerator