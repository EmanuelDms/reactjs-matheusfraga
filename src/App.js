import React, { Component } from 'react'

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.username}</h2>
        <h3>Cargo: {this.props.job}</h3>
        <h3>{this.props.age} anos</h3>
      </div>
    )
  }
}

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre
          username={this.props.nome}
          job={this.props.cargo}
          age={this.props.idade}
        />
        <Social href={this.props.link} />
        <hr />
      </div>
    )
  }
}

class Social extends Component {
  render() {
    return (
      <div>
        <a href={this.props.href}>Profile</a>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <h1>Conheça nossa equipe: </h1>
      <Equipe
        nome="Emanuel"
        cargo="Programador Frontend"
        idade={18}
        link="https://facebook.com"
      />
      <Equipe
        nome="Moisés"
        cargo="Programador Backend"
        idade={19}
        link="https://linkedin.com"
      />
    </div>
  )
}

export default App
