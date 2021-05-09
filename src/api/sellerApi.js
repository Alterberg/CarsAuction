import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/sellers/";

export function getSellers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
