## 00 Setup
npm init
npm install -D parcel 
npm install react
npm install react-dom
npm install 


### Build
Dev: npx parcel index.html
Prod: npx parcel build index.html

## 01 Basics

### Build through script(Modify scrpt in package.json)
"scripts": {
    "start": "parcel index.html",
    "build": "parcle build index.html",
  }


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Containers
 *      - Restaurant Cards
 *          - Name of the Restaurant
 *          - Image
 *          - Ratings
 *          - Cousine
 *          - Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contacts
 */


# Routing 
npm install react-router-dom

Client side routing
Server side routing

# React Lifecycle method diagram
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Redux ToolKit

- Install the Redux @reduxjs/toolkit and react-redux
- Build the store
- Connect the store to the app
- Create the slice (Cart Slice)
- Create Dispatch Action
- Read/Subscribe to the data through Selector


# React Testing Library
npm install -D @testing-library/react
npm install -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env

## Add below configuration to babel.config.js at root level

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Configure parcel config file .parcelrc to disable default babel transpilation

```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

## Configure Jest 
npx jest --init

## Install jsdom library
npm install --save-dev jest-environment-jsdom

## Writing Test Cases
- Create __tests__ directory and write test cases inside it OR
- create test cases with file name ending with .test.js or .test.ts or .spec.js or .spec.ts
- Examples : Header.test.js or Header.test.ts or Header.spec.js or Header.spec.ts

## install babel/preset-react, to make jsx work in the test cases
npm i -D @babel/preset-react

## Install @testing-library/jest-dom
npm i -D @testing-library/jest-dom


