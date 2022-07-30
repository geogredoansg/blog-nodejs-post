FROM node:18.0.4

ENV NODE_ENV=production

WORKDIR /blog-nodejs

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]