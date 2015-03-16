var express = require('express');
var redis = require('redis');
var rediscli = redis.createClient(process.env.REDIS_PORT || 6379,
                                  process.env.REDIS_HOST || '127.0.0.1');

var app = express();
app.get('/', function (req, res) {
  rediscli.incr('counter', function (err, count) {
    res.json({
      'count': count
    });
  });
});

app.listen(3000);