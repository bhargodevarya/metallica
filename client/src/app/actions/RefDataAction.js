import Actions from '../actions/Actions'
import React from 'react'

export function loadRefData(refData) {
    console.log("RefDataAction creating a refData action", refData)
    return {
        type: Actions.LOAD_REF_DATA,
        refData : refData
    }
}

export function loadRefDataSuccess(refData) {
    console.log("RefDataAction calling the action to load refData", refData)
    return function(dispatch) {
        return dispatch(loadRefData(refData))
    }
}