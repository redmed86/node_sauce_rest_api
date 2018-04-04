var request = require("request");

var options = { method: 'GET',
  url: 'http://saucelabs.com/rest/v1/analytics/trends/builds_tests',
  qs: { time_range: '-1d' },
  headers:
   { 'Cache-Control': 'no-cache',
     Authorization: '<encrypted_basic_username/access_key>' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
