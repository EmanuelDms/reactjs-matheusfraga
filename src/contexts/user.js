import { useState , createContext} from 'react';

export const UserContext = createContext({});

const UserProvider = ({children}) => {
  const [nomeAluno, setNomeAluno] = useState('Emanuel Duarte');
  const [qtdAlunos, setQtdAlunos] = useState(85);
  

  return(
    <UserContext.Provider value={{ nomeAluno, setNomeAluno, qtdAlunos, setQtdAlunos }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;