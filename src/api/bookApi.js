export const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/`;

export const getBooks = async (page, limit) => {
  try {
    const url = `${apiUrl}books?_page=${page}&_limit=${limit}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const books = await response.json();
    const totalCount = parseInt(response.headers.get("X-Total-Count"));
    return { totalCount, books, page };
  } catch (error) {
    throw error;
  }
};
