import React, { Component } from 'react'

export default class ManipulandoForms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      sexo: 'selecione'
    }
    this.trocaEmail = this.trocaEmail.bind(this)
    this.trocaSenha = this.trocaSenha.bind(this)
    this.trocaSexo = this.trocaSexo.bind(this)
  }
  trocaEmail(e) {
    this.setState({ email: e.target.value })
  }
  trocaSenha(e) {
    this.setState({ password: e.target.value })
  }
  trocaSexo(e) {
    this.setState({ sexo: e.target.value })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.trocaEmail}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            value={this.state.password}
            onChange={this.trocaSenha}
          />
          <br />
          <label htmlFor="sexo">Sexo:</label>
          <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
            <option value="selecione" disabled>
              Selecione
            </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </form>
        <div className="output">
          <h3>{this.state.email}</h3>
          <h3>{this.state.password}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    )
  }
}
