var express = require('express');
var app = express();
var http = require('http').Server(app);
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var root = path.join(path.resolve(__dirname, '../../../dist/'));
var api = require('./api');

app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())
app.use(express.static(root));
app.use('/api', api);
var io = require('socket.io')(http);

http.listen(3000, function() {
    console.log('listening *:' + 3000);
});

module.exports = {
    http: http,
    app: app,
    io: io
}

