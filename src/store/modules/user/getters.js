export const getCurrentName = state => state.user.first_name;
export const getCurrentSurname = state => state.user.last_name;
export const getCurrentPhoneNumber = state => state.user.phone;
export const getCurrentAddress = state => state.user.address;
export const getCurrentBirthDate = state => state.user.birth;
export const getAdditionalEmailAddress = state =>
  state.user.additionalEmailAddress;
export const getAdditionalPhoneNumber = state =>
  state.user.additionalPhoneNumber;
export const getCurrentEmailAddress = state => state.user.email;
export const getCurrentLanguage = state => state.user.language;
export const getCurrentTimeZone = state => state.user.timezone;
export const getStatus = state => state.status;
export const getUserId = state => state.user.id;

export const getPersonalData = state => {
  const dataObj = {
    name: state.user.first_name,
    surname: state.user.last_name,
    dateOfBirth: state.user.birth,
    address: state.user.address
  };
  return dataObj;
};
export const getAccountSettings = state => {
  const dataObj = {
    language: state.language,
    timezone: state.timezone,
    status: state.status
  };
  return dataObj;
};
export const getEmailPhoneAddress = state => {
  const dataObj = {
    email: state.email,
    additionalEmail: state.additionalEmailAddress,
    phone: state.phone,
    additionalPhone: state.additionalPhoneNumber
  };
  return dataObj;
};

export const isLoggedIn = state => !!state.token;

export const authStatus = state => state.status;
