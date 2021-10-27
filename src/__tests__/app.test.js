import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

let getByText;
let getByTestId;
beforeEach(() => {
  const component = render(<Router><App /></Router>);
  getByText = component.getByText;
  getByTestId = component.getByTestId;
});

describe('Test user interaction with nav', () => {
  test('Check if it starts on the home page', () => {
    const homeContainer = getByTestId('home');
    expect(homeContainer).toBeInTheDocument();
  });
  test('If page changes to calculator when user clicks on link', () => {
    const calcLink = getByText('Calculator');
    fireEvent.click(calcLink);
    const calcContainer = getByTestId('calcPage');
    expect(calcContainer).toBeInTheDocument();
  });
  test('If page changes to quote when user clicks on link', () => {
    const quoteLink = getByText('Quote');
    fireEvent.click(quoteLink);
    const quoteContainer = getByTestId('quote');
    expect(quoteContainer).toBeInTheDocument();
  });
});
