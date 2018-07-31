import axios from '../../axios/axios'
import moment from 'moment'

const state = {
    AvailableWifi: [],
    CurrentWifi: {}
}

const getters = {
   AvailableWifi: (state)=>{
       return state.AvailableWifi;
   },
   CurrentWifi: (state)=>{
       return state.CurrentWifi;
   }
}

const mutations = {
   setAvailableWifi: (state,payload)=>{
       state.AvailableWifi = payload;
   },
   setCurrentWifi: (state,payload)=>{
       state.CurrentWifi = payload;
   }
}

const actions = {
    GetAvailableWifi: ({commit})=>{
        axios.get('/setting/wifi/scan')
            .then(res=>{
                // console.log(res.data);
                if(res.data.msg == 'success')
                    commit('setAvailableWifi', res.data.data);
                else
                    commit('setAvailableWifi', []);
            })
            .catch(err=>{
                console.log(err);
            })
    },
    GetCurrentWifi: ({commit})=>{
        axios.get('/setting/wifi/current')
            .then(res=>{
                // console.log(res.data);
                if(res.data.msg == 'success')
                    commit('setCurrentWifi', res.data);
                else
                    commit('setCurrentWifi', {});
            })
            .catch(err=>{
                console.log(err);
            })
    },
    Disconnect: ({commit})=>{
        axios.get('/setting/wifi/disconnect')
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },
    Connect: ({commit,dispatch},payload)=>{
        dispatch('popUpWifi', 'pending')
        axios.post('/setting/wifi/connect',payload)
        .then(res=>{
            console.log(res.data);
            if(res.data.msg == 'success'){
                dispatch('popUpWifi', 'success')
                dispatch('GetCurrentWifi')
            }
            else{
                dispatch('popUpWifi', 'fail')
                dispatch('GetCurrentWifi')
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
}

export default { 
    state,
    getters,
    mutations,
    actions
}