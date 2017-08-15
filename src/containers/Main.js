import { Switch, Route } from "react-router-dom";

import React from "react";

import About from "../components/About";
import Contacts from "../components/Contacts";
import Home from "../components/Home";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </main>
    );
  }
}

export default Main;
