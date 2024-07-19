FROM node:18.17.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY app.js ./

RUN mkdir -p uploads && chmod -R 777 uploads

EXPOSE 3000

CMD ["node", "app.js"]