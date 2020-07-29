import { createCartInfo } from "../cartInfo";

describe("cartInfo", () => {
  it("should calculate cart totals", () => {
    const rate = { tax: 0.1, shipping: 10 };
    const cartItems = [
      {
        id: 1,
        quantity: 2,
        book: {
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
      },
      {
        id: 2,
        quantity: 1,
        book: {
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
      },
    ];

    const cartInfo = createCartInfo(cartItems, rate);

    expect(cartInfo.totalCount).toBe(3);
    expect(cartInfo.subTotal).toBe(118.28);
    expect(cartInfo.taxFee).toBe(11.83);
    expect(cartInfo.shippingFee).toBe(10.0);
    expect(cartInfo.grandTotal).toBe(140.11);
  });
});
