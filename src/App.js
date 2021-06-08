import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: 'Emanuel',
      contador: 0
    }

    // muda o contexto global para contexto da função
    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar() {
    // referencia ao estado da classe
    let state = this.state

    // tamanho do nome
    let stateNomeSize = state.nome.length - 1
    // adiciona exclamação e remove invertida
    if (state.nome[stateNomeSize] === '¡')
      state.nome = state.nome.substring(0, stateNomeSize)
    else state.nome += '!'

    // soma ao contador
    state.contador += 1
    this.setState(state)
  }

  diminuir() {
    // referencia ao estado da classe
    let state = this.state

    // tamanho do nome
    let stateNomeSize = state.nome.length - 1
    // verificação se existe caractere diferente de '!'
    if (state.nome[stateNomeSize] === '!')
      state.nome = state.nome.substring(0, stateNomeSize)
    // adiciona exclamação invertida
    else state.nome += '¡'

    // subtrai ao contador
    state.contador = state.contador -= 1
    this.setState(state)
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <em>{this.state.nome}</em>
        <h2>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h2>
      </div>
    )
  }
}

export default App
