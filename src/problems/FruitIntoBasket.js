import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const FruitIntoBasket = () => {

  const fruitIntoBasket = (fruits) => {
    let windowStart = 0;
    let map = {};
    let maxLength = 0;

    // sliding window from [windowStart, i]
    for (let i = 0; i < fruits.length; i++) {
      // initial case
      let rightFruit = fruits[i];
      if (!(rightFruit in map)) {
        map[rightFruit] = 0;
      }
      map[rightFruit] +=1;

      // shrink sliding window until we are left with '2' fruits
      while (Object.keys(map).length > 2) {
        let leftFruit = fruits[windowStart];
        // sliding by 1 on the left
        map[leftFruit] -= 1;
        // deleting left fruit
        if (map[leftFruit] === 0) {
          delete map[leftFruit];
        }
        // increasing right sliding window by 1
        windowStart += 1;
      }
      maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
  }

  return (
    <PageTemplate
      problem={problemTexts.fruitIntoBasket}
      input={'[A, B, C, A, C]'}
      result={JSON.stringify(fruitIntoBasket(['A', 'B', 'C', 'A', 'C']))}
    />
  )
}

export default FruitIntoBasket