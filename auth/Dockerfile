FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]

# docker build -t dtaldockerid/auth .
# docker tag dtaldockerid/auth dtaldockerid/dockerhub:auth
# docker push dtaldockerid/dockerhub:auth