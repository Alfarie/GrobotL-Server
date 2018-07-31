import Home from './components/Home/Home.vue'

// import Timer from './components/Timer/Timer.vue'
// import TimerPanel from './components/Timer/TimerPanel/TimerPanel.vue'
// import AddTimer from './components/Timer/ControlPanel/AddTimer.vue'
// import Mode from './components/Timer/TimerPanel/Mode.vue'



import Setting from './components/setting/setting.vue'
import Configuration from './components/setting/configuration/configuration.vue'
import DateTime from './components/setting/datetime/datetime.vue'
import Activity from './components/setting/activity/activity.vue'
import SelectPlant from './components/setting/activity/selectplant.vue'
import SubmitPlant from './components/setting/activity/submit.vue'
import Wifi from './components/setting/wifi/wifi.vue'
import WifiStatus from './components/setting/wifi/wifi-status.vue'
import WifiList from './components/setting/wifi/wifi-list.vue'
import WifiConnect from './components/setting/wifi/wifi-connect.vue'

import Control from './components/Control/Control.vue'
import Timers from './components/Control/Timer/Timer.vue' 
import AddTimers from './components/Control/Timer/add/AddTimer.vue'
import DisplayTimers from './components/Control/Timer/TimerDisplay.vue'
import Mode from './components/Control/Mode/Mode.vue'
export const routes = [
    {path: '/', component: Home},
    {path: '/home', name:"home", component: Home},
    {path: '/setting', name: 'setting', component: Setting, children: [
        {path: 'configuration', name: 'configuration', component: Configuration },
        {path: 'datetime', name: 'datetime', component: DateTime },
        {path: 'activity', name: 'activity', component: Activity, children:[
            {path: 'select', name: 'select', component: SelectPlant},
            {path: 'submit', name: 'submit', component: SubmitPlant}
        ]},
        {path: 'wifi', name:'wifi', component: Wifi, children:[
            {path: 'list', name: 'wifi-list', component: WifiList},
            {path: 'status', name: 'wifi-stat', component: WifiStatus},
            {path: 'connect', name: 'wifi-connect', component: WifiConnect}
        ]}
    ]},
    // {path: '/timer', component: Timer, children:[
    //     {path: ':id', component: TimerPanel},
    //     {path: ':id/add', component: AddTimer},
    //     {path: ':id/mode', component: Mode}
    // ]},
    {path: '/control', component: Control, children:[
        {path: 'timer', name: 'timer', component: Timers, children:[
            {path: ':id/add', name: 'wtimer-add', component: AddTimers},
            {path: ':id/display', name: 'timer-display', component: DisplayTimers},
            
        ]},
        {path: 'mode', name: 'mode', component: Mode}
    ]},
   
    {path: '*', redirect: '/'}
]