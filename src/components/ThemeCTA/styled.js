import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  ${media.lessThan('large')`
    display: none;
  `}
`

export const Paragraph = styled.p`
  font-size: 1.1rem;
`