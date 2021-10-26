import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// import components
import NavBar from './components/Nav';
import CalcPage from './single pages/CalculatorPage';
import HomePage from './single pages/Home';
import QuotePage from './single pages/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/calculator">
            <CalcPage />
          </Route>
          <Route path="/quote">
            <QuotePage />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
