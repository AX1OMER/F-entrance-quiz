import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('should render App', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('app');

  expect(app).not.toBeEmptyDOMElement();
});
