import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes
})

new Vue({
  el: '#app',
  data: {
  	URL: "http://192.168.0.114:3030",
  	reports:[]
  },
  router,
  render: h => h(App),
})
