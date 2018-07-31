// import timerlist from '../../components/Timer/TimerPanel/timerlist.js';
import Vue from 'vue';
var timerlist = {}
const state = {
    timerList: []
}

const getters = {
    timerList: state => {
        return state.timerList;
    }
}

const mutations = {
    updateList: (state, payload) => {
        state.timerList = payload;
    },
    addList: (state, payload)=> {
        console.log(payload);
        state.timerList[payload.type].push(payload.data);
    },
    deleteIndexList: (state,payload)=>{
        state.timerList[payload.type].splice(payload.data, 1);
    }
}

const actions = {
    initList: ( {commit}, payload )=> {
    Vue.http
        .get("api/timers")
        .then(
            response => {
                setTimeout( ()=> {
                    commit('updateList', response.body);
                }, 1000);
            },
            err => {
                console.log(err);
            }
        );
    },
    updateList: ( {commit}, payload) => {
        commit('updateList', payload);
    },
    addList: ( {commit}, payload) =>{
        console.log(payload);
        setTimeout(()=>{
            commit('addList', payload);
            Vue.http.post('api/timers', { type: payload.type, data:state.timerList[payload.type]})
                .then(
                    res=>{
                        console.log(res);
                    },err=> {}
                )
        }, 1000);
    },
    deleteIndexList: ( {commit}, payload)=>{
        commit('deleteIndexList', payload);
        console.log(state.timerList[payload.type]);

        Vue.http.post('api/timers', { type: payload.type, data:state.timerList[payload.type]})
                .then(
                    res=>{
                        console.log(res);
                    },err=> {}
                )
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}