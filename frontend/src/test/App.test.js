import App from '../App'
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { NavLink } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'

describe('components rendering', () => {

  it('renders App component without crashing', () => {
    shallow(<App />)
  })
  
  it('renders Navbar component without crashing', () => {
    shallow(<Navbar />)
  })
})

describe('Navbar component', () => {
  let wrapper, firstNavLink, lastNavLink

  beforeEach(() => (wrapper = shallow(<Navbar />)))
  beforeEach(() => (firstNavLink = wrapper.find(NavLink).first()))
  beforeEach(() => (lastNavLink = wrapper.find(NavLink).last()))

  it('Navlink contains correct passed prop', () => {
    expect(firstNavLink.props().to).to.equal('/')
    expect(lastNavLink.props().to).to.equal('/create')
    expect(firstNavLink.props()).to.own.include({ to: '/' })
    expect(firstNavLink.props()).to.have.own.property('to')
    expect(firstNavLink.props()).to.have.all.keys('to', 'children')
  })

  it('Navlink contains correct passed prop', () => {
    expect(lastNavLink.text()).to.equal('Add a new appliance')
    expect(firstNavLink.text()).to.equal('All appliances')
    expect(lastNavLink.text()).to.be.a('string', 'Add a new appliance')
    expect(firstNavLink.text()).to.be.a('string')
    expect(firstNavLink.text()).to.have.lengthOf(14)
    expect(firstNavLink.text()).to.include('appliances')
  })
})
