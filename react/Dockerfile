FROM node:13.12.0-alpine AS base
ARG ENVIRONMENT

# Development environment
FROM base AS development
WORKDIR /app
COPY . .
RUN npm install --silent
CMD ["npm", "start"]

# Production environment
# FROM base AS production
