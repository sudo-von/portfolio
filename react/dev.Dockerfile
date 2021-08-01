FROM node:13.12.0-alpine

# Development environment
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000