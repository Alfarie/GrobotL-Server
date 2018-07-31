import Vue from 'vue';
import axios from '../../axios/axios'
import moment from 'moment'
var dateFormat = require('dateformat');
const state = {
    activity: {
        type: 'Lettuce',
        dth: 0,
        ptd: new Date().toDateString(),
        image: 'lettuce.jpg'
    },
    plants:[]
}

const getters = {
    getPlants: state=>{
        return state.plants
    },
    activity: state => {
        return state.activity;
    },
    activityFormat: state => {
        return state.activity;
    }
}

const mutations = {
    updateActivity: (state, payload)=>{
        state.activity = payload;
    }
}

const actions = {
    GetPlants: ({state})=>{
        axios.get('/setting/plants').then(
            res=>{
                state.plants = res.data;
            }
        )
    },
    GetActivity: ({getters})=>{
        axios.get('/setting/activity').then(
            res=>{
                console.log(res.data);
                state.activity = res.data;
            }
        )
    },
    SetActivity: ({state},payload)=>{
        
        axios.post('/setting/activity', payload).then()
    }
}

export default { 
    state,
    getters,
    mutations,
    actions
}