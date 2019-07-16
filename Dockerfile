### STAGE 1: Build ###

FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run ng build -- --configuration=dev --output-path=dist


### STAGE 2: Setup ###

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]