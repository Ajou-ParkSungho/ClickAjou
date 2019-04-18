// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import * as VueGoogleMaps from "vue2-google-maps"
import VModal from 'vue-js-modal'
import Wifi from 'node-wifi'


import VueWebsocket from "vue-websocket";

Vue.use(VueWebsocket, "ws://localhost:4000");

Vue.use(Wifi)
Vue.use(VModal)
Vue.use(require('vue-moment'));
Vue.use(VeeValidate);
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA_sxnPrtnXOp-QCkEJHg8Aufg4AlWo2-I",
    libraries: "places" // necessary for places input
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
