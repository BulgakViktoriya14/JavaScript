import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';
import {store} from './vuex';
Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes
})

new Vue({
  el: '#app',
  data: {
  	URL: "http://laptev-pc:3030"
  },
  router,
  store,
  render: h => h(App),
})
