# Financial-app :dollar:

## :world_map: Overview

The main goal of the application was to skill me in the field of full-stack development. The app is a kind of financial app imitation, making simple bank operations such as sending money and sending requests to the other users. Created user authenticated by the JWT is saved to the database, further signing to the app is also controlled by the JWT. Moreover, transactions are saved to the database. Users have a chance to send money in a different currency (usage of currency API) to another user. On the home page, the user can read the business articles (still in development). Basing on the transactions of the user we can calculate the balance of the user's balance. The front end is styled with pure CSS/SCSS without any libraries. With the usage of the Vuex, the data-state-management is handled by creating a so-called "Vuex Store" (like Redux in React). In this application in the frontend as well as in the backend I've tried to separate the business-logic, extern APIs, controllers, routes from the rest of the application. In the backend, I have not created architecture totally based on MVC (Model-View-Controller, separate directories Mode/View/Controllers). I've created the architecture in a way that simply "speaks" to the developer at the first glance what is about, what this app is responsible for, and what kind of data or models it handles. This is why, in the backend, you can find the separate directories: "user", "transactions" in which might find the controllers, models, routes. I've refactored this app many times to make the architecture cleaner, it still does not fulfills the DDD requirements but I am trying very hard.


## :wrench: Tech stack

* JavaScript
* Vue.js
* Vuex
* NodeJS
* Express
* MySQL + Sequelize
* JWT auth


## :telescope: Required forward work 

* Testing with Mocha nad Chai :microscope:
* Domain-Drive-Design :muscle:

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
