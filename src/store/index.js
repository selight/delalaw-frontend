import {createStore} from 'vuex'
import Auth from "src/store/Auth";
import Roommate from "src/store/Roommate";
import Handyman from "src/store/Handyman";
// import example from './Auth'


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  return new createStore({
    modules: {
      Auth,
      Roommate,
      Handyman
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })
}
