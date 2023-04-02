import { ActionTypes } from "./constants";
import { Action } from "./types";

export const increment = (): Action => ({
  type: ActionTypes.INCREMENT,
});

export const decrement = (): Action => ({
  type: ActionTypes.DECREMENT,
});

export const reset = (): Action => ({
  type: ActionTypes.RESET,
});

export const increaseByAmount = (value: number): Action => ({
  type: ActionTypes.INCREASE_BY_AMOUNT,
  payload: value,
});
