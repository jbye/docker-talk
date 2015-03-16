FROM dockerfile/nodejs
MAINTAINER John Alexander Bye <john.alexander.bye@itera.no>
WORKDIR /src

RUN apt-get update && apt-get install -y wget
RUN npm install serve-static finalhandler
RUN wget -O server.js https://gist.githubusercontent.com/jbye/1b367956f13f31c24d80/raw

CMD node server.js

EXPOSE 80
