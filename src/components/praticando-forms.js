import React, { Component } from 'react'

export default class PraticandoForms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
    // muda o contexto da função para a própria classe
    this.trocaNome = this.trocaNome.bind(this)
    this.trocaEmail = this.trocaEmail.bind(this)
    this.trocaSenha = this.trocaSenha.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }

  trocaNome() {
    return this.setState({ nome: document.getElementById('nome1').value })
  }

  trocaEmail() {
    return this.setState({ email: document.getElementById('email1').value })
  }

  trocaSenha() {
    return this.setState({ senha: document.getElementById('senha1').value })
  }

  cadastrar(e) {
    let { nome, email, senha } = this.state
    if (nome === '' || email === '' || senha === '') {
      this.setState({ error: 'Algum campo está faltando' })
    } else {
      alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`)
    }
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label htmlFor="nome1">Nome:&nbsp;</label>
          <input
            type="text"
            name="nome1"
            id="nome1"
            value={this.state.nome}
            onChange={this.trocaNome}
            placeholder="Insira um nome de usuário..."
          />
          <br />
          <label htmlFor="email1">Email:&nbsp;</label>
          <input
            type="email"
            name="email1"
            id="email1"
            value={this.state.email}
            onChange={this.trocaEmail}
            placeholder="Insira seu email..."
          />
          <br />
          <label htmlFor="senha1">Senha:&nbsp;</label>
          <input
            type="password"
            name="senha1"
            id="senha1"
            value={this.state.senha}
            onChange={this.trocaSenha}
            placeholder="Insira sua senha..."
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    )
  }
}
