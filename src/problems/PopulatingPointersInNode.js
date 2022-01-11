import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const PopulatingPointersInNode = () => {

  class Node {
    constructor(val, left, right, next) {
      this.val = val;
      this.right = right;
      this.left = left;
      this.next = next;
    }
  }
  const populatingPointersInNode = (root) => {
    console.log(new Node(root));
    let tree = [root]
    while (tree.length) {
      const next = [];
      root.forEach((node) => {
        if (node && node.left) {
          node.left.next = node.right
          console.log('node')
          const last = next[next.length-1];
          if (last) {
            last.next = node.left;
          }
          next.push(node.left, node.right)
        }
      })
      tree = next
    }
    return root
  }

  return (
    <PageTemplate
      problem={problemTexts.palindromePermutation}
      input={'htt'}
      result={JSON.stringify(populatingPointersInNode([1,2,3,4,5,6,7]))}
    />
  )
}

export default PopulatingPointersInNode