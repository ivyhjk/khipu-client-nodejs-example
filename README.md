# Khipu client NodeJS example

The goal of this bundle is provide examples for [Khipu client NodeJS](https://github.com/ivyhjk/khipu-client-nodejs)

## Installation

Clone this repository:

```
git clone https://github.com/ivyhjk/khipu-client-nodejs-example.git
```

Install dependencies:

```
npm install
```

Generate a new `.env`

```
touch .env
```

Add the necessary environment variables into generated `.env` file:

```
KHIPU_RECEIVER_ID=XXX
KHIPU_SECRET=YYY
```

Change `XXX` by your receiver identifier and `YYY` by your secret.

## Running

All examples exists in `src/index.ts`, you can edit this file and run your own
methods.

To run the default example (`getBanks`):

```
npm run example
```
