const camelCaseToTitle = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    // first letter case
    if (i === 0) {
      let firstLetter = str[i].toUpperCase();
      result += firstLetter;
    } else if (str[i] === str[i].toUpperCase()) { // finding camel case
      result += ' ' + str[i];
    } else { // all other letters
      result += (str[i]);
    }
  }
  return result;
}

export default camelCaseToTitle
