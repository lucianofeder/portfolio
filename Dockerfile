#Stage 1
FROM node:17-alpine as builder
ENV NODE_ENV production
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.19.0
ENV NODE_ENV production
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
