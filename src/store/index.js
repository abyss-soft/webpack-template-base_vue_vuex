import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import onemodule from "./modeles/module-one";

export default new Vuex.Store({
  modules: {
    onemodule
  }
})
