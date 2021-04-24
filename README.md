# financial-app

## Overview

The main goal of application was to skill myself in the field of full-stack development.
The app is a kind of finanial app imitation, making simple bank operations such as sending of money and sending requests
to the other users. Created user authenticated by the JWT is saved to the database, further signing to the app is also controlled by the JWT. Moreover, transactions are saved to the database. User have a chance to send money in different currency (usage of currency API) to another user. At the home page user can read the businees articles (still in development).Basing on the transactions of the user we can calculate the blance of the user's balance. The frontend is styled with the pure CSS/SCSS without any libraries. With the usage of the Vuex, the data-state-managment is handled by creating so called "Vuex Store" (like Redux in React). In this application in the frontend as well as in the backend I've tried to separate the business-logic, extern APIs, controllers, routes from the rest of the application. In the backend I have not created architecture totally based on MVC (Model-View-Controller, separate directories Mode/View/Controllers). I've created the architecture in that way which simple "speak" to the developer at first point what is about, what this app is responsible for and what kind of data or models it handles. This is why, in the backend you can find the separate directories: "user" , "transactions" in which might be find the controllers, models, routes. I've refactored this app many times to make the architecture more cleaner, it still does not fulfills the DDD requirements but I am trying very hard. 


## Tech stack

* JavaScript
* Vue.js
* Vuex
* NodeJS
* Express
* MySQL + Sequelize
* JWT auth


## Required forward work

* Testing with Mocha nad Chai
* Domain-Drive-Design

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
