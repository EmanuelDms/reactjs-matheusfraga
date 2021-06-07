import React from 'react'

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.username}</h2>
      <h3>Cargo: {props.job}</h3>
      <h3>Idade: {props.age}</h3>
    </div>
  )
}

const Equipe = (props) => {
  return (
    <div>
      <Sobre username={props.nome} job={props.cargo} age={props.idade} />
      <Social fb={props.facebook} />
      <hr />
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <a>Linkedin</a>
      <a>Youtube</a>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe
        nome="Lucas"
        cargo="Programador"
        idade="29"
        facebook="https://google.com"
      />
      <Equipe
        nome="Emanuel"
        cargo="Frontend Developer"
        idade="18"
        facebook="https://facebook.com"
      />
    </div>
  )
}

export default App
