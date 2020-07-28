import React from "react";
import "@testing-library/jest-dom";
import { waitFor, screen } from "@testing-library/react";

import { render } from "../../../test-util";
import * as bookApi from "../../../api/bookApi";
import Home from "../Home";

describe("<Home />", () => {
  let getBooksStub;

  afterEach(() => {
    getBooksStub.mockClear();
  });

  it("should display book list", async () => {
    const books = [
      {
        id: 1,
        title: "Porgy and Bess",
        description:
          "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
        author: "Elsy Seale",
        pageCount: 443,
        isbn: "789528077-5",
        price: 36.26,
        imageUrl: "http://dummyimage.com/233x191.png/dddddd/000000",
      },
      {
        id: 2,
        title: "King of Jazz",
        description:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        author: "Tally Achrameev",
        pageCount: 209,
        isbn: "653957594-7",
        price: 45.76,
        imageUrl: "http://dummyimage.com/143x143.png/cc0000/ffffff",
      },
    ];

    getBooksStub = jest.spyOn(bookApi, "getBooks");
    getBooksStub.mockResolvedValue({
      totalCount: 5,
      books: books,
      page: 1,
    });

    const { queryByText, getAllByRole } = render(<Home />);

    await waitFor(() => expect(getBooksStub).toHaveBeenCalledTimes(1));

    const text = queryByText("There are no books available.");
    expect(text).toBeNull();

    const listItems = getAllByRole("listitem");
    expect(listItems.length).toBe(2);

    expect(
      listItems[0].querySelector(".bookThumbnail").getAttribute("src")
    ).toBe(books[0].imageUrl);
    expect(listItems[0].querySelector(".bookTitle").innerHTML).toBe(
      books[0].title
    );
    expect(listItems[0].querySelector(".bookDescription").innerHTML).toBe(
      books[0].description
    );

    expect(
      listItems[1].querySelector(".bookThumbnail").getAttribute("src")
    ).toBe(books[1].imageUrl);
    expect(listItems[1].querySelector(".bookTitle").innerHTML).toBe(
      books[1].title
    );
    expect(listItems[1].querySelector(".bookDescription").innerHTML).toBe(
      books[1].description
    );

    const button = queryByText("Show More (2 of 5)");
    expect(button).not.toBeNull();
  });

  it("should display No books available message", async () => {
    const books = [];

    getBooksStub = jest.spyOn(bookApi, "getBooks");
    getBooksStub.mockResolvedValue({
      totalCount: 0,
      books: books,
      page: 1,
    });

    const { queryByText, queryAllByRole } = render(<Home limit={2} />);

    await waitFor(() => expect(getBooksStub).toHaveBeenCalledTimes(1));

    const text = queryByText("There are no books available.");
    expect(text).not.toBeNull();

    const listItems = queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });
});
