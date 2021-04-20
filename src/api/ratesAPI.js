import axios from "axios";

export const getLatestInEUR = async () => {
  try {
    const rates = await axios.get(`${process.env.VUE_APP_RATES_API_EUR}`);
    if (!rates) {
      console.log("Getting rates has failed.");
    }
    return rates;
  } catch (err) {
    console.log(err);
  }
};

const checkIfParamString = param => {
  if (!(typeof param == "string" || param instanceof String)) {
    throw new Error("Given parameter should be STRING data type.");
  }
};

export const getLatest = async base => {
  checkIfParamString(base);
  try {
    const rates = await axios.get(
      `${process.env.VUE_APP_RATES_API_EUR}?base=${base}`
    );
    if (!rates) {
      console.log("Getting rates by base name has failed.");
    }
    return rates;
  } catch (err) {
    console.log(err);
  }
};

export const getLatestSymbolOnly = async symbol => {
  checkIfParamString(symbol);
  try {
    const rates = await axios.get(
      `${process.env.VUE_APP_RATES_API_EUR}?symbol=${symbol}`
    );
    if (!rates) {
      console.log("Getting rates by base name has failed.");
    }
    return rates;
  } catch (err) {
    console.log(err);
  }
};
