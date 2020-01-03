FROM mhart/alpine-node:10
# as builder
ARG RUNTIME_ENV
# install packages needed by node-gyp and keystone->mongoose->mongodb->kerberos

RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm
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
