import { CREATE_APPLIANCE, GET_ALL_APPLIANCES } from "./actionTypes"

export const getAllAppliances = (data) => {
  return {
    type: GET_ALL_APPLIANCES,
    payload: data
  }
}
export const createAppliance = (data) => {
  return {
    type: CREATE_APPLIANCE,
    payload: data
  }
}
