import React, { Component } from 'react'
import BiscoitoImage from '../../assets/biscoito.png'
import '../../css/style.css'

export default class Biscoito extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textoFrase: ''
    }
    this.frases = [
      'Você cresce mais quando levanta os outros.',
      'Com chuva ou com sol o seu dia será maravilhoso.',
      'A cada nova manhã, nasce junto uma nova chance.',
      'Percebi que minha vida era uma vasta página vazia, e queu podia fazer o que quisesse com ela.',
      'Que gota por gota, nosso coração seja preenchido de paz e felicidade!'
    ]

    this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }

  quebraBiscoito() {
    let state = this.state
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = this.frases[numeroAleatorio]
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={BiscoitoImage} />
        <button onClick={this.quebraBiscoito}>Abrir biscoito</button>
        <h3 className="textoFrase">
          {this.state.textoFrase && `"${this.state.textoFrase}"`}
        </h3>
      </div>
    )
  }
}
