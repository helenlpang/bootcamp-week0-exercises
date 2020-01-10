import React from 'react'
import { NavLinks, StyledLink, NavLink } from './styles'


const Menu = () => (
  
  <NavLinks>

        <NavLink>
          <StyledLink to="/home">Home</StyledLink>
        </NavLink>
  

        <NavLink>
          <StyledLink to="/todos">Todos</StyledLink>
        </NavLink>
  
 
  </NavLinks>
)
export default Menu


