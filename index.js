var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/static/', express.static(__dirname + '/public/static'));

app.get('/', function(request, response) {
  response.send('<p>some html</p>');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
