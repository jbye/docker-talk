FROM dockerfile/nodejs
MAINTAINER John Alexander Bye <john.alexander.bye@itera.no>
WORKDIR /src

RUN apt-get update && apt-get install -y wget
RUN npm install serve-static finalhandler
ADD server.js /src/

CMD node server.js

EXPOSE 80
VOLUME ["/var/www"]