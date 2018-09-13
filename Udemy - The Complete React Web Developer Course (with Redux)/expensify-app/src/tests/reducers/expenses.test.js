import expensesReducer from '../../../src/reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const newExpense = {
    id: '100',
    description: 'new item',
    note: '',
    amount: 1561651,
    createdAt: 0
  };
  const action = { type: 'ADD_EXPENSE', expense: newExpense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-165' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense by id', () => {
  const amount = 1234;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
  const amount = 1234;
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'id not found',
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
