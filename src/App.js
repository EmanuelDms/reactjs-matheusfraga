import React, { Component } from 'react'
import pathCronometro from './assets/cronometro.png'
import './css/style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      buttonName: 'INICIAR'
    }

    this.timer = null
    this.startTimer = this.startTimer.bind(this)
    this.cleanTimer = this.cleanTimer.bind(this)
  }

  startTimer() {
    let state = this.state

    // Verifica se o tempo já foi iniciado
    if (this.timer === null) {
      // Inicia timer
      this.timer = setInterval(() => {
        state.numero += 0.1
        this.setState(state)
      }, 100)
      state.buttonName = 'PARAR'
    } else {
      clearInterval(this.timer)
      this.timer = null
      state.buttonName = 'INICIAR'
    }
    this.setState(state)
  }

  cleanTimer() {
    let state = this.state
    state.buttonName = 'INICIAR'
    clearInterval(this.timer)
    this.timer = null
    state.numero = 0
    this.setState(state)
  }

  render() {
    return (
      <div id="container">
        <div className="item" id="cronometro">
          <img src={pathCronometro} />
          <a id="timer">{this.state.numero.toFixed(1)}</a>
        </div>
        <div className="item" id="areaBtn">
          <a className="botao" onClick={this.startTimer}>
            {this.state.buttonName}
          </a>
          <a className="botao" onClick={this.cleanTimer}>
            LIMPAR
          </a>
        </div>
      </div>
    )
  }
}
