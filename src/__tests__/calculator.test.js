import React from 'react';
import Calculator from '../components/Calculator';
import { render, fireEvent } from '@testing-library/react';

let getByTestId;
let getByText;
beforeEach(() => {
  const component = render(<Calculator />);
  getByTestId = component.getByTestId;
  getByText = component.getByText;
});

test('Testing Calculators button', () => {
  
});
