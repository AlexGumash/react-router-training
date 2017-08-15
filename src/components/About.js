import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import FullList from "./FullList";
import Car from "./Car";

class About extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about" component={FullList} />
        <Route path="/about/:number" component={Car} />
      </Switch>
    );
  }
}

export default About;
