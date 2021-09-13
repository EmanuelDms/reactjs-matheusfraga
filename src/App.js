import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Task from './components/Task';
import { MyLinkTitle, MyLink, MyHeader } from './styles/styles.js';

export default function App() {
  return (
    <Router>
      <MyHeader>
        <MyLinkTitle to="/">Seção 6: React Hooks</MyLinkTitle>
        <MyLink to="/useState">useState</MyLink>
      </MyHeader>

      <Switch>
        <Route path="/useState" component={Task} />
      </Switch>
    </Router>
  );
}
