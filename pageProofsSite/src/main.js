import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';
Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes
});

new Vue({
  el: '.container',
  router,
  render: h => h(App)
})
