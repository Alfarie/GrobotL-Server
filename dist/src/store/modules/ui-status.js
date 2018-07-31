const state = {
    isUpdating: false,
    popupMessage: 'Updating',
    image: '/src/assets/img/Spinner.svg'
}

const getters = {
   isUpdating: (state)=>{
       return state.isUpdating;
   },
   popupMessage: (state)=>{
       return state.popupMessage;
   },
   popupImage: (state)=>{
       return state.image;
   }
   
}

const mutations = {
    
}
const actions = {
    popupUpdateModal: ({state})=>{
        state.isUpdating = true;
        state.popupMessage = "Updating..."
        state.image = '/src/assets/img/Spinner.svg'
        setTimeout(()=>{ 
            state.popupMessage = "Success!"
            state.image = '/src/assets/img/checked.png'
            setTimeout(()=>{ state.isUpdating = false}, 300);
        }, 1700);
    },
    popUpWifi: ({state}, message)=>{
        
        // state.popupMessage = "WIFI"
        if(message == 'success'){
            state.popupMessage = "CONNECTION SUCCESS"
            state.image = '/src/assets/img/checked.png'
            setTimeout(()=>{ state.isUpdating = false}, 1500);
        }
        if(message == 'pending'){
            state.popupMessage = "CONNECTING..."
            state.image = '/src/assets/img/Spinner.svg'
        }
        if(message == 'fail'){
            state.popupMessage = "INVALID PASSWORD"
            state.image = '/src/assets/img/error.png'
            setTimeout(()=>{ state.isUpdating = false}, 1500);
        }
        state.isUpdating = true;
        
        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}