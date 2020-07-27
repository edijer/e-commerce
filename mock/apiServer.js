/*
This uses json-server, but with the module approach: https://github.com/typicode/json-server#module
Downside: You can't pass the json-server command line options.
Instead, can override some defaults by passing a config object to jsonServer.defaults();
You have to check the source code to set some items.
Examples:
Validation/Customization: https://github.com/typicode/json-server/issues/266
Delay: https://github.com/typicode/json-server/issues/534
ID: https://github.com/typicode/json-server/issues/613#issuecomment-325393041
Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js
*/

/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const fs = require("fs");

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults({
  // Display json-server's built in homepage when json-server starts.
  static: "./node_modules/json-server/public",
});

// Set default middlewares (logger, static, cors and no-cache)
server.use("/api/v1", middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function (req, res, next) {
  setTimeout(next, 500);
});

// Declaring custom routes below. Add custom routes before JSON Server router

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.get("/api/v1/cart/", function (req, res, next) {
  /* HACKS. I transform the cart into {quantity, book} format
   */

  const groupCartByBooks = (books, cart) => {
    const key = "bookId";

    return cart.reduce((result, currentValue) => {
      const bookId = currentValue[key];

      const exists = result.find((i) => i.book.id === bookId);
      if (exists) {
        exists.quantity += 1;
      } else {
        const book = books.find((i) => i.id === bookId);
        result.push({ quantity: 1, book: book });
      }

      return result;
    }, []);
  };

  fs.readFile(path.join(__dirname, "db.json"), "utf8", (error, jsonString) => {
    if (error) {
      console.log("Error reading db.json", error);
    } else {
      const parsed = JSON.parse(jsonString);
      const grouped = groupCartByBooks(parsed.books, parsed.cart);
      res.status(200).jsonp(grouped);
    }
  });
});

// Use default router
server.use("/api/v1", router);

// Start server
const port = 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
