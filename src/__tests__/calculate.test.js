import calculate from '../logic/calculate';
import '@testing-library/jest-dom/extend-expect';

let obj = {};
beforeEach(() => {
  obj = {
    total: null,
    next: null,
    operation: null,
  };
});

describe('Tests for calculate.js', () => {
  test('If sending a button input updates the next attribute', () => {
    obj = calculate(obj, '0');

    expect(obj.next).toBe('0');
  });

  test('If I send the second button the total and next should be updated', () => {
    obj = calculate(obj, '0');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');

    expect(obj.total).toBe('0');
    expect(obj.operation).toBe('+');
    expect(obj.next).toBe('3');
  });

  test('Expect AC to return everything to null', () => {
    obj = calculate(obj, '0');

    expect(obj.next).toBe('0');

    obj = calculate(obj, 'AC');

    expect(obj.total).toBe(null);
    expect(obj.next).toBe(null);
  });

  test('Expect +/- to invert the number from positive to negative and vice-versa', () => {
    obj = calculate(obj, '3');

    expect(obj.next).toBe('3');

    obj = calculate(obj, '+/-');

    expect(obj.next).toBe('-3');
  });

  test('Expect % operation to return the mod of the numbers', () => {
    obj = calculate(obj, '30');

    obj = calculate(obj, '%');

    obj = calculate(obj, '4');

    obj = calculate(obj, '=');

    expect(obj.total).toBe('2');
  });

  test('Expect ÷ operation to return the division of the numbers', () => {
    obj = calculate(obj, '30');

    obj = calculate(obj, '÷');

    obj = calculate(obj, '6');

    obj = calculate(obj, '=');

    expect(obj.total).toBe('5');
  });

  test('Expect x operation to return the product of the numbers', () => {
    obj = calculate(obj, '30');

    obj = calculate(obj, 'x');

    obj = calculate(obj, '4');

    obj = calculate(obj, '=');

    expect(obj.total).toBe('120');
  });

  test('Expect - operation to return the subtraction of the numbers', () => {
    obj = calculate(obj, '30');

    obj = calculate(obj, '-');

    obj = calculate(obj, '4');

    obj = calculate(obj, '=');

    expect(obj.total).toBe('26');
  });

  test('Expect + operation to return the sum of the numbers', () => {
    obj = calculate(obj, '30');

    obj = calculate(obj, '+');

    obj = calculate(obj, '4');

    obj = calculate(obj, '=');

    expect(obj.total).toBe('34');
  });

  test('Expect . to add a to create a fraction', () => {
    obj = calculate(obj, '3');

    obj = calculate(obj, '.');

    obj = calculate(obj, '4');

    expect(obj.next).toBe('3.4');
  });

  test('Expect . to create 0.x if no previous number input', () => {
    obj = calculate(obj, '.');

    obj = calculate(obj, '4');

    expect(obj.next).toBe('0.4');
  });

  test('Expect operations to be chainable', () => {
    obj = calculate(obj, '30');

    obj = calculate(obj, '+');

    obj = calculate(obj, '4');

    obj = calculate(obj, 'x');

    expect(obj.total).toBe('34');

    obj = calculate(obj, '2');

    obj = calculate(obj, '-');

    expect(obj.total).toBe('68');

    obj = calculate(obj, '50');

    obj = calculate(obj, '=');

    expect(obj.total).toBe('18');
  });
});
