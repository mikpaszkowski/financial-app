export const mutations = {
  setCurrentName(state, payLoad) {
    state.currentName = payLoad;
  },
  setCurrentSurname(state, payLoad) {
    state.currentSurname = payLoad;
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
