import React, { Component } from "react";
import { connect } from "react-redux";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import { fetchSmurfs } from "./actions/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfs,
//     isLoading: state.isLoading,
//     errorMessage: state.errorMessage,
//   };
// };

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
export default connect(null, { fetchSmurfs })(App);
