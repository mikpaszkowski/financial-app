export const actions = {
  updateUser({ commit }, payLoad) {
    commit("setCurrentName", payLoad.name);
    commit("setCurrentSurname", payLoad.surname);
    commit("setCurrentBirthDate", payLoad.birth);
    commit("setCurrentAddress", payLoad.address);
  },
  updateAccountSettings({ commit }, payLoad) {
    commit("setCurrentLanguage", payLoad.language);
    commit("setCurrentTimeZone", payLoad.timezone);
    commit("setStatus", payLoad.status);
  },
  updateEmailPhone({ commit }, payLoad) {
    commit("setCurrentPhoneNumber", payLoad.phoneNumber);
    commit("setCurrentEmailAddress", payLoad.emailAddress);
    commit("setAdditionalPhoneNumber", payLoad.additionalPhoneNumber);
    commit("setAdditionalEmailAddress", payLoad.additionalEmailAddress);
  }
};
