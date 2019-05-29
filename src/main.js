import Vue from 'vue';
import App from './App';
import Index from './views/index.vue';
import Goods from './views/goods.vue';
import Cart from './views/cart.vue';

import VueRouter from 'vue-router';
import Element from 'element-ui';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// eslint-disable-next-line no-duplicate-imports
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(VueRouter);
Vue.use(Element);

const routes = [
  {path: '/', redirect: '/index'},
  { path: '/index', component: Index },
  { path: '/goods', component: Goods },
  { path: '/cart', component: Cart }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
