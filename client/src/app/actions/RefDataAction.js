import Actions from '../actions/Actions'

export function loadRefData(refData) {
    console.log("TradesAction creating a refData action", refData)
    return {
        type: Actions.LOAD_REF_DATA,
        refData : refData
    }
}

export function loadRefDataSuccess(refData) {
    console.log("TradesAction calling the action to load refData", refData)
    return function(dispatch) {
        return dispatch(loadRefData(refData))
    }
}