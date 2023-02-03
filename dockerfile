FROM node:16-alpine as build
WORKDIR /build
COPY . .
RUN npm install
    RUN npm run build

FROM node:18 as app
WORKDIR /app
RUN npm install -g http-server@0.9.0
COPY --from=first /build/dist .
CMD ["http-server"]
