import Vue from 'vue'
const state = {
    date: '',
    time: ''
}

const getters = {
    // getDate: state=>{
    //     return state.date
    // },
    // getTime: state=>{
    //     return state.time
    // }
}

const mutations = {
    setDate(state,payload){
        state.date = payload
    },
    setTime(state,payload){
        state.time = payload
    }
}

const actions = {
    updateDateTime({commit}, payload){
        Vue.http.post('api/datetimes', payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}