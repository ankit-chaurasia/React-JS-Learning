import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_Expense Action generator
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt
  }
});

// Remove expense Action generator
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// Expenses Reduer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // state.push(action.expense); push changes the original array
      //   return state.concat(action.expense);
      //   ES6 spread operator: does not change the original array
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// Filters Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 200 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const demoState = {
  expenses: [
    {
      id: "fxvfddfb",
      description: "sample description",
      note: "This was the final payment for that address.",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
