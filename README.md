This is ham's sandbox.

![Run lint](https://github.com/ham0215/hamchance/workflows/Run%20lint/badge.svg)
![CodeQL](https://github.com/ham0215/hamchance/workflows/CodeQL/badge.svg)

# Blogs

## How to write a blog

Place the blog written in markdown in `public/mds/`.

Run the script to create the index.

```console
node updateBlogIndex.js
```

Commit all files.

# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
yarn global upgrade create-react-app
create-react-app hamchance --typescript
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs eslint, tsc, stylelint, prettier.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# deploy

Push to the master branch of github and it will be deployed to zeit now.

Open [https://hamchance.com](https://hamchance.com) to view it in the browser.

Use vercel(zeit) now. https://vercel.com/dashboard

# External services used on this site

## Vercel

​Vercel is a cloud platform for static sites.

https://vercel.com/dashboard

## Firebase

Use authentication and firestore with firebase.

https://console.firebase.google.com/?hl=ja

### Firestore data structure

https://github.com/ham0215/hamchance/wiki/Firestore-data-structure

## Google Analytics

Google Analytics lets you measure sites and applications.

https://analytics.google.com/analytics/web/

## Amazon Affiliate

Affiliate service provided by Amazon.

https://affiliate.amazon.co.jp/home

## Google Adsense(unused)

Service that delivers advertisements to the site.

https://www.google.co.jp/adsense/start/
