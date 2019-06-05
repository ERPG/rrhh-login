![Angular](https://coryrylan.com/assets/images/posts/types/angular.svg) ![Google](https://avatars3.githubusercontent.com/u/16785467?s=200&v=4)
![Nodemailer](https://avatars2.githubusercontent.com/u/16486629?s=400&v=4)

# RrhhLogin

Human resources app for the daily login of employees.

## Getting Started

This steps will get you through the setup process of installing and usage of the project.

### Project contributors guide

To ensure the best compatibility you may need node version of `v10.9`. We would recommend to use NVM (Node Version Manager) for this. You can find it [Here](https://github.com/creationix/nvm).

Installation

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

then you can run

```
nvm install `version`
```

After set node version run

```
yarn install
```

After installing all packages you just need to launch Angular dev server. Since the app also use a mail service you also need to launch the node server that receive
this requests.

To launch Angular server

```
yarn run start
```

And Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To launch node server

```
node server.js
```

To check if server is running, navigate to `http://localhost:3000/`

That's it, you are good to go!

## Running the tests

To run the tests

```
yarn run test
```

## Built With

- [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0. - The web framework used
- [nodemailer](https://nodemailer.com/about/) - Mail package
- [Express](https://expressjs.com/es/) - node Infraestructure
- [Rxjs](https://angular.io/guide/rx-library) - Angular state library

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
