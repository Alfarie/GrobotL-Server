var Rx = require('rxjs');

var emitSubj = new Rx.Subject();
var io = null;
var setIO = (IO)=>{
    io = IO;
    io.on('connection', (socket)=>{
        socket.join('0x01');
        console.log('Client connected');

        socket.on('disconnect', ()=>{
            console.log('Client disconnect');
        })
    })
}

var emitSubc = emitSubj.subscribe(
    (data)=>{
        // console.log( data);
        io.to('0x01').emit(data[0],data[1]);
    }
)

var emit = (data)=>{
    emitSubj.next(data);
}

module.exports = {
    setIO: setIO,
    io: io,
    emit: emit
}

