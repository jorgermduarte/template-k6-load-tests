# K6 - Webpack
A example repository for k6 usage with webpack.

## __Getting Started Commands__

- brew install k6
- npm install

## __Commands Available__
  
    "bundle": "webpack",
    "start": "k6 run __dist__/index.bundle.js",
    "lint:check": "eslint --ignore-path .gitignore .",
    "lint:fix": "eslint --fix --ignore-path .gitignore .",
    "prettier:check": "prettier --check \"src/**/*.js\" ",
    "prettier:fix": "prettier --write \"src/**/*.js\" --fix",
    "prepare": "husky install"
  

## __Project Content__ 
 - Webpack
 - babel-loader
 - scripts to run and bundle the project
 - Html  and raw-data.json report in the __output__ folder.
 - Prettier
 - Eslint
 - Husky Hooks


