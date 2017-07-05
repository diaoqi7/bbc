import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)


import firstc from './component/firstcomp.vue'
import secondc from './component/secondcomp.vue'


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstc
    },
    {
      path: '/second',
      component: secondc
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')


