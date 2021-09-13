import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Task from './components/Task';
import { MyLinkTitle, MyLink, MyHeader, Paper } from './styles/styles.js';
import { Container } from '@material-ui/core';

export default function App() {
  return (
    <Router>
      <MyHeader>
        <MyLinkTitle to="/">Seção 6: React Hooks</MyLinkTitle>
        <MyLink to="/useState">useState</MyLink>
      </MyHeader>

      <Switch>
        <Container maxWidth="lg">
          <Paper elevation={3}>
            <Route path="/useState" component={Task} />
            <Route path="/" exact component={Home} />
          </Paper>
        </Container>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Acesse o(s) link(s) acima para navegar entre as aulas!</h2>;
}
