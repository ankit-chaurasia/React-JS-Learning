import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../../src/components/Header';

test('should render Header component', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
