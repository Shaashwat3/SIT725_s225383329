const { expect } = require('chai');
const { calculateDiscount } = require('../utils/math');

describe('Calculation Function Tests', () => {
  it('should calculate the discounted price correctly (Valid Behavior)', () => {
    const result = calculateDiscount(100, 20);
    expect(result).to.equal(80);
  });

  it('should throw an error for negative price (Invalid/Error Behavior)', () => {
    expect(() => calculateDiscount(-10, 10)).to.throw('Price cannot be negative');
  });

  it('should throw an error for invalid discount percentage (Invalid/Error Behavior)', () => {
    expect(() => calculateDiscount(100, 150)).to.throw('Discount percentage must be between 0 and 100');
  });

  it('should handle edge case of zero price and zero discount (Edge Case)', () => {
    const result = calculateDiscount(0, 0);
    expect(result).to.equal(0);
  });

  it('should handle edge case of 100% discount (Edge Case)', () => {
    const result = calculateDiscount(50, 100);
    expect(result).to.equal(0);
  });
});
