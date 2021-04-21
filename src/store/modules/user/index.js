import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const state = {
  user: {
    firstName: "",
    lastName: "",
    currPhone: "",
    additionalPhone: "",
    currEmail: "",
    additionalEmail: "",
    birthDate: "",
    address: "",
    timeZone: "",
    language: "",
    status: null,
    userId: null
  },
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
