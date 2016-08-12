// node routes/todos2.js

const baseUrl = "first-643b7.firebaseio.com";

var https = require('https');

var optionsget = {
  host: baseUrl,
  port: 443,
  path: '/todos/-KOjaggMJd8M-b5njuNS.json',
  method: 'GET'
};

console.info('Option prepared: ');
console.info(optionsget);
console.info('Do the GET call');

var reqGet = https.request(optionsget, function (res) {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', function(data) {
    console.info('GET result:\n');
    console.info(JSON.parse(data))
    console.info('\n\nCall completed');
  });
});

reqGet.end();
reqGet.on('error', function(e) {
  console.error(e);
});