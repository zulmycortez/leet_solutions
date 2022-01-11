import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const Permutations = () => {
  // Time: O(n! x n)
  // Space: O(n! x n)
  const permute = (nums) => {
    const result = [];

    const dfs = (i, nums) => {
      // base case
      if (i === nums.length) {
        result.push([...nums]);
        return;
      }

      // recursive case
      for(let j = i; j < nums.length; j++) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        dfs(i + 1, nums);
        // [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }

    dfs(0, nums);
    return result;
  }

  return (
    <PageTemplate
      problem={problemTexts.permutations}
      input={'[0,1]'}
      result={JSON.stringify(permute([0,1]))}
    />
  )
}

export default Permutations