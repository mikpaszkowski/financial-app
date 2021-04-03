const state = () => ({
  currentName: "Nicolas",
  currentSurename: "Kowalsky",
  currentPhoneNumber: "+48 985 652 332",
  additionalPhoneNumber: "+48 654 887 965",
  currentEmailAddress: "myEmail@gmail.com",
  additionalEmailAddress: "mySecondEmailAddress@gmail.com",
  currentBirthDate: "24/05/1994",
  currentAddress: "25 Union Square W, New York, NY 10003, USA",
  currentTimeZone: "(GMT-4:00) Santiago",
  currentLanguage: "Spanish",
  status: true,
  userId: 5
});

const getters = {
  getCurrentName: state => state.currentName,
  getCurrentSurname: state => state.currentSurename,
  getCurrentPhoneNumber: state => state.currentPhoneNumber,
  getCurrentAddress: state => state.currentAddress,
  getCurrentBirthDate: state => state.currentBirthDate,
  getAdditionalEmailAddress: state => state.additionalEmailAddress,
  getAdditionalPhoneNumber: state => state.additionalPhoneNumber,
  getCurrentEmailAddress: state => state.currentEmailAddress,
  getCurrentLanguage: state => state.currentLanguage,
  getCurrentTimeZone: state => state.currentTimeZone,
  getStatus: state => state.status,
  getUserId: state => state.userId
};

const mutations = {
  setCurrentName(state, payLoad) {
    state.currentName = payLoad;
  },
  setCurrentSurname(state, payLoad) {
    state.currentSurename = payLoad;
  },
  setCurrentPhoneNumber(state, payLoad) {
    state.currentPhoneNumber = payLoad;
  },
  setCurrentAddress(state, payLoad) {
    state.currentAddress = payLoad;
  },
  setCurrentBirthDate(state, payLoad) {
    state.currentBirthDate = payLoad;
  },
  setCurrentEmailAddress(state, payLoad) {
    state.currentEmailAddress = payLoad;
  },
  setAdditionalPhoneNumber(state, payLoad) {
    state.additionalPhoneNumber = payLoad;
  },
  setAdditionalEmailAddress(state, payLoad) {
    state.additionalEmailAddress = payLoad;
  },
  setCurrentLanguage(state, payLoad) {
    state.currentLanguage = payLoad;
  },
  setCurrentTimeZone(state, payLoad) {
    state.currentTimeZone = payLoad;
  },
  setStatus(state, payLoad) {
    state.status = payLoad;
  }
};

const actions = {
  updateUser(state, payLoad) {
    state.commit("setCurrentName", payLoad.name);
    state.commit("setCurrentSurname", payLoad.surname);
    state.commit("setCurrentBirthDate", payLoad.birth);
    state.commit("setCurrentAddress", payLoad.address);
  },
  updateAccountSettings(state, payLoad) {
    state.commit("setCurrentLanguage", payLoad.language);
    state.commit("setCurrentTimeZone", payLoad.timezone);
    state.commit("setStatus", payLoad.status);
  },
  updateEmailPhone(state, payLoad) {
    state.commit("setCurrentPhoneNumber", payLoad.phoneNumber);
    state.commit("setCurrentEmailAddress", payLoad.emailAddress);
    state.commit("setAdditionalPhoneNumber", payLoad.additionalPhoneNumber);
    state.commit("setAdditionalEmailAddress", payLoad.additionalEmailAddress);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
