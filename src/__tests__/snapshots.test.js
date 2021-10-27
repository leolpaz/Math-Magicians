import renderer from 'react-test-renderer';
import QuotePage from '../single pages/Quote';
import HomePage from '../single pages/Home';
import CalcPage from '../single pages/CalculatorPage';

describe('Snapshot Testing', () => {
  test('Test Quote Page', () => {
    const tree1 = renderer.create(<QuotePage />).toJSON();
    expect(tree1).toMatchSnapshot();
  });

  test('Test Home Page', () => {
    const tree2 = renderer.create(<HomePage />).toJSON();
    expect(tree2).toMatchSnapshot();
  });

  test('Test Calc Page', () => {
    const tree3 = renderer.create(<CalcPage />).toJSON();
    expect(tree3).toMatchSnapshot();
  });
});
