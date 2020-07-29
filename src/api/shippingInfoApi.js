const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/`;
const userId = process.env.REACT_APP_USER_ID;

export const getShippingInfo = async () => {
  try {
    const url = `${apiUrl}addresses?user=${userId}&type=shipping`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const address = await response.json();
    return { address: address.length ? address[0] : null };
  } catch (error) {
    throw error;
  }
};

export const addOrUpdateShippingInfo = async (address) => {
  try {
    // HACKS: Until I write the backend
    address.userId = userId;
    address.type = "shipping";

    const url = `${apiUrl}addresses/${address?.id || ""}`;
    const response = await fetch(url, {
      method: address.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ...address,
      }),
    });

    const updated = await response.json();
    return { updated };
  } catch (error) {
    throw error;
  }
};
