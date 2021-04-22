import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
  user: {},
  status: "",
  token: localStorage.getItem("token") || ""
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
