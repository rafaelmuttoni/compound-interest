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
      resultado: ''
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
    this.setState({resultado: montanteEmReais})
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
          Valor Inicial
          <input 
            type="number" 
            placeHolder="Valor Inicial" 
            onChange={this.handleChange} 
            value={this.state.valorInicial} 
            name="valorInicial" />
          Aporte Mensal   
          <input 
            type="number" 
            placeHolder="Aporte Mensal" 
            onChange={this.handleChange} 
            value={this.state.aporte} 
            name="aporte" />
          Taxa mensal
          <input 
            type="number" 
            placeHolder="Taxa mensal"
            value={this.state.taxa}
            onChange={this.handleTaxa}
            name="taxa" />
          Taxa anual
          <input 
            type="number" 
            placeHolder="Taxa anual" 
            onChange={this.handleTaxaAno}
            name="taxaAnual"
            ref={this.taxaAnoInput} />
          Prazo em meses
          <input 
            type="number" 
            placeHolder="Prazo em meses" 
            onChange={this.handleMonthDate} 
            value={this.state.prazo} 
            name="prazo" />
          Prazo em anos
          <input 
            type="number" 
            placeHolder="Prazo em anos" 
            onChange={this.handleYearDate} 
            name="prazoAnual"
            ref={this.yearDateInput} />
          Até data específica
          <input 
            type="date" 
            onChange={this.handleSpecificDate} 
            ref={this.specificDateInput}/>
          <button onClick={this.handleClick}>Calcular</button>   
        </S.CalculatorForm>
        <S.ResultSentence>Parabéns, você terá {this.state.resultado}</S.ResultSentence>
      </S.CalculatorWrapper>
    )
  }
}

export default Calculator