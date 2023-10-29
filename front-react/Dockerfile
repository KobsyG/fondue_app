FROM node:20-alpine3.17

WORKDIR /usr/src/app/react

COPY package.json /usr/src/app/react/package.json
COPY tsconfig.json /usr/src/app/react/tsconfig.json

RUN npm install

CMD ["npm", "start"]