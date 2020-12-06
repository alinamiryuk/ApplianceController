import {
  CREATE_APPLIANCE,
  GET_ALL_APPLIANCES,
} from './actionTypes'

const initialState = []

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_APPLIANCES:
      return action.payload


    case CREATE_APPLIANCE:
      return [...state, action.payload]

    default:
      return state
  }
}
