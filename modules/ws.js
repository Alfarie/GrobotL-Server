var express = require('express');
var app = express();
var http = require('http').Server(app);
var cors = require('cors');
var path = require('path');
var root = path.join(path.resolve(__dirname, '../dist'));

app.use(cors())
app.use(express.static(root));

http.listen(3000, function() {
    console.log('listening *:' + 3000);
});

module.exports = {
    http: http,
    app: app
}