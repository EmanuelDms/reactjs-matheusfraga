import React, { Component } from 'react'

export default class ManipulandoForms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: '',
        senha: '',
        sexo: 'selecione'
      }
    }
    this.dadosForm = this.dadosForm.bind(this)
  }

  dadosForm(e) {
    let form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({ form })
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
            value={this.state.form.email}
            onChange={this.dadosForm}
          />
          <br />
          <label htmlFor="senha">senha:</label>
          <input
            type="senha"
            name="senha"
            id="senha"
            placeholder="Senha..."
            value={this.state.form.senha}
            onChange={this.dadosForm}
          />
          <br />
          <label htmlFor="sexo">Sexo:</label>
          <select
            name="sexo"
            value={this.state.form.sexo}
            onChange={this.dadosForm}
          >
            <option value="selecione" disabled>
              Selecione
            </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </form>
        <div className="output">
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    )
  }
}
