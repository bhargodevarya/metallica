import Actions from '../actions/Actions'
import React from 'react'

export function RefDataReducer(state ={}, action) {
    console.log("RefDataReducer called", action.type)
    switch (action.type) {
        case Actions.LOAD_REF_DATA:
        console.log('RefDataReducer returning', action.refData)
        state = Object.assign({},action.refData)
        console.log("RefDataReducer, state is ", state)
        return state
        default:
        console.log("RefDataReducer, state is ", state)
            return state;
    }
}