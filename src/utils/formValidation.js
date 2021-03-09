import { capitalWordsRegex } from "./regexExpressions";

export const checkCapitalWord = inputString => {
    return String(inputString).match(capitalWordsRegex);
}