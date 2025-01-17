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
