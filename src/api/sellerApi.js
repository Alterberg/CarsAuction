import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/sellers/";

export function getSellerss() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
