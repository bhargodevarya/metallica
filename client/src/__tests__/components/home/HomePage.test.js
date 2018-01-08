import React from 'react'
import { shallow,render,mount,configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../../app/components/home/HomePage'
import Scroller from '../../../app/components/scroller/Scroller'
import AppBar from 'material-ui/AppBar/AppBar';
configure({ adapter: new Adapter() });

const homePage = shallow(<HomePage/>)

test('HomePage should have the scroller component',() => {    
    expect(homePage.contains(<Scroller/>)).toBe(true)
})

test('HomePage should contain an AppBar', () => {
    console.log(homePage.find('AppBar').length)
    expect(homePage.find('AppBar').length).toBe(1)
})