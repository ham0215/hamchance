# Hamchance.com

This is ham's portfolio.

[![Build](https://github.com/ham0215/hamchance/actions/workflows/build.yml/badge.svg)](https://github.com/ham0215/hamchance/actions/workflows/build.yml)
[![ESLint](https://github.com/ham0215/hamchance/actions/workflows/eslint.yml/badge.svg)](https://github.com/ham0215/hamchance/actions/workflows/eslint.yml)
[![Prettier](https://github.com/ham0215/hamchance/actions/workflows/prettier.yml/badge.svg)](https://github.com/ham0215/hamchance/actions/workflows/prettier.yml)
[![Test](https://github.com/ham0215/hamchance/actions/workflows/test.yml/badge.svg)](https://github.com/ham0215/hamchance/actions/workflows/test.yml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# CI

`yarn build`, `yarn lint`, `yarn test:ci`, `yarn prettier` is running on GitHub Actions.

# Certificate for localhost

```
$ brew install mkcert
$ mkcert -install
$ mkcert localhost
```

# Storybook

```
# run in local.
yarn storybook
```

## Deploy
Push to the main branch of github and it will be deployed to GitHub Pages.

https://ham0215.github.io/hamchance/

# Deploy

Push to the main branch of github and it will be deployed to Vercel.

Open [https://hamchance.com](https://hamchance.com) to view it in the browser.

See dashboard. https://vercel.com/dashboard

# External services used on this site

## Vercel

Vercel is a cloud platform for static sites.

https://vercel.com
