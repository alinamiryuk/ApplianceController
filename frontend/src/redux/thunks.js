import { getAllAppliances, createAppliance } from './actions'

export const fetchGetAllAppliances = () => async (dispatch) => {
  const response = await fetch('/api/appliances')
  const result = await response.json()
  dispatch(getAllAppliances(result))
}

export const fetchCreateAppliance = (data) => async (dispatch) => {
  const response = await fetch('/api/appliances', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  dispatch(createAppliance(result))
}

export const fetchDeleteAppliance = (data) => async (dispatch) => {
  const response = await fetch('/api/appliances', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  dispatch(getAllAppliances(result))
}

export const fetchEditAppliance = (data) => async (dispatch) => {
  const response = await fetch('/api/appliances', {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  dispatch(getAllAppliances(result))
}


