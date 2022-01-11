import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const GenerateParentheses = () => {
  // Time: O(n! x n)
  // Space: O(n! x n)
  const generatePerentheses = (n) => {
    // global result
    const result = [];

    const dfs = (i, n, slate, openCount, closeCount) => {
      // backtracking case
      if (closeCount > openCount) return;
      if (openCount > n) return;
      // base case
      if (i === n * 2) {
        result.push(slate.join(''));
        return;
      }

      // open parenthesis
      slate.push('(')
      dfs(i + 1, n, slate, openCount + 1, closeCount);
      slate.pop();

      // close parenthesis
      slate.push(')')
      dfs(i + 1, n, slate, openCount, closeCount + 1);
      slate.pop();
    }

    dfs(0, n, [], 0, 0);
    return result;
  }

  return (
    <PageTemplate
      problem={problemTexts.generatePerentheses}
      input={'3'}
      result={JSON.stringify(generatePerentheses(3))}
    />
  )
}

export default GenerateParentheses