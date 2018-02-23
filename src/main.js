var ws = require('./modules/ws/ws');
var io = require('./modules/socket').setIO(ws.io);
var store = require('./modules/store/store');
var ser = require('./modules/serialport/serialport').Store(store);