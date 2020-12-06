import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { fetchDeleteAppliance, fetchEditAppliance } from '../../redux/thunks'
import './Appliance.css'

export const Appliance = ({ appliance }) => {
  const dispatch = useDispatch()
  const [editArea, setEditArea] = useState(false)
  const [data, setData] = useForm({
    _id: appliance._id,
    model: appliance.model,
    room: appliance.room,
    applianceType: appliance.applianceType,
    connection: appliance.connection,
    task: appliance.task,
  })

  return (
    <>
      <div className="appliance">
        <h2>{appliance.model}</h2>
        {appliance.connection ? (
          <div className="appliance__online">on</div>
        ) : (
          <div className="appliance__offline">off</div>
        )}
        {appliance.task ? (
          <div className="appliance__online">busy</div>
        ) : (
          <div className="appliance__offline">free</div>
        )}
        <p>{appliance.room}</p>
        <p>{appliance.applianceType}</p>
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(fetchDeleteAppliance(appliance))
          }}
        >
          DELETE
        </button>
        <button onClick={() => setEditArea((state) => !state)}>EDIT</button>
      </div>
      {editArea ? (
        <div className="applianceCreator">
          <input
            name="model"
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
          <select
            name="applianceType"
            defaultValue={data.applianceType}
            onChange={setData}
          >
            <option selected value="washingMachine">
              washing machine
            </option>
            <option value="oven">oven</option>
          </select>
          <button
            onClick={() => {
              dispatch(fetchEditAppliance(data))
              setEditArea((state) => !state)
            }}
          >
            SAVE
          </button>
        </div>
      ) : null}
    </>
  )
}
