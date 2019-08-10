import * as actionType from "./appActionTypes";

const initialState = {
  myCounter: 0,
  myText: "starting value"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DECREMENT_COUNTER:
      return { ...state, myCounter: state.myCounter - 1 };
    case actionType.INCREMENT_COUNTER:
      return { ...state, myCounter: state.myCounter + 1 };
    case actionType.SET_TEXT:
      return { ...state, myText: action.payload };
    default:
      return state;
  }
};

export { appReducer };
