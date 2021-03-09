import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index'
import {mapActions} from 'vuex';
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ( { store, ssrContext } ) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
Router.beforeEach((to, from, next) => {
  const  isLoggedIn= store.getters['Auth/dialog'];
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    if(!isLoggedIn){
    store.dispatch('Auth/setDialog',true)
      console.log(store.getters['Auth/dialog'])

       // mutations.DIALOG_SHOW(store.state.Auth.dialog,true);
    }
  }else {
    next();
  }
})
  return Router
}
