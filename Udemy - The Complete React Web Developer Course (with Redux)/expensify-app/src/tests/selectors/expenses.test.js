import momemt from 'moment';
import selectExpenses from '../../../src/selectors/expenses';

const expenses = [
  {
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'rent',
    note: '',
    amount: 109500,
    createdAt: momemt(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 4500,
    createdAt: momemt(0)
      .add(4, 'days')
      .valueOf()
  }
];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: momemt(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: momemt(0).add(2, 'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by date value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by amount value', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
