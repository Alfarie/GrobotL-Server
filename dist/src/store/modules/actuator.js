const state = {
  actuator: {
    fan: {
      mode: 0,
      status: 0
    },
    pump: {
      mode: 0,
      status: 0
    },
    led: {
      mode: 0,
      status: 0
    }
  }
}

import Vue from 'vue';


const getters = {
  actuatorString: state=>{
    let data = {
      fan: {
        mode: (state.actuator.fan.mode == 0) ? 'manual' : 'auto',
        status: (state.actuator.fan.status == 0) ? 'off' : 'on'
      },
      pump:{
        mode: (state.actuator.pump.mode == 0) ? 'manual' : 'auto',
        status: (state.actuator.pump.status == 0) ? 'off' : 'on'
      },
      led: {
        mode: (state.actuator.led.mode == 0) ? 'manual' : 'auto',
        status: (state.actuator.led.status == 0) ? 'off' : 'on'
      }
    }
    return data;
  },
  actuator: state=>{
    return state.actuator;
  }
}

const mutations = {
  updateActuator: (state, payload) => {
    state.actuator = payload;
  }
}

const actions = {
    updateActuator: ({commit} , payload)=>{
        // console.log(payload);
        commit('updateActuator',payload);
    },
    setMode: ({commit,state}, payload)=>{
      state.actuator[payload.type].mode = payload.mode;
      commit('updateActuator',state.actuator);
      Vue.http.post('api/mode', { type: payload.type, mode: payload.mode});
    },
    setStatus: ({commit,state}, payload)=>{
      state.actuator[payload.type].status = payload.status;
      commit('updateActuator',state.actuator);
      // console.log(payload);
      Vue.http.post('api/status', 
        { 
          type: payload.type, 
          status: (payload.status)? 1 : 0
        }
      );
    },
}

export default {
  state,
  getters,
  mutations,
  actions
}
