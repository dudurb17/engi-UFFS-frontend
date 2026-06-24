import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color:  #fff;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  align-items: center;
  display: flex;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  &.active {
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
    font-weight: 500;
    box-shadow: inset 3px 0 0 rgba(255, 0, 0, 0.75);;
  }
`
