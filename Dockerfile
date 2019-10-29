FROM node:12.2.0-alpine

WORKDIR /opt/app
ENV PATH /opt/app/node_modules/.bin:$PATH

COPY package.json /opt/app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . .

CMD ["npm", "start"]
