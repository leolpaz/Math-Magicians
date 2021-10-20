import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  onClickHandler = (event) => {
    this.setState((prev) => calculate(prev, event.target.name));
  };

  render() {
    let screen;
    const { total, next } = this.state;
    if (next === null && total === null) {
      screen = <div className="screen">0</div>;
    } else if (next === null) {
      screen = <div className="screen">{total}</div>;
    } else {
      screen = <div className="screen">{next}</div>;
    }

    return (
      <div className="calc-container">
        {screen}
        <div className="btns-container">
          <button onClick={this.onClickHandler} type="button" name="AC" className="top-btn">AC</button>
          <button onClick={this.onClickHandler} type="button" name="+/-" className="top-btn">+/-</button>
          <button onClick={this.onClickHandler} type="button" name="%" className="top-btn">%</button>
          <button onClick={this.onClickHandler} type="button" name="÷" className="side-btn">÷</button>
          <button onClick={this.onClickHandler} type="button" name="7" className="num-btn">7</button>
          <button onClick={this.onClickHandler} type="button" name="8" className="num-btn">8</button>
          <button onClick={this.onClickHandler} type="button" name="9" className="num-btn">9</button>
          <button onClick={this.onClickHandler} type="button" name="x" className="side-btn">x</button>
          <button onClick={this.onClickHandler} type="button" name="4" className="num-btn">4</button>
          <button onClick={this.onClickHandler} type="button" name="5" className="num-btn">5</button>
          <button onClick={this.onClickHandler} type="button" name="6" className="num-btn">6</button>
          <button onClick={this.onClickHandler} type="button" name="-" className="side-btn">-</button>
          <button onClick={this.onClickHandler} type="button" name="1" className="num-btn">1</button>
          <button onClick={this.onClickHandler} type="button" name="2" className="num-btn">2</button>
          <button onClick={this.onClickHandler} type="button" name="3" className="num-btn">3</button>
          <button onClick={this.onClickHandler} type="button" name="+" className="side-btn">+</button>
          <button onClick={this.onClickHandler} type="button" name="0" className="zero-btn">0</button>
          <button onClick={this.onClickHandler} type="button" name="." className="num-btn">.</button>
          <button onClick={this.onClickHandler} type="button" name="=" className="side-btn">=</button>
        </div>
      </div>
    );
  }
}
