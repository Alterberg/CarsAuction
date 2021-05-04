import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/cars/";

export function getCars() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCar(car) {
  return fetch(baseUrl + (car.id || ""), {
    method: car.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(car)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCar(carId) {
  return fetch(baseUrl + carId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
