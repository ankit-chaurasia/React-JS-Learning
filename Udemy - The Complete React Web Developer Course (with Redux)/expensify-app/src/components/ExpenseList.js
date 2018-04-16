import React from "react";
import { connect } from "react-redux"; // Connects your component to Redux store
const ExpenseList = props => (
  <div>
    <h1>Expense list</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);
const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseList);
