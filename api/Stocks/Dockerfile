FROM node:16-bullseye
WORKDIR /stocks

COPY package.json .
COPY package-lock.json .

RUN mkdir node_modules
RUN npm ci

COPY tsconfig.json .
COPY src ./src
CMD ["npm", "run", "dev"]