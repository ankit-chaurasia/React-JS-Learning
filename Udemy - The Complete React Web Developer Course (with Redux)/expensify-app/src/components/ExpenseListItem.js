import React from "react";
const ExpenseListItem = ({ descripton, amount, createdAt }) => (
  <div>
    <h3>{descripton}</h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
