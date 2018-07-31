import axios from '../../axios/axios';
import controlModel from '../../models/model-control.js'
const state = {
    control: controlModel,
    waterControl: {},
    calibration: {
        ec: 1.0,
        ph: 1.0
    }
}

const getters = {
    getControl: (state)=>{
        return state.control
    },
    getTimer: (state)=>{
        return [state.control[0].timer.list,state.control[1].timer.list,state.control[2].timer.list]
    }
}

const mutations ={
    addTimer(state, timer){
        // state.control[0].mode = 1;
        state.control[0].timer.list.push(timer);
        state.control[0].timer.list.sort( (a,b)=> a[0] - b[0]);
    }
}

const actions = {
    GetControl: ({commit,state})=>{
        axios.get('/control').then(res=>{
            console.log(res.data);
            state.control = res.data;
        })
    },
    uploadControl: ({commit,state}, channel)=>{
        axios.post('control/',{
            control: state.control[channel]
        })
        .then(res=> { 
            /*console.log(res)*/ 
        })
        .catch(err=>console.log(err))
    },
    uploadControlByData: ({commit,state}, data)=>{
        axios.post('control/',{
            control: data
        })
        .then(res=> { 
            /*console.log(res)*/ 
        })
        .catch(err=>console.log(err))
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}