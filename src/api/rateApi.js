export const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/`;
const countryCode = process.env.REACT_APP_COUNTRY_CODE;

export const getRate = async () => {
  try {
    const url = `${apiUrl}rates?countryCode=${countryCode}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const items = await response.json();
    const rate = items?.length > 0 ? items[0] : null;
    return { rate: rate };
  } catch (error) {
    throw error;
  }
};
