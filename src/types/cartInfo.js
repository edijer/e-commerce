const cartBase = {
  items: [],
  rate: { tax: 0, shipping: 0 },
  get totalCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },
  get subTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.book.price * item.quantity,
      0
    );
  },
  get taxFee() {
    return this.subTotal * this.rate.tax;
  },
  get shippingFee() {
    return this.rate.shipping;
  },
  get grandTotal() {
    return this.subTotal + this.taxFee + this.shippingFee;
  },
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
