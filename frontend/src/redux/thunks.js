import { getAllAppliances } from "./actions"

export const fetchGetAllAppliances = () => async (dispatch) => {
  const response = await fetch('/api/appliances')
  const result = await response.json()
  dispatch(getAllAppliances(result))
}
