FROM --platform=linux/amd64 node:16-alpine

WORKDIR /

COPY . /

RUN npm install

RUN npx prisma generate

EXPOSE 3000

CMD npm start