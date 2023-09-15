FROM node:16-bullseye
WORKDIR /usr/local/gateway

COPY package.json .
COPY package-lock.json .

RUN mkdir node_modules
RUN npm ci

EXPOSE 5000

COPY tsconfig.json .
COPY src ./src
CMD ["npm", "run", "dev"]