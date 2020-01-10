import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
export const NavLink = styled.li`
  padding: 5;
`
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`
