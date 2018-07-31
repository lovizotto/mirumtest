import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Profile, Form } from "./containers";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Profile} />
            <Route path="/form" component={Form} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
