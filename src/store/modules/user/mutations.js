export const setCurrentName = (state, payLoad) => {
  state.currentName = payLoad;
};
export const setCurrentSurname = (state, payLoad) => {
  state.currentSurname = payLoad;
};
export const setCurrentPhoneNumber = (state, payLoad) => {
  state.currentPhoneNumber = payLoad;
};
export const setCurrentAddress = (state, payLoad) => {
  state.currentAddress = payLoad;
};
export const setCurrentBirthDate = (state, payLoad) => {
  state.currentBirthDate = payLoad;
};
export const setCurrentEmailAddress = (state, payLoad) => {
  state.currentEmailAddress = payLoad;
};
export const setAdditionalPhoneNumber = (state, payLoad) => {
  state.additionalPhoneNumber = payLoad;
};
export const setAdditionalEmailAddress = (state, payLoad) => {
  state.additionalEmailAddress = payLoad;
};
export const setCurrentLanguage = (state, payLoad) => {
  state.currentLanguage = payLoad;
};
export const setCurrentTimeZone = (state, payLoad) => {
  state.currentTimeZone = payLoad;
};
export const setStatus = (state, payLoad) => {
  state.status = payLoad;
};

export const authRequest = state => {
  state.status = "loading";
};

export const authSuccess = (state, payload) => {
  state.status = "success";
  state.token = payload.token;
  state.user = payload.user;
  console.log("user - mutation : " + JSON.stringify(state.user));
};
export const authError = state => {
  state.status = "error";
};
export const logout = state => {
  (state.status = ""), (state.token = "");
};
