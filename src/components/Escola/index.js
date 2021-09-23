import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user';

const Escola = () => {
  const { qtdAlunos } = useContext(UserContext);

  return (
    <>
      <h1>Escola</h1>
      <h2>Quantidade de alunos: {qtdAlunos} </h2>
      <hr />
    </>
  )
}

export default Escola
