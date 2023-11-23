FROM node:16-alpine
WORKDIR /usr/local/stocks

COPY package.json .
COPY package-lock.json .

RUN npm ci

EXPOSE 5001

COPY tsconfig.json .
CMD ["npm", "run", "dev"]