import styled from "styled-components";

const ButtonDropdownStyle = styled.div`
  font-family: Georgia, serif;
  .__dropdown-parent {
    cursor: pointer;
    padding: 1em;
    &:hover {
      background-color: rgb(243, 246, 249);
      border-radius: .5em;
    }
  }

  .__dropdown-menu {
    background: white;
    padding: .5rem 1rem;
    margin-top: 1rem;
  }
`

export default ButtonDropdownStyle