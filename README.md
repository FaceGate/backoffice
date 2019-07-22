# Backoffice

## Development server

Run `npm install` then `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You may need to run all microservices, watch other services documentations.

## Cloudinary & API endpoint .env file

Run `cp example.env .env` and replace value for `cloud_name`, `upload_preset` and `api_url`.

## Build

Run `npm run config` to config Angular environnement variables then to build the project run `ng build --configuration=dev`

## Running docker image

Run `docker run -p 80:80 --network facegate-net --env-file .env facegate/backoffice:develop` to start the nginx server. Then navigate to [localhost](http://localhost)