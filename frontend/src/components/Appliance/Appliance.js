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
    <div className="appliance">
      {editArea ? (
        <div className="appliance__editArea">
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
      ) : (
        <>
          <div className="appliance__title">
            <h2>{appliance.model}</h2>
            {appliance.connection ? (
              <div className="appliance__connection appliance__online"><img src="/images/wf.png" /></div>
            ) : null }
          </div>

          {appliance.applianceType === 'washingMachine' ? (
            <img src="/images/w.png" />
          ) : (
            <img src="/images/ov.png" />
          )}
          <p>location: {appliance.room}</p>
          <div className="appliance__buttons">
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
        </>
      )}
    </div>
  )
}
