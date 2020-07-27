const locale = process.env.REACT_APP_LOCALE;
const currencyCode = process.env.REACT_APP_CURRENCY_CODE;

export const formatCurrency = (number) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(number);
};
