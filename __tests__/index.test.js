/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.tsx'

describe('With Enzyme', () => {
  it('App has link About', () => {
    const app = shallow(<App />)

    expect(app.find('p').find('a').text()).toEqual('About')
  })
})

describe('With Snapshot Testing', () => {
  it('App has link About', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
