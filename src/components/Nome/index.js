import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user';

const Nome = () => {
  const { nomeAluno, setNomeAluno } = useContext(UserContext);

  const nomeArray = nomeAluno.split(' ');
  const switchedNome = `${nomeArray[1]} ${nomeArray[0]}`;

  return (
    <>
      {nomeAluno}!<br />
      <button onClick={() => setNomeAluno(switchedNome)}>
        Trocar nome
      </button>
    </>
  )
}

export default Nome
