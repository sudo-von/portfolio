#FROM node:13.12.0-alpine

#WORKDIR /app
#COPY . .
#RUN npm install --silent
#CMD ["npm", "start", "NODE_ENV=development"]

# Node image
# Frontend build based on Node.js
FROM node:11.12.0-alpine as build-stage
WORKDIR  /usr/src/app
COPY . .
RUN npm install --silent
RUN npm run build

# Stage 1
# Production build based on Nginx with artifacts from Stage 0
FROM nginx:1.15.9-alpine
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]