export const getters = {
  getCurrentName: state => state.currentName,
  getCurrentSurname: state => state.currentSurname,
  getCurrentPhoneNumber: state => state.currentPhoneNumber,
  getCurrentAddress: state => state.currentAddress,
  getCurrentBirthDate: state => state.currentBirthDate,
  getAdditionalEmailAddress: state => state.additionalEmailAddress,
  getAdditionalPhoneNumber: state => state.additionalPhoneNumber,
  getCurrentEmailAddress: state => state.currentEmailAddress,
  getCurrentLanguage: state => state.currentLanguage,
  getCurrentTimeZone: state => state.currentTimeZone,
  getStatus: state => state.status,
  getUserId: state => state.userId,
  getPersonalData: state => {
    const dataObj = {
      name: state.currentName,
      surname: state.currentSurname,
      dateOfBirth: state.currentBirthDate,
      address: state.currentAddress
    };
    return dataObj;
  },
  getAccountSettings: state => {
    const dataObj = {
      language: state.currentLanguage,
      timezone: state.currentTimeZone,
      status: state.status
    };
    return dataObj;
  },
  getEmailPhoneAddress: state => {
    const dataObj = {
      email: state.currentEmailAddress,
      additionalEmail: state.additionalEmailAddress,
      phone: state.currentPhoneNumber,
      additionalPhone: state.additionalPhoneNumber
    };
    return dataObj;
  }
};
