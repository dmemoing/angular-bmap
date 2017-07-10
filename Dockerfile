FROM registry.njuics.cn/library/node:6-alpine

COPY . /app
WORKDIR /app

RUN apk update && \
    apk add git && \
    npm install --unsafe-perm

ENTRYPOINT ["npm", "start"]
