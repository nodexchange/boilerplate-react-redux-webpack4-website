FROM mhart/alpine-node:10
# as builder
ARG RUNTIME_ENV
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .
CMD ["npm", "run", "start:production"]
# RUN npm prune --production

# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /usr/src/app/dist/spa /usr/share/nginx/html
