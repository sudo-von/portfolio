FROM node:13.12.0-alpine

# Development environment
ARG REACT_APP_HOST_IP_ADDRESS
ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000