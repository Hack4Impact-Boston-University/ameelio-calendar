import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBDN5UQB9hl_z_Nc6N3yC_dnnsCbJ-7tvs",
  authDomain: "ameelio-badeb.firebaseapp.com",
  databaseURL: "https://ameelio-badeb.firebaseio.com",
  projectId: "ameelio-badeb",
  storageBucket: "ameelio-badeb.appspot.com",
  messagingSenderId: "42596678946",
  appId: "1:42596678946:web:b20fab397e8d62ffa7797b",
  measurementId: "G-0GE5WZXYKH"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
