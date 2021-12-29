import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const AreBinaryTreesIdentical = () => {
  class BinaryTreeNode {
    constructor(val, right, left) {
      this.val = val;
      this.right = right;
      this.left = left;
    }
  }

  const areIdentical = (root1, root2) => {
    if (!root1 && !root2) {
      return true;
    }

    if (root1 && root2) {
      const isDataIdentical = root1 === root2;
      const isLeftIdentical = areIdentical(root1.left, root2.left);
      const isRightIdentical = areIdentical(root1.right, root2.right);
      return isDataIdentical && isLeftIdentical && isRightIdentical;
    }

    return false;
  }

  const first = new BinaryTreeNode(100, 2, 1)
  const second = new BinaryTreeNode(100, 1, 1)

  return (
    <PageTemplate
      problem={problemTexts.palindromePermutation}
      input={`root1: ${JSON.stringify(first)}, root2: ${JSON.stringify(second)}`}
      result={JSON.stringify(areIdentical(first, second))}
    />
  )
}

export default AreBinaryTreesIdentical