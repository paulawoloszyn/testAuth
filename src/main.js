import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAoNWt_5JaGwBB0xMZ23A8QVUI3FQ369KI",
  authDomain: "prueba-auth-a8dd9.firebaseapp.com",
  databaseURL: "https://prueba-auth-a8dd9.firebaseio.com",
  projectId: "prueba-auth-a8dd9",
  storageBucket: "prueba-auth-a8dd9.appspot.com",
  messagingSenderId: "87627635121",
  appId: "1:87627635121:web:8a94502f17fcfda0e30590"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
