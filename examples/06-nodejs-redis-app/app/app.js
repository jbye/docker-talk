var express = require('express');
var redis = require('redis');
var rediscli = redis.createClient(process.env.REDIS_PORT_6379_TCP_PORT || 6379,
                                  process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1');

var app = express();
app.get('/', function (req, res) {
  console.log("** Handling incoming request");
  rediscli.incr('counter', function (err, count) {
    res.json({
      'count': count
    });
  });
});

app.listen(80);
console.log("** Server started listening...");
