FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]

# docker build -t dtaldockerid/auth .
# docker tag dtaldockerid/auth dtaldockerid/ticketapp:auth
# docker push dtaldockerid/ticketapp:auth