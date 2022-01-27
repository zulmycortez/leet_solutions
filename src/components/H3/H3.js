import H3Style from "./H3Style";

const H3 = ({ children, style }) => {
  return (
    <H3Style style={style}>
      {children}
    </H3Style>
  )
}

export default H3
