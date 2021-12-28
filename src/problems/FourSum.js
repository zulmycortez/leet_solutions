import { problemTexts } from '../constants/problemTexts'
import PageTemplate from '../components/PageTemplate/PageTemplate'

const FourSum = () => {

  const fourSum = (nums, target) => {
    // let i = 0;

    // while (i < nums.length) {

    // }
    
    // return unique
  }

  return (
    <PageTemplate
      problem={problemTexts.fourSum}
      input={'nums: [3,2,4] target: 6'}
      result={JSON.stringify(fourSum([1,0,-1,0,-2,2], 0))}
    />
  )
}

export default FourSum