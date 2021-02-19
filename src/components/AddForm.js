import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf, setError } from "./../actions/index";

const AddForm = (props) => {
  // deconstruct props to see what you are working with
  const { errorMessage, addSmurf, setError } = props;

  // state is equal to the newSmurf that you will pass in the addSmurf action
  const [state, setState] = useState({
    name: "",
    position: "",
    nickname: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
    if (state.name === "" || state.position === "" || state.nickname === "") {
      setError("Name, position and nickname fields are required.");
      // errorMessage = "Name, position and nickname fields are required.";   <--- You don't need this
    } else {
      //4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
      return addSmurf(state);
    }
  };

  // const errorMessage = "";  <--- You don't need this variable

  return (
    <section>
      <h2>Add Smurf</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.name}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.position}
            name="position"
            id="position"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <br />
          <input
            onChange={handleChange}
            value={state.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            onChange={handleChange}
            value={state.description}
            name="description"
            id="description"
          />
        </div>
        {/* 2. Replace all instances of the errorMessage static variable with your error message state value. */}
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button>Submit Smurf</button>
      </form>
    </section>
  );
};

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.

//You only need to return the errorMessage from state
const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps, { addSmurf, setError })(AddForm);
