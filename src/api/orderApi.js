const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/`;

export const getOrders = async (page, limit) => {
  try {
    const url = `${apiUrl}orders?_page=${page}&_limit=${limit}&_sort=date&_order=desc`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const items = await response.json();
    const totalCount = parseInt(response.headers.get("X-Total-Count"));
    return { totalCount, items, page };
  } catch (error) {
    throw error;
  }
};
