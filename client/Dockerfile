FROM node:16-alpine
WORKDIR /usr/local/client

COPY . .

RUN npm ci

EXPOSE 3000

COPY tsconfig.json .
CMD ["npm", "run", "dev"]