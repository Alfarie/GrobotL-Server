import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource';
import {store} from './store/store.js'
import MultiLanguage from 'vue-multilanguage'
import {routes} from './routes.js'
import language from './lang/language'
import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import "./filters/filters.js";

import VueTouchKeyboard from "vue-touch-keyboard";
import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style

Vue.use(VueTouchKeyboard);
Vue.use(VueRouter);
Vue.use(MultiLanguage, language)
Vue.use(VueResource);

var hostname = window.location.hostname;
Vue.use(VueSocketio, socketio('http://'+ hostname +':3000'), store);
Vue.http.options.root = 'http://'+ hostname +':3000';

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
