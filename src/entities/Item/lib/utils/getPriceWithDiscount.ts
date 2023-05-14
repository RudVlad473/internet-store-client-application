export function getPriceWithDiscount(price: number, discountPercentage: number): number {
  return price - (price * discountPercentage) / 100
}
