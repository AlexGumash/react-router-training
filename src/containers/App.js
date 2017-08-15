import React, { Component } from "react";

import Header from "../components/Header";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
