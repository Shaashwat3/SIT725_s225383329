function calculateDiscount(price, discountPercentage) {
  if (typeof price !== 'number' || typeof discountPercentage !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Discount percentage must be between 0 and 100');
  }
  return price - (price * (discountPercentage / 100));
}

module.exports = { calculateDiscount };
