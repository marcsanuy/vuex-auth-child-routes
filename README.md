For correct operation, a json fake server must be installed. I leave the application link to install:

https://github.com/typicode/json-server

The json-server directory included in the repository with the db.json file to run on a virtual server.

for a correct operation, access the directory that contains the file and by means of commands and once inside execute the following command:

json-server --watch db.json --middlewares login.js

the virtual server should be at the following address: http://localhost:3000/todos

# vuex-auth-child-routes

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

Run vue-cli-service serve and add this repository to the Vue Project Manager, run this project and enjoy

* Fake Credentials from login.js
User: admin@vue.com/
pass: Password1
