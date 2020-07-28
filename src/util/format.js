import moment from "moment";

const locale = process.env.REACT_APP_LOCALE;
const currencyCode = process.env.REACT_APP_CURRENCY_CODE;

export const currency = (number) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(number);
};

export const longDate = (date) => {
  return moment(date, "YYYY-MM-DD").format("D MMMM, YYYY");
};
