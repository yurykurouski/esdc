import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('subtracts the second number from the first', () => {
    expect(subtract(10, 4)).to.equal(6);
  });

  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).to.equal(21);
  });

  describe('divide', () => {
    it('divides the first number by the second', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('throws when dividing by zero', () => {
      expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });
  });
});
