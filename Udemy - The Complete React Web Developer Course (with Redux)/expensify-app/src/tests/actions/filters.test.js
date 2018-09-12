import momemt from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../../src/actions/filters';

test('should set up setTextFilter action object with provided vaue', () => {
  const action = setTextFilter('sample text');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'sample text'
  });
});

test('should set up setTextFilter action object with default vaue', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should set up sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});

test('should set up sortByDate action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});

test('should set up setStartDate action object', () => {
  const action = setStartDate(momemt(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: momemt(0)
  });
});

test('should set up setEndDate action object', () => {
  const action = setEndDate(momemt(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: momemt(0)
  });
});
