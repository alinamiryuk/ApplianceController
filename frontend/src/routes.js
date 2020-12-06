import React from 'react'
import { AppliancesList } from './components/AppliancesList/AppliancesList'
import { ApplianceCreator } from './components/ApplianceCreator/ApplianceCreator'
import { Switch, Route, Redirect } from 'react-router-dom'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/create" component={ApplianceCreator} />
      <Route path="/" component={AppliancesList} />
    </Switch>
  )
}
