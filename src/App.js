import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: ['Teste', 'Memórias Póstumas de Brás Cubas'],
      favoriteAuthors: ['Test', 'Machado de Assis'],
      currentUser: 'Emanuel',
      gamesAll: ['God Of War', 'Uncharted', 'Super Mario World'],
      gamesMostPopular: ['Battlefield', 'Cyberpunk', 'Among Us']
    }
  }

  render() {
    return (
      <div>
        <em>
          <strong>App</strong>
        </em>
        <p>Welcome, {this.state.currentUser}!</p>
        <List title="Todos os jogos" list={this.state.gamesAll} />
        <List
          title="Os jogos mais populares"
          list={this.state.gamesMostPopular}
        />
        <List title="Livros" list={this.state.books} />
        <List title="Autores favoritos" list={this.state.favoriteAuthors} />
        <Rules />
      </div>
    )
  }
}

const List = ({ title, list }) => {
  return (
    <div>
      <em>{title}</em>
      <ul>
        {list.map((item) => {
          return <li key={item.toString()}>{item}</li>
        })}
      </ul>
    </div>
  )
}

const Rules = () => {
  return (
    <div>
      <em>Rules</em>
      <p>The rules are simple and unchanging:</p>
      <ol>
        <li>You don&apos;t talk about the rules.</li>
        <li>You must follow the first rule.</li>
      </ol>
    </div>
  )
}

export default App
