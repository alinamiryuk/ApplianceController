import React from 'react'
import './Appliance.css'

export const Appliance = ({ appliance }) => {
  return (
    <div className="appliance">
      <h2>{appliance.model}</h2>
      {appliance.connection ? <div className="appliance__online">on</div> : <div className="appliance__offline">off</div>}
      {appliance.task ? <div className="appliance__online">busy</div> : <div className="appliance__offline">free</div>}
      <p>{appliance.room}</p>
      <p>{appliance.applianceType}</p>
    </div>
  )
}
