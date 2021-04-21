import { createStore, createLogger } from "vuex";
import user from "./modules/user/index";
import apiPlugin from "../plugins/apiPlugin";

export default createStore({
  plugins: [apiPlugin, createLogger],
  modules: {
    user
  },
  actions: {
    check({ commit }, payLoad) {
      console.log(this.$dbApi);
    }
  }
});
