import operate from '../logic/operate';

describe('Test operate.js file', () => {
  test('Test plus operation', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });
  test('Test minus operation', () => {
    expect(operate('1', '2', '-')).toBe('-1');
  });
  test('Test multiplication', () => {
    expect(operate('1', '2', 'x')).toBe('2');
  });
  test('Test division', () => {
    expect(operate('1', '2', '÷')).toBe('0.5');
  });
});
