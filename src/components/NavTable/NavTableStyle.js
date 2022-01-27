import styled from 'styled-components'

const NavTableStyle = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  min-width: 20%;
  max-width: 20%;
  li {
    padding: .5em;
    display: inherit;
  }
  a {
    display: flex;
  }
  .count {
    margin-top: 1em;
  }
  .__checkbox-open-all {
    padding: 1em;
  }
`


export default NavTableStyle