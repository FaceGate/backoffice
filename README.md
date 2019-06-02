# Backoffice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `npm install` then `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You may need to run all microservices, watch other services documentations.

## Cloudinary config file

Run `cp ./src/app/config.ts.sample ./src/app/config.ts` and replace `cloud_name` and `upload_preset`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running docker image

Run `docker run -p 80:80 facegate/backoffice:latest` to start the nginx server. Then navigate to [localhost](http://localhost)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
