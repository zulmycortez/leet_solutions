const PageTemplate = ({
  result,
  problem,
  input
}) => {
  return (
    <div>
      <p>Problem: {problem}</p>
      <p>Input: {input}</p>
      <p>Result: {result}</p>
    </div>
  )
}

export default PageTemplate