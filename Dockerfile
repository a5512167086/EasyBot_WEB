#Stage 1
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json .
COPY yarn*.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

#Stage 2
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]