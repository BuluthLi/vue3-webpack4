import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import countCeshi from './modules/count-ceshi';
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    count,
    countCeshi
  },
  strict: debug,
})
