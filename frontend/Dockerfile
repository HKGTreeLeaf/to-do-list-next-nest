FROM node:18.16-alpine as base

WORKDIR /base

COPY package.json yarn.lock /base/

RUN yarn install --ignore-scripts --network-timeout 100000


COPY . .

RUN yarn build

FROM node:18.16-alpine
WORKDIR /app
COPY --from=base /base/package*.json ./
COPY --from=base /base/.next ./.next
COPY --from=base /base/public ./public
COPY --from=base /base/next.config.js ./
COPY --from=base /base/node_modules ./node_modules

EXPOSE 3000

CMD ["yarn", "start:prod"]
