// addition.test.js
import { addition } from "../addition/addition";
describe('addition function', () => {
  test('adds two numbers', () => {
    expect(addition(2, 3)).toBe(5);
  });
});
