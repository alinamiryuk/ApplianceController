import React from 'react'
import { useForm } from '../../hooks/useForm'
import './ApplianceCreator.css'

export const ApplianceCreator = () => {
  const [data, setData] = useForm({ model: '', room: '', applianceType: ''})
  return (
    <div className="applianceCreator">
      <input value={data.model} onChange={setData} />
      <select value={data.room} onChange={setData}>
        <option selected value="bathroom">bathroom</option>
        <option value="kitchen">kitchen</option>
      </select>
      <select value={data.applianceType} onChange={setData}>
        <option selected value="washingMachine">washing machine</option>
        <option value="oven">oven</option>
      </select>
      <button>ADD</button>
      {/* <button onClick={e => e.preventDefault() dispatch(fetchCreateAppliance(data))}>ADD</button> */}
    </div>
  )
}
