import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

// getState() returns current state object
console.log(store.getState());

// Action - than an object that gets sent to the store
// dispatch() method allows us to send off Action object
// whenever you create an action using dispatch method createStore() function gets called
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "DECREMENT"
});
store.dispatch({
  type: "RESET"
});

console.log(store.getState());
