#FROM node:13.12.0-alpine

#WORKDIR /app
#COPY . .
#RUN npm install --silent
#CMD ["npm", "start", "NODE_ENV=development"]

FROM node:alpine
WORKDIR /myReactApp
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run-script build

# Serve
FROM nginx:alpine
COPY --from=0 /myReactApp/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
