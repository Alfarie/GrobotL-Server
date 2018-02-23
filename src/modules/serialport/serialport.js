const SerialPort = require('serialport');
const fs = require('fs');
var Rx = require('rxjs');

const Readline = SerialPort.parsers.Readline;
var port = null;
var parser = null;
var isConnected = false;
var portName = "/dev/ttyACM"
var store = null;

var writeSubj = new Rx.Subject();
var scanPort = function () {
    var flag = false;
    console.log("[Info] Scanning...")
    for (var i = 20; i >= 0; i--){
        var str = portName + i;
        if (fs.existsSync(str)) {
            port = new SerialPort(str, {
                baudRate: 115200,
                disconnectedCallback: function () {
                    console.log('You pulled the plug!');
                }
            });
            parser = port.pipe(new Readline({
                delimiter: '\r\n'
            }));
            port.on('open', (err) => {
                console.log("[Info] ", str, "is Opened. ")
            })
            port.on('close', (err) => {
                console.log(err);
                isConnected = false;
            })
            parser.on('data', (cmd) => {
                // console.log(cmd);
                try {
                    let json = JSON.parse(cmd);
                    if (json.type == 'sensor') {
                        let data = json.data;
                        let sensor = {
                            temperature: data.temp,
                            humidity: data.humi
                        }
                        let datetime = {
                            date: data.date,
                            time: data.time
                        }
                        let actuator = {
                            fan: {
                                status: data.actuator[0][0],
                                mode: data.actuator[0][1]
                            },
                            pump: {
                                status: data.actuator[1][0],
                                mode: data.actuator[1][1]
                            },
                            led: {
                                status: data.actuator[2][0],
                                mode: data.actuator[2][1]
                            }
                        };
                        store.actions.updateDateTime(datetime);
                        store.actions.updateActuator(actuator);
                        store.actions.updateSensor(sensor);
                    } else if (json.type == 'setting') {
                        var fan = json.data[0].timer_list;
                        var pump = json.data[1].timer_list;
                        var led = json.data[1].timer_list;
                        
                        var fanList = [];
                        fan.forEach( value=>{
                            fanList.push({
                                start: value[0],
                                stop: value[1]
                            });
                        })
                        var pumpList = [];
                        pump.forEach( value=>{
                            pumpList.push({
                                start: value[0],
                                stop: value[1]
                            });
                        })

                        var ledList = [];
                        led.forEach( value=>{
                            ledList.push({
                                start: value[0],
                                stop: value[1]
                            });
                        })
                        var data = {
                            fan: fanList,
                            pump: pumpList,
                            led: ledList
                        }
                        store.mutations.updateTimerList(data);
                    }
                } catch (e) {
                    console.log('Error: Json format');
                }
            })
            flag = true;
            isConnected = true;
            break;
        }
    }
    return flag;
}

scanPort();
setInterval(() => {
    if (!isConnected) {
        scanPort();
    }
}, 5000);
setInterval(() => {
    try {
        if(isConnected){
            port.write('{sensors}')
        }
        
    } catch (e) {
        
    }
}, 1000)

var writeSubc = writeSubj.subscribe(data => {
    console.log(data);
    port.write(data);
})

var write = (data) => {
    writeSubj.next(data);
}

module.exports = {
    write: write,
    isConnected: isConnected,
    Store: (s)=>{ store = s}
}