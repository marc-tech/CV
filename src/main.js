import Vue from 'vue';
import App from './App.vue';
import "@/assets/styles.scss"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js//bootstrap.min";

import $ from "jquery"
window.$ = $;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
