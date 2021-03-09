import { capitalWordsRegex } from "./regexExpressions";
import { emailRegex } from "./regexExpressions";

export const checkCapitalWord = inputString => {
    return String(inputString).match(capitalWordsRegex);
}


export const checkEmail = inputString => {
    return String(inputString).match(emailRegex);
}