import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  width: 50vw;
  height: 50vh;
`

export const CalculatorForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 20px;
`

export const ResultSentence = styled.p`
  font-size: 2rem;
  padding-top: 1rem;
`