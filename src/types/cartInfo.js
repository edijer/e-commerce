const cartBase = {
  items: [],
  rate: { tax: 0, shipping: 0 },
  get totalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },
  get subTotal() {
    const value = this.items.reduce(
      (sum, item) => sum + item.book.price * item.quantity,
      0
    );

    return round2dp(value);
  },
  get taxFee() {
    return round2dp(this.subTotal * this.rate.tax);
  },
  get shippingFee() {
    return round2dp(this.rate.shipping);
  },
  get grandTotal() {
    return round2dp(this.subTotal + this.taxFee + this.shippingFee);
  },
};

const round2dp = (number) => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
};

export const createCartInfo = (cartItems, rate) => {
  const value = {
    __proto__: cartBase,
    items: cartItems?.length ? cartItems : [],
  };

  if (rate) {
    value.rate = rate;
  }

  return value;
};
