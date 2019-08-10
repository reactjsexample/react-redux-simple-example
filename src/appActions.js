import * as actionType from "./appActionTypes";

export const decrementCounter = () => ({
  type: actionType.DECREMENT_COUNTER
});

export const incrementCounter = () => ({
  type: actionType.INCREMENT_COUNTER
});

export const setText = data => ({
  type: actionType.SET_TEXT,
  payload: data
});
