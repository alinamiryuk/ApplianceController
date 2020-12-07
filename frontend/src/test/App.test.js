import App from '../App'
import React from 'react'
import { shallow } from 'enzyme'

describe('components rendering', () => {
  it('renders App component without crashing', () => {
    shallow(<App />)
  })
})
