import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchDeleteAppliance } from '../../redux/thunks'
import './Appliance.css'

export const Appliance = ({ appliance }) => {
  const dispatch = useDispatch()
  return (
    <div className="appliance">
      <h2>{appliance.model}</h2>
      {appliance.connection ? <div className="appliance__online">on</div> : <div className="appliance__offline">off</div>}
      {appliance.task ? <div className="appliance__online">busy</div> : <div className="appliance__offline">free</div>}
      <p>{appliance.room}</p>
      <p>{appliance.applianceType}</p>
      <button onClick={(e) => {e.preventDefault()
      dispatch(fetchDeleteAppliance(appliance))}}>
        DELETE
        </button>
    </div>
  )
}
