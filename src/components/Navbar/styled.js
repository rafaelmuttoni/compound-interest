import styled from 'styled-components'
import media from 'styled-media-query'

export const NavbarWrapper = styled.nav`
  ${media.greaterThan('large')`
    top: 0;
    width: 100vw;
    height: 5rem;
  `}

  ${media.lessThan('large')`
    bottom: 0;
    width: 100vw;
    height: 3.5rem;
  `}

  position: fixed;
  background: var(--navBackground);
  transition: width 200ms ease;
  z-index: 10;
`

export const IconsUl = styled.ul`


  width: 100%;
  justify-content: center;

  list-style: none;
  
  margin: 0;
  display: flex;
  
  padding: 0;
  align-items: center;
  height: 100%;
`

export const IconsLi = styled.li`
  margin: 0 0.5rem 0 0.5rem;
  height: 4rem;
  width: 4rem;
  transition: all 0.2s;

  ${media.lessThan('large')`
      justify-content: center;
      height: 3.5rem;
      width: 3.5rem;
      
  `}

  &:hover {
    opacity: 0.5;
  }

  &:active {
    position: relative;
	  top: 3px;
  }
`

