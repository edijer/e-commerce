React test project

## Implementation Notes

- The link provided for the books data https://api.myjson.com/bins/j82l2 does not work so I mocked my own data together with images.
- I used redux-toolkit instead of redux saga middleware
- I didn't use Typescript, I'm still in the process of learning that.
- API calls are served by [json-server](https://github.com/typicode/json-server) (fake REST API)
- I didn't create the backend services because I wasn't familiar with the tech stack requirements - Java, H2 DB, etc..

## Unit/Integration Test

- I only added Home and CartInfo tests since the goal was UI/UX

## Not implemented

- Remove from cart
- Checkout
