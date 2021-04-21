export const getCurrentName = state => state.currentName;
export const getCurrentSurname = state => state.currentSurname;
export const getCurrentPhoneNumber = state => state.currentPhoneNumber;
export const getCurrentAddress = state => state.currentAddress;
export const getCurrentBirthDate = state => state.currentBirthDate;
export const getAdditionalEmailAddress = state => state.additionalEmailAddress;
export const getAdditionalPhoneNumber = state => state.additionalPhoneNumber;
export const getCurrentEmailAddress = state => state.currentEmailAddress;
export const getCurrentLanguage = state => state.currentLanguage;
export const getCurrentTimeZone = state => state.currentTimeZone;
export const getStatus = state => state.status;
export const getUserId = state => state.userId;

export const getPersonalData = state => {
  const dataObj = {
    name: state.currentName,
    surname: state.currentSurname,
    dateOfBirth: state.currentBirthDate,
    address: state.currentAddress
  };
  return dataObj;
};
export const getAccountSettings = state => {
  const dataObj = {
    language: state.currentLanguage,
    timezone: state.currentTimeZone,
    status: state.status
  };
  return dataObj;
};
export const getEmailPhoneAddress = state => {
  const dataObj = {
    email: state.currentEmailAddress,
    additionalEmail: state.additionalEmailAddress,
    phone: state.currentPhoneNumber,
    additionalPhone: state.additionalPhoneNumber
  };
  return dataObj;
};
