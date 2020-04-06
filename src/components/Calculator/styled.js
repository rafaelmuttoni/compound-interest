import styled from 'styled-components'
import media from 'styled-media-query'

export const CalculatorWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e8e8eb;
  box-shadow: 8px 8px 0 rgba(0,0,0,.06);
  padding: 3rem 4rem 3rem 4rem;
  border-radius: 10%;

  ${media.lessThan('large')`
    padding: 1.4rem 1.6rem 1.4rem 1.6rem;
  `}
`

export const CalculatorForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CalculatorInput = styled.input`
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.25);
  height: 25px;
  margin-bottom: 0.8rem;
  margin-top: 0.4rem;
  font-size: 15px;
  width: 200px;
  border-radius: 3px;
  text-align: center;
`

export const CalculatorButton = styled.button`
	background-color: var(--button);
  color: var(--background);
  font-size: 1.2rem;
	border-radius:5px;
	display:inline-block;
	cursor:pointer;
  margin-top: 1rem;
	padding:12px 44px;
	text-decoration:none;

  &:active{
    position:relative;
	  top:1px;
  }
`

export const ResultSentence = styled.p`
  font-size: 2rem;
  padding-top: 3rem;

  ${media.lessThan('large')`
    font-size: 1.2rem;
  `}
`