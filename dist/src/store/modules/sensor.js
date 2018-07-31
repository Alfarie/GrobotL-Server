import moment from 'moment'
const state = {
    sensors: {
        temperature: 0,
        humidity: 0
    },
    date: moment().format('YYYY-MM-DD'),
    time: moment().format('HH:mm:ss')
}
const getters = {
    getSensors(state){
        return state.sensors;
    },
    getDate: state=>{
        return state.date
    },
    getTime: state=>{
        return state.time
    }
}
const mutations = {
    SOCKET_SENSORS:(state, data)=>{
        state.sensors = data[0];
    },
    SOCKET_DATETIME: (state, data)=>{
        state.date = data[0].date;
        state.time = data[0].time;
    }
}

export default{
    state,
    getters,
    mutations
}