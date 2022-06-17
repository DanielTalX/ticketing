FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]

# docker build -t dtaldockerid/orders .
# docker tag dtaldockerid/orders dtaldockerid/ticketapp:orders
# docker push dtaldockerid/ticketapp:orders