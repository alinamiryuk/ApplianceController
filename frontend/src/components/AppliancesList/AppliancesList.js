import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetAllAppliances } from '../../redux/thunks'
import { Appliance } from '../Appliance/Appliance'
import './AppliancesList.css'

export const AppliancesList = () => {
  const appliances = useSelector((store) => store)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGetAllAppliances())
  }, [dispatch])
  return (
    <div className="appliancesList">
      {console.log(appliances)}
      {appliances.map((appliance) => (
        <div>
          <Appliance appliance={appliance} key={appliance._id} />
        </div>
      ))}
    </div>
  )
}
