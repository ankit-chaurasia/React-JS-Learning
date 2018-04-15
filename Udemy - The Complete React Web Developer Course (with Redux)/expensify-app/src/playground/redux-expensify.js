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

// EDIT_EXPENSE Action
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_TEXT_FILTER Action
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT Action
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});

// SORT_BY_DATE Action
const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date"
});

// SET_START_DATE Action
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE Action
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
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
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
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
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
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

// const expenseOne = store.dispatch(
//   addExpense({ description: "rent", amount: 100 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "Coffee", amount: 200 })
// );

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());

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

const user = {
  name: "jan",
  age: 24
};

console.log({
  ...user,
  location: "Philadelphia",
  age: 27 // here we defined age property before user object to end result will be overridden the age value
});
