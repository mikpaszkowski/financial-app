import { $dbApi } from "../../..//api/databaseAPI";

export const updateUser = ({ commit }, payLoad) => {
  commit("setCurrentName", payLoad.name);
  commit("setCurrentSurname", payLoad.surname);
  commit("setCurrentBirthDate", payLoad.birth);
  commit("setCurrentAddress", payLoad.address);
};
export const updateAccountSettings = ({ commit }, payLoad) => {
  commit("setCurrentLanguage", payLoad.language);
  commit("setCurrentTimeZone", payLoad.timezone);
  commit("setStatus", payLoad.status);
};
export const updateEmailPhone = ({ commit }, payLoad) => {
  commit("setCurrentPhoneNumber", payLoad.phoneNumber);
  commit("setCurrentEmailAddress", payLoad.emailAddress);
  commit("setAdditionalPhoneNumber", payLoad.additionalPhoneNumber);
  commit("setAdditionalEmailAddress", payLoad.additionalEmailAddress);
};

export const login = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    console.log(user);
    commit("authRequest");
    $dbApi.users
      .logIn(user)
      .then(res => {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("token", token);
        console.log(user);
        commit("authSuccess", { token, user });
        resolve(res);
      })
      .catch(err => {
        commit("authError");
        localStorage.removeItem("token");
        reject(err);
      });
  });
};

export const signup = ({ commit, rootState }, user) => {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    console.log(rootState);
    this.$dbApi.users
      .signup(user)
      .then(res => {
        const token = res.token;
        const user = res.user;
        localStorage.setItem("token", token);
        commit("authSuccess", token, user);
        resolve(res);
      })
      .catch(err => {
        commit("authError", err);
        localStorage.removeItem("token");
        reject(err);
      });
  });
};

export const logout = ({ commit }) => {
  return new Promise((resolve, reject) => {
    console.log("logout");
    commit("logout");
    localStorage.removeItem("token");
    resolve();
  });
};
