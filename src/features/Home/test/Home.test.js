import React from "react";
import "@testing-library/jest-dom";
import { waitFor, fireEvent, screen } from "@testing-library/react";

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

    listItems.forEach((card, index) => {
      expect(card.querySelector(".bookThumbnail").getAttribute("src")).toBe(
        books[index].imageUrl
      );
      expect(card.querySelector(".bookTitle").innerHTML).toBe(
        books[index].title
      );
      expect(card.querySelector(".bookDescription").innerHTML).toBe(
        books[index].description
      );
    });

    expect(queryByText("Show More (2 of 5)")).toBeInTheDocument();
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

    expect(queryByText("There are no books available.")).toBeInTheDocument();

    const listItems = queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });

  it("should display next set of books", async () => {
    const booksPage1 = [
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
      books: booksPage1,
      page: 1,
    });

    const { getByText, getAllByRole, queryByText } = render(<Home />);

    await waitFor(() => expect(getBooksStub).toHaveBeenCalledTimes(1));

    const booksPage2 = [
      {
        id: 3,
        title: "Any Questions for Ben?",
        description:
          "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
        author: "Marie-ann Colquit",
        pageCount: 469,
        isbn: "383281888-X",
        price: 45.32,
        imageUrl: "http://dummyimage.com/169x176.bmp/cc0000/ffffff",
      },
      {
        id: 4,
        title: "Yellow Submarine",
        description:
          "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        author: "Lyndsey Doick",
        pageCount: 342,
        isbn: "868875566-3",
        price: 77.79,
        imageUrl: "http://dummyimage.com/242x141.png/5fa2dd/ffffff",
      },
    ];

    getBooksStub.mockResolvedValue({
      totalCount: 5,
      books: booksPage2,
      page: 2,
    });

    const button = getByText("Show More (2 of 5)");
    fireEvent.click(button);

    await waitFor(() => expect(getBooksStub).toHaveBeenCalledTimes(2));

    const listItems = getAllByRole("listitem");
    expect(listItems.length).toBe(4);

    const books = booksPage1.concat(booksPage2);

    listItems.forEach((card, index) => {
      expect(card.querySelector(".bookThumbnail").getAttribute("src")).toBe(
        books[index].imageUrl
      );
      expect(card.querySelector(".bookTitle").innerHTML).toBe(
        books[index].title
      );
      expect(card.querySelector(".bookDescription").innerHTML).toBe(
        books[index].description
      );
    });

    expect(queryByText("Show More (4 of 5)")).toBeInTheDocument();
  });
});
