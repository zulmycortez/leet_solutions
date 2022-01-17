import PageTemplateStyle from './PageTemplateStyle'

const PageTemplate = ({
  result,
  problem,
  input
}) => {
  return (
    <PageTemplateStyle>
      <p>Problem: {problem}</p>
      <p>Input: {input}</p>
      <p>Result: {result}</p>
    </PageTemplateStyle>
  )
}

export default PageTemplate