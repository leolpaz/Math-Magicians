import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;
let getByText;
beforeEach(() => {
  const component = render(<Calculator />);
  getByTestId = component.getByTestId;
  getByText = component.getByText;
});

describe('Tests related to the calculator in the DOM', () => {
  test('Check if the calculator is rendered', () => {
    const calculator = getByTestId('container');

    expect(calculator).toBeInTheDocument();
  });
  test('Check if the screens starts at 0', () => {
    const screen = getByTestId('screen');
    expect(screen.textContent).toBe('0');
  });
  test('Check if the screen changes when a button is pressed', () => {
    const screen = getByTestId('screen');
    const seven = getByText('7');
    fireEvent.click(seven);

    expect(screen.textContent).toBe('7');
  });
  test('Check if the screen shows the result after operation', () => {
    const screen = getByTestId('screen');
    const seven = getByText('7');
    const sumOp = getByText('+');
    const equalSign = getByText('=');
    fireEvent.click(seven);
    fireEvent.click(sumOp);
    fireEvent.click(seven);
    fireEvent.click(equalSign);

    expect(screen.textContent).toBe('14');
  });
});
