import Vue from 'vue'
import Vuex from 'vuex'
import actuator from './modules/actuator.js'
import sensor from './modules/sensor.js'
import timer from './modules/timer.js'
import activity from './modules/activity.js';
import socket from './modules/socket';
import datetime from './modules/datetime'
import mcu from './modules/mcu-status'
import control from './modules/control'
import ui from './modules/ui-status'
import wifi from './modules/wifi'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        actuator,
        sensor,
        timer,
        activity,
        socket,
        datetime,
        mcu,
        control,
        ui,
        wifi
    }
})


