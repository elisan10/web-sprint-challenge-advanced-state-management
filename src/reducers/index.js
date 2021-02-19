import {
  SMURF_FETCH_IS_LOADING,
  SMURF_FETCH_SUCCESSFUL,
  SMURF_FETCH_FAILED,
  ADD_SMURF,
  SET_ERROR_MESSAGE,
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
  console.log("This is state", state);
  switch (action.type) {
    case SMURF_FETCH_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SMURF_FETCH_SUCCESSFUL:
      console.log(action.payload);
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
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name,
            nickname: action.payload.nickname,
            position: action.payload.position,
            description: action.payload.description,
          },
        ],
      };
    case SET_ERROR_MESSAGE:
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
