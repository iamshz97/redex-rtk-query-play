import { ActionTypes } from "./constants";
import { Action, CounterStateType } from "./types";

const initialState: CounterStateType = {
  count: 0,
};

const counterReducer = (
  state: CounterStateType = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionTypes.RESET:
      return {
        ...state,
        count: 0,
      };
    case ActionTypes.INCREASE_BY_AMOUNT:
      return {
        ...state,
        count: state.count + (action.payload || 0),
      };
    default:
      return state;
  }
};

export default counterReducer;
