import React, { Component } from 'react';

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome
    };
    this.alterarUsuario = this.alterarUsuario.bind(this);
  }

  alterarUsuario(nome) {
    this.setState({ nome });
  }

  render() {
    return (
      <div>
        <h2>Bem vindo(a) {this.state.nome}</h2>
        <button onClick={() => this.alterarUsuario('Emanuel')}>Entrar</button>
        <button onClick={() => this.alterarUsuario('Visitante')}>Sair</button>
      </div>
    );
  }
}

export default Membro;
