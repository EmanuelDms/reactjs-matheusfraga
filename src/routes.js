import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contato from "./pages/Contato";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Error from "./pages/Error";

const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contato" exact component={Contato} />
          <Route path="/sobre" exact component={Sobre} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
