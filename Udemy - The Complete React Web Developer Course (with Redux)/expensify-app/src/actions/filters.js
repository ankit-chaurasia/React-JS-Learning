// SET_TEXT_FILTER Action
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT Action
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});

// SORT_BY_DATE Action
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date"
});

// SET_START_DATE Action
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE Action
export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});
