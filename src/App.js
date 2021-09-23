
import Aluno from './components/Aluno';
import Escola from './components/Escola';
import UserProvider from './contexts/user';

const App = () => {  
  return (
    <UserProvider>
      <Escola />
      <Aluno />
    </UserProvider>);
}

export default App;
