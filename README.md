# Stripe JS Workshop

Welcome to the Stripe Workshop! Over the next few hours you’ll learn how to get started with accepting payments from customers anywhere in the world.

All you need for this workshop is a laptop, an IDE, and an internet connection. Feel free to ask as many questions as you want and have fun!

## Getting started

1. Open a [Stripe account](https://dashboard.stripe.com/register) if you don’t have one already.
2. Clone [this repository](https://github.com/thorsten-stripe/js-workshop).
3. Make sure you are using the latest stable version of Node, for this workshop we are targeting v12.2.0
   1. Tip: use [NVM](https://github.com/nvm-sh/nvm) for quick Node version switching/installing
4. Copy the environment variables file from the root of the repository: `cp .env.example .env`
5. Get your public and secret **test** keys from the [Dashboard](https://dashboard.stripe.com/account/apikeys) and put them in the newly created `.env` file.
6. Run `npm install`
7. Decide whether you want to build using React or a vanilla JavaScript boilerplate.

## Developing with nGrok

For this workshop we’ll be using [ngrok](https://ngrok.com/) to expose your local webs erver to the internet. This is especially useful when developing and testing webhooks.

## Vanilla JS

### Quickstart

Run `npm run vanilla` in your the command line from the project root.

This will start the loval web server and automatically open up an ngrok tunnel to the localhost.

**Note**: Although changes in server.js will automatically restart the server, for front end changes you’ll need to manually reload the page.

### Entrypoint

- Frontend: [`/frontend/vanilla/index.js`](https://github.com/thorsten-stripe/js-workshop/blob/master/frontend/vanilla/index.js)
- Server: [`/backend/server.js`](https://github.com/thorsten-stripe/js-workshop/blob/master/backend/server.js)

## React

### Quickstart

- Run `cd frontend/reactjs/`
- Run `npm install` to install the React frontend dependencies
- Run `npm run react` from the command line

This will bundle up your files and serve them over HTTPS locally. It will also automatically open up a browser pointing to your local server.

**Note**: When running this for the first time, you might get a security error. This is because we're running in `https` mode. Click “Advanced” and “Proceed” to load the page anyway.

### Entrypoint

- Frontend: [`/frontend/reactjs/src/App.js`](https://github.com/thorsten-stripe/js-workshop/blob/master/frontend/reactjs/src/App.js)
- Server: [`/backend/server.js`](https://github.com/thorsten-stripe/js-workshop/blob/master/backend/server.js)

## Documentation

Useful links that you’ll probably need throughout this workshop:

- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [Stripe.js and Elements](https://stripe.com/docs/stripe-js)
- [React Stripe Elements](https://github.com/stripe/react-stripe-elements)
- [PaymentIntents](https://stripe.com/docs/payments/payment-intents)
- [Webhooks](https://stripe.com/docs/webhooks)

### Testing

You can copy and paste the following test cards to trigger different scenarios:

| Test case               | card number      |
| ----------------------- | ---------------- |
| Default US card         | 4242424242424242 |
| Default SG card         | 4000007020000003 |
| 3D Secure auth required | 4000000000003063 |

See the [docs](https://stripe.com/docs/testing#cards) for a full list of test cards. Non-card payments will redirect to test pages.
