import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calc-container">
        <div className="screen">
          0
        </div>
        <div className="btns-container">
          <button type="button" className="top-btn">AC</button>
          <button type="button" className="top-btn">+/-</button>
          <button type="button" className="top-btn">%</button>
          <button type="button" className="side-btn">+</button>
          <button type="button" className="num-btn">7</button>
          <button type="button" className="num-btn">8</button>
          <button type="button" className="num-btn">9</button>
          <button type="button" className="side-btn">x</button>
          <button type="button" className="num-btn">4</button>
          <button type="button" className="num-btn">5</button>
          <button type="button" className="num-btn">6</button>
          <button type="button" className="side-btn">-</button>
          <button type="button" className="num-btn">1</button>
          <button type="button" className="num-btn">2</button>
          <button type="button" className="num-btn">3</button>
          <button type="button" className="side-btn">+</button>
          <button type="button" className="zero-btn">0</button>
          <button type="button" className="num-btn">.</button>
          <button type="button" className="side-btn">=</button>
        </div>
      </div>
    );
  }
}
