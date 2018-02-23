

var isConnected = require('../serialport/serialport').isConnected;
var write = require('../serialport/serialport').write;
var emit = require('../socket').emit;
var state = {
    timerList: {},
    activity: {},
    actuator: {},
    sensor: {},
    datetime: {}
}

var getters = {
    getTimerList: () => {
        return state.timerList;
    },
    getActivity: () => {
        return state.activity;
    }
}

var mutations = {
    updateTimerList: (payload) => {
        state.timerList = payload;
    },
    updateActivity: (payload) => {
        state.activity = payload;
    },
    updateActuator: (payload) => {
        state.actuator = payload;
    },
    updateSensor: (payload) => {
        state.sensor = payload;
    },
    updateDateTime: (payload)=>{
        state.datetime = payload;
    }
}

var chMap = {
    fan: 1,
    pump: 2,
    led: 3
}
var actions = {
    updateTimerChannelList: (payload) => {
        // {timer,1,1,20-60,90-150,200-260}
        let cmd = "{timer," + chMap[payload.type] + ",1";
        payload.data.forEach( d=>{
            let s = "," + d.start + "-"+ d.stop;
            cmd += s;
        })
        cmd +="}";
        write(cmd);
        state.timerList[payload.type] = payload.data;
    },
    updateActivity: (payload) => {

        mutations.updateActivity(payload);
    },
    updateActuator: (payload) => {
        emit(['ACTUATOR', payload])
        mutations.updateActuator(payload);
    },
    updateSensor: (payload) => {
        emit(['SENSOR', payload])
        mutations.updateSensor(payload);
    },
    updateDateTime: (payload)=>{
        emit(['DATETIME', payload]);
        mutations.updateDateTime(payload);
    },
    initActivity: ()=>{
        mutations.updateActivity( require('../temp/activity') )
    },
    initTimerList: ()=>{
        write('{setting}')
    },
    setMode:(payload)=>{
        //change mode
        let cmd = '{mode,' + chMap[payload.type] + ',' + payload.mode + '}';
        write(cmd);
    },
    setStatus: (payload)=>{
        let cmd = '{manual,' + chMap[payload.type] + ',' + payload.status + '}';
        write(cmd);
    },
    setDateTime: (payload)=>{
        // { year: 2018, month: 2, day: 8, hour: 0, min: 0 }
        // {datetime,8,1,17,6,31}
        let cmd = '{datetime,' + payload.day +',' + payload.month +','+payload.year +',' + payload.hour +','+ payload.min + '}';
        write(cmd);
    }
}

actions.initActivity();
var checkConnection = setInterval( ()=>{
    if(isConnected){
        setTimeout( ()=>{
            actions.initTimerList();
        },5000);
        clearInterval(checkConnection);
    }
}, 200);

module.exports = {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}