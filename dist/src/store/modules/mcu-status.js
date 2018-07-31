import axios from '../../axios/axios';

const state = {
    gpio: [0,0,0,0,0,0]
}

const getters = {
    mcuStatus(state){
        return {
            gpio: state.gpio,
        }
    }
}

const mutations ={
    SOCKET_GPIO:(state, data)=>{
        state.gpio = data[0];
    }
}

const actions = {
    updateDateTime(context, payload){
        axios.post('setting/datetime', payload)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}