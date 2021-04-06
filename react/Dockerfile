#FROM node:13.12.0-alpine

#WORKDIR /app
#COPY . .
#RUN npm install --silent
#CMD ["npm", "start", "NODE_ENV=development"]

# Node image
FROM node:10 as builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy source code
COPY . /usr/src/app/

# install app dependencies
RUN npm install

# run production build
RUN npm run build

# Nginx
FROM nginx:1.15.9-alpine
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]