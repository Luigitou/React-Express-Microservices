FROM node:16-bullseye
WORKDIR /gateway

COPY package.json .
COPY package-lock.json .

RUN mkdir node_modules
RUN npm ci

COPY tsconfig.json .
COPY src ./src
CMD ["npm", "run", "dev"]