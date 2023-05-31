
const express = require('express');

const app = express();

app.get('/Home', function (req, res) {
  res.send('<h1>Madrid Fan Zone</h1>');
});
app.get('/PlayerProfile', function (req, res) {
  res.send('<h1>Player Profile</h1>');
});

app.listen(3231, function () {
  console.log('Listening on port 3231');
});