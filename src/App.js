import React, { Component } from "react";
import { connect } from "react-redux";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import { fetchSmurfs } from "./actions/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Don't forget you are in a class Component, so you are going to do things differently
class App extends Component {
  //2. Call the fetchSmurfs action when the component first loads.
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

//Task List:
//1. Connect the fetchSmurfs actions to the App component.

// First argument is null because I only need the fetchSmurfs action
export default connect(null, { fetchSmurfs })(App);
