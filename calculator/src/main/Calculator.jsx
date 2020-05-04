import React, { Component } from 'react'

import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
  displayValue: '0', // valor exibido no display da calculadora
  clearDisplay: false, // se precisa ou não limpar o display
  operation: null, // armazena a operação
  values: [0, 0], // valores digitados (antes e depois da operação)
  current: 0 // verifica se está manipulando o valor de índice 0 ou 1
}

export default class Calculator extends Component {
  state = {...initialState}

  constructor(props) {
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }

  // Zera a memória da calculadora e restaura o estado inicial.
  clearMemory() {
    this.setState({ ...initialState })
    console.log('Memória zerada')
  }

  // Executa operação escolhida.
  setOperation(operation) {
    console.log(`A operação escolhida foi ${operation}`)
  }

  // Adiciona um dígito.
  addDigit(n) {
    // console.log(`Digitado: ${n}`)
    if (n === '.' && this.state.displayValue.includes('.')) return

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay // limpa se o dígito for 0 ou a variável for true
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    // Pega o índice do valor que está alterando, converte para float, clona, altera o valor atual e altera o estado.
    if (n !== '.') {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values })
      console.log(values)
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />

        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperation} operation />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation />
        <Button label="0" click={this.addDigit} double />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation />
      </div>
    )
  }
}
