Devstack for JS in the Browser
==============================

My stack for developing javascript client applications.

* mocha for testing
* babel for ES6
* WebPack for bundling
* npm for dependencies and build automation
* eslint for linting

Requires installed [node.js](https://docs.npmjs.com/getting-started/installing-node) with npm.

```
# setup
npm install

# run in browser (http://localhost:8080)
npm start

# run unit tests
npm test

# bundle (optimized, ./dist/bundle.js)
npm run build
```
