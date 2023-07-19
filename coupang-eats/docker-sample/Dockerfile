# 이 이미지를 가져와서 쓸게요
FROM node:lts-buster 
LABEL author Seong Wook Ha <swh0901@gmail.com>

COPY . /usr/src/app

WORKDIR /usr/src/app
RUN yarn install --immutable --immutable-cache --check-cache
# RUN npm ci

RUN yarn run build

EXPOSE 3000
CMD yarn run start

