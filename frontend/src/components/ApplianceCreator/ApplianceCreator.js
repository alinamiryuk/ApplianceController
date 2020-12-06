import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { fetchCreateAppliance } from '../../redux/thunks'
import './ApplianceCreator.css'

export const ApplianceCreator = () => {
  const dispatch = useDispatch()
  const [data, setData] = useForm({
    model: '',
    room: 'bathroom',
    applianceType: 'washingMachine',
    connection: false,
    task: false
  })
  return (
    <div className="applianceCreator">
      <input name="model"
        defaultValue={data.model}
        onChange={setData}
        placeholder="example: EFLS527UIW"
      />
      <select name="room" defaultValue={data.room} onChange={setData}>
        <option selected value="bathroom">
          bathroom
        </option>
        <option value="kitchen">kitchen</option>
      </select>
      <select name="applianceType" defaultValue={data.applianceType} onChange={setData}>
        <option selected value="washingMachine">
          washing machine
        </option>
        <option value="oven">oven</option>
      </select>
      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch(
            fetchCreateAppliance(data)
          )
        }}
      >
        ADD
      </button>
    </div>
  )
}
