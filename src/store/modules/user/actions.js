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

export const login = ({ commit, context }, user) => {
  return new Promise((resolve, reject) => {
    console.log(context.rootState);
    commit("authRequest");
    this.$dbApi.users
      .logIn(user)
      .then(res => {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("token", token);
        commit("authSuccess", token, user);
        resolve(res);
      })
      .catch(err => {
        commit("authError");
        localStorage.removeItem("token");
        reject(err);
      });
  });
};
