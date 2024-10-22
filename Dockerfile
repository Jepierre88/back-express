FROM node:20
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 3006
CMD [ "npm", "run", "start" ]