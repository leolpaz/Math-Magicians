import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [logicN, setLogicN] = useState({ total: null, next: null });

  const onClickHandler = (event) => {
    setLogicN((prev) => calculate(prev, event.target.name));
  };

  const showScreen = () => {
    const { total, next } = logicN;
    if (next === null && total === null) {
      return <div className="screen">0</div>;
    } if (next === null) {
      return <div className="screen">{total}</div>;
    }
    return <div className="screen">{next}</div>;
  };

  return (
    <div className="calc-container">
      {showScreen()}
      <div className="btns-container">
        <button onClick={onClickHandler} type="button" name="AC" className="top-btn">AC</button>
        <button onClick={onClickHandler} type="button" name="+/-" className="top-btn">+/-</button>
        <button onClick={onClickHandler} type="button" name="%" className="top-btn">%</button>
        <button onClick={onClickHandler} type="button" name="÷" className="side-btn">÷</button>
        <button onClick={onClickHandler} type="button" name="7" className="num-btn">7</button>
        <button onClick={onClickHandler} type="button" name="8" className="num-btn">8</button>
        <button onClick={onClickHandler} type="button" name="9" className="num-btn">9</button>
        <button onClick={onClickHandler} type="button" name="x" className="side-btn">x</button>
        <button onClick={onClickHandler} type="button" name="4" className="num-btn">4</button>
        <button onClick={onClickHandler} type="button" name="5" className="num-btn">5</button>
        <button onClick={onClickHandler} type="button" name="6" className="num-btn">6</button>
        <button onClick={onClickHandler} type="button" name="-" className="side-btn">-</button>
        <button onClick={onClickHandler} type="button" name="1" className="num-btn">1</button>
        <button onClick={onClickHandler} type="button" name="2" className="num-btn">2</button>
        <button onClick={onClickHandler} type="button" name="3" className="num-btn">3</button>
        <button onClick={onClickHandler} type="button" name="+" className="side-btn">+</button>
        <button onClick={onClickHandler} type="button" name="0" className="zero-btn">0</button>
        <button onClick={onClickHandler} type="button" name="." className="num-btn">.</button>
        <button onClick={onClickHandler} type="button" name="=" className="side-btn">=</button>
      </div>
    </div>
  );
};

export default Calculator;
