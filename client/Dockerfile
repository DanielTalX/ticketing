FROM node:alpine

# Add the following lines
ENV CI=true

WORKDIR /app
COPY package.json .
RUN npm instal
COPY . .

CMD ["npm", "run", "dev"]

# docker build -t dtaldockerid/client .
# docker tag dtaldockerid/client dtaldockerid/ticketapp:client
# docker push dtaldockerid/ticketapp:client