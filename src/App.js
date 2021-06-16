import React, { Component } from 'react'
import pathCronometro from './assets/cronometro.png'
import './css/style.css'

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <div className="item" id="cronometro">
          <img src={pathCronometro} />
          <a id="timer">0.0</a>
        </div>
        <div className="item" id="areaBtn">
          <a className="botao">INICIAR</a>
          <a className="botao">LIMPAR</a>
          <a className="botao">LIMPAR</a>
        </div>
      </div>
    )
  }
}
