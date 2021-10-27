import React from 'react';
import Calculator from '../components/Calculator';

const CalcPage = () => (
  <div data-testid="calcPage" className="calc-page-container">
    <h2>Let`&apos;`s do some math!</h2>
    <Calculator />
  </div>
);

export default CalcPage;
