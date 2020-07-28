const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/`;

export const getCart = async () => {
  try {
    const url = `${apiUrl}cart`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const items = await response.json();
    const totalCount = parseInt(response.headers.get("X-Total-Count"));
    return { totalCount, items };
  } catch (error) {
    throw error;
  }
};

export const addToCart = async (bookId) => {
  try {
    const url = `${apiUrl}cart`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: null,
        bookId: bookId,
      }),
    });
  } catch (error) {
    throw error;
  }
};

export const removeFromCart = async (bookId) => {
  try {
    const url = `${apiUrl}cart/${bookId}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    throw error;
  }
};
