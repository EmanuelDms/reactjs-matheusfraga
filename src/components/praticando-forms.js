import React, { Component } from 'react'

export default class PraticandoForms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuarios: [],
      form: {
        username: '',
        emailAddress: '',
        password: ''
      }
    }
    // muda o contexto da função para a própria classe
    this.dadosForm = this.dadosForm.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }

  dadosForm(e) {
    let form = this.state.form
    form[e.target.id] = e.target.value
    this.setState({ form })
  }

  cadastrar(e) {
    let { username, emailAddress, password } = this.state.form
    alert(`Nome: ${username}\nEmail: ${emailAddress}\nPassword: ${password}`)
    // Logo em seguida deve ocorrer o push para o array usuarios
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.cadastrar}>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Type a username..."
            value={this.state.form.username}
            onChange={this.dadosForm}
          />
          <br />
          <label htmlFor="emailAddress">Email:</label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="Type your email..."
            value={this.state.form.emailAddress}
            onChange={this.dadosForm}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
            value={this.state.password}
            onChange={this.dadosForm}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
        {this.state.usuarios && <h1>{this.state.usuarios}</h1>}
      </div>
    )
  }
}
