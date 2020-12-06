import { GET_ALL_APPLIANCES } from "./actionTypes"

export const getAllAppliances = (data) => {
  return {
    type: GET_ALL_APPLIANCES,
    payload: data
  }
}
