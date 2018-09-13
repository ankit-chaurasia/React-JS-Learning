import moment from 'moment';
import filterReducer from '../../../src/reducers/filters';

test('should set up default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set text filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SET_TEXT_FILTER', text: 'sample text' };
  const state = filterReducer(currentState, action);
  expect(state.text).toBe('sample text');
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE', sortBy: 'date' };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set startDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {
    type: 'SET_START_DATE',
    startDate: moment().startOf('month')
  };
  const state = filterReducer(currentState, action);
  expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set startDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {
    type: 'SET_END_DATE',
    endDate: moment().endOf('month')
  };
  const state = filterReducer(currentState, action);
  expect(state.endDate).toEqual(moment().endOf('month'));
});
