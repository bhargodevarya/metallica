import React from 'react'
import { shallow,render,mount,configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from '../../../app/components/login/LoginPage'

configure({ adapter: new Adapter() });

test('should have a login button',() => {
    const loginPage = shallow(<LoginPage/>)
    console.log(loginPage.text())
    expect(loginPage.find('#login').length).toBe(1)
})