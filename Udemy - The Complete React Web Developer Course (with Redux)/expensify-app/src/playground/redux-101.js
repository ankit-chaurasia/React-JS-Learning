import { createStore } from "redux";
// Action generators: functions that returns action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 10 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count = 100 } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

// Reducers
// 1. Reducers are pure functions i.e output is purely determined by the input
// 2. Never change state or action
const countReducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : -1;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducers());

store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 200 }));
