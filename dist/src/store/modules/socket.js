const state = {
    connect: false
}

const getters = {
    connect: (state)=>{
        return state.connect;
    },
    isConnect: (state)=>{
        return (state.connect)? 'ONLINE': 'OFFLINE';
    }
}

const mutations = {
    SOCKET_CONNECT: (state,  status ) => {
        console.log('Connected');
        state.connect = true;
    },
    SOCKET_DISCONNECT: (state, status)=>{
        console.log('disconnceted');
        state.connect = false;
    }
}

const actions = {
    
}

export default {
    state,
    getters,
    mutations,
    actions
}