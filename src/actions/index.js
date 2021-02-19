import axios from "axios";

export const SMURF_FETCH_IS_LOADING = "SMURF_FETCH_IS_LOADING";
export const SMURF_FETCH_SUCCESSFUL = "SMURF_FETCH_SUCCESSFUL";
export const SMURF_FETCH_FAILED = "SMURF_FETCH_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: SMURF_FETCH_IS_LOADING });
    console.log("I am here");
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: SMURF_FETCH_SUCCESSFUL, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: SMURF_FETCH_FAILED, payload: err });
      });
  };
};

// setError and addSmurf standard actions

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    axios
      .post("http:/localhost:3333/smurfs", newSmurf)
      .then((res) => {
        dispatch({ type: ADD_SMURF, payload: res });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR_MESSAGE, payload: err });
      });
  };
};

//3. Add a standard action that allows us to set the value of the error message slice of state.

// export const setError = (error) => {
//   return { type: SET_ERROR_MESSAGE, payload: error };
// };
