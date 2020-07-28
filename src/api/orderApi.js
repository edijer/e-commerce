const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/`;

export const getOrders = async (page, limit) => {
  try {
    const url = `${apiUrl}orders?_embed=books&_page=${page}&_limit=${limit}`;
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
