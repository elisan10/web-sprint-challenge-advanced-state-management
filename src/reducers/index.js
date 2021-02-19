import {
  SMURF_FETCH_IS_LOADING,
  SMURF_FETCH_SUCCESSFUL,
  SMURF_FETCH_FAILED,
  SMURF_POST_SUCCESSFUL,
  SMURF_POST_FAILED,
  SET_FORM_ERROR_MESSAGE,
} from "./../actions/index";

export const initialState = {
  smurfs: [
    {
      name: "",
      position: "",
      nickname: "",
      description: "",
    },
  ],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCH_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SMURF_FETCH_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case SMURF_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case SMURF_POST_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case SMURF_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case SET_FORM_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
