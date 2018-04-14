import { createStore } from "redux";

const store = createStore((state = { count: 0 }) => {
  return state;
});

// getState() returns current state object
console.log(store.getState());
