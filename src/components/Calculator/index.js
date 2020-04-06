import React, {createRef} from 'react'

import * as S from './styled'

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      valorInicial: '',
      aporte: '',
      taxa: '',
      prazo: '',
      resultado: '',
      hidden: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleTaxa = this.handleTaxa.bind(this)
    this.handleTaxaAno = this.handleTaxaAno.bind(this)
    this.handleMonthDate = this.handleMonthDate.bind(this)
    this.handleYearDate = this.handleYearDate.bind(this)
    this.handleSpecificDate = this.handleSpecificDate.bind(this)
  }

  taxaAnoInput = createRef()
  specificDateInput = createRef()
  yearDateInput = createRef()

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: parseInt(value)})
  }
  
  handleClick(e) {
    // PREVINE O SUBMIT
    e.preventDefault()
    // CALCULA O RESULTADO
    const {valorInicial, aporte, taxa, prazo} = this.state
    let montante = valorInicial
    for (let i = 0; i < prazo; i++) {
      let juros = montante * (taxa / 100)
      montante += juros
      montante += aporte
    }
    const montanteEmReais = montante.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})
    this.setState({resultado: montanteEmReais, hidden: false})
  }

  handleTaxa(e) {
    const taxa = e.target.value
    this.setState({taxa})
    const taxaAno = ((((1 + (taxa / 100)) ** 12) -1) * 100).toFixed(2)
    this.taxaAnoInput.current.value = taxaAno 
  }

  handleTaxaAno(e) {
    const taxaAno = e.target.value
    const taxaCalculada = ((Math.pow((taxaAno / 100 + 1), (1 / 12)) - 1) * 100).toFixed(2)
    this.setState({taxa: taxaCalculada})
  }

  handleMonthDate(e) {
    const months = e.target.value
    this.setState({prazo: months})
    const years = months / 12
    this.yearDateInput.current.value = years
    this.specificDateInput.current.value = null
  }

  handleYearDate(e) {
    const years = e.target.value
    const months = years * 12
    this.setState({prazo: months})
    this.specificDateInput.current.value = null
  }

  handleSpecificDate(e) {
    const specificDateParse = Date.parse(e.target.value)
    const currentDate = new Date()
    const currentDateParse = Date.parse(currentDate)
    const timeDifference = (specificDateParse - currentDateParse) / (1000 * 60 * 60 * 24 * 30)
    const timeDiffenceFixed = timeDifference.toFixed(2)
    this.setState({prazo: timeDiffenceFixed})
    const years = (timeDiffenceFixed / 12).toFixed(2)
    this.yearDateInput.current.value = years
  }

  render() {
    return (
      <S.CalculatorWrapper>
        <S.CalculatorForm>
          <label>Valor Inicial</label>
          <S.CalculatorInput 
            type="number" 
            placeHolder="Valor Inicial"
            title="Seu aporte inicial" 
            onChange={this.handleChange} 
            value={this.state.valorInicial} 
            name="valorInicial" />
          <label>Aporte Mensal</label> 
          <S.CalculatorInput 
            type="number" 
            placeHolder="Aporte Mensal"
            title="Valor que você investe todo mês" 
            onChange={this.handleChange} 
            value={this.state.aporte} 
            name="aporte" />
          <label>Taxa mensal</label>
          <S.CalculatorInput 
            type="number" 
            placeHolder="Taxa mensal"
            title="Rentabilidade mensal"
            value={this.state.taxa}
            onChange={this.handleTaxa}
            name="taxa" />
          <label>Taxa anual</label>
          <S.CalculatorInput 
            type="number" 
            placeHolder="Taxa anual"
            title="Rentabilidade anual" 
            onChange={this.handleTaxaAno}
            name="taxaAnual"
            ref={this.taxaAnoInput} />        
          <label>Prazo em meses</label>
          <S.CalculatorInput 
            type="number" 
            placeHolder="Prazo em meses"
            title="Prazo do investimento em meses" 
            onChange={this.handleMonthDate} 
            value={this.state.prazo} 
            name="prazo" />
          <label>Prazo em anos</label>
          <S.CalculatorInput 
            type="number" 
            placeHolder="Prazo em anos"
            title="Prazo do investimento em anos" 
            onChange={this.handleYearDate} 
            name="prazoAnual"
            ref={this.yearDateInput} />
          <label>Até data específica</label>
          <S.CalculatorInput 
            type="date"
            title="Prazo do investimento com data específica" 
            onChange={this.handleSpecificDate} 
            ref={this.specificDateInput}/>
          <S.CalculatorButton onClick={this.handleClick}>Calcular</S.CalculatorButton>   
        </S.CalculatorForm>
        {this.state.hidden ? null : <S.ResultSentence>Total acumulado: {this.state.resultado}</S.ResultSentence>}
      </S.CalculatorWrapper>
    )
  }
}

export default Calculator