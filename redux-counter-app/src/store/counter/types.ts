import { ActionTypes } from "./constants";

export interface CounterStateType {
  count: number;
}

export interface Action {
  type: ActionTypes;
  payload?: number;
}
