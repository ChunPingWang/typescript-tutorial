function applyDiscount(total: number, rate: number = 0.9): number {
  return Math.round(total * rate);
}
applyDiscount("340");
applyDiscount(340, 0.9, true);
