FROM node
WORKDIR /api/v1/auth
COPY package*.json ./
RUN  npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]