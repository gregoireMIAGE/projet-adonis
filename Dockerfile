FROM thecodingmachine/nodejs:10

COPY --chown=docker . .

RUN sudo npm i -g @adonisjs/cli
RUN npm install

CMD ["node","server.js"]
