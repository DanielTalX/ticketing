FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]

# docker build -t dtaldockerid/tickets .
# docker tag dtaldockerid/tickets dtaldockerid/ticketapp:tickets
# docker push dtaldockerid/ticketapp:tickets